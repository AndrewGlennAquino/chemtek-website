const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");

// Re-use sequelize instance across invocations
let sequelize = null;

/**
 * Get connection to server with options and return sequlize object.
 * @returns sequelize object
 */
const loadSequelize = async () => {
  const sequelize = new Sequelize(process.env.DB_URI, {
    host: process.env.DB_HOST,
    port: process.env.PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB,
    dialect: "postgres",
    dialectModule: pg,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
      keepAlive: true,
    },
    ssl: true,
    protocol: "postgres",
    schema: process.env.DB_SCHEMA,
    pool: {
      max: 5,
      min: 0,
      idle: 0,
      acquire: 36000,
      evict: 36000,
    },
  });

  try {
    await sequelize.authenticate();
    console.log("Successful authentication")
  } catch (err) {
    console.error("There was a problem with authentication", err);
  }

  return sequelize;
};

/**
 * Handle HTTP GET request to this endpoint.
 * Make GET request to Render PostgreSQL server.
 *
 * @param {*} req http request to this endpoint
 * @param {*} context http request metadata
 * @returns 200 status code and allBlogs JSON on success
 * @returns 500 status code and error message on failure
 */
export const handler = async (req, context) => {
  // Reuse sequelize instance across invocations to imporve performance
  if (!sequelize) {
    sequelize = await loadSequelize();
  } else {
    // restart connection pool to ensure connections are not re-used across invocations
    sequelize.connectionManager.initPools();

    // restore "getConnection()" if it has been overwritten by "close()"
    if (sequelize.connectionManager.hasOwnProperty("getConnection")) {
      delete sequelize.connectionManager.getConnection;
    }
  }

  /**
   * Define blog_posts sequelize model as a table in
   * blog_schema.blog_posts. All CRUD operations operate
   * on this table.
   */
  const blog_posts = sequelize.define(
    "blog_posts",
    {
      post_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      post_title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      post_body: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  /**
   * Try to sync model to database. On successful sync, get all blog posts,
   * then return successful code and JSON of all blogs. On error, close
   * connection then return server error code and error message.
   */
  try {
    // Connect to table within database
    await blog_posts.sync();

    /**
     * Get all blogs from blog_schema.blog_posts
     * in descending order (newest to latest),
     * then close connection.
     */
    const allBlogs = await blog_posts.findAll({
      order: [["created_at", "DESC"]],
    });

    return {
      statusCode: 200,
      body: JSON.stringify(allBlogs),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  } finally {
    await sequelize.connectionManager.close();
  }
};
