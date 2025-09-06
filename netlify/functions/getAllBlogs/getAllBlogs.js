const { Sequelize, DataTypes } = require("sequelize");

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
  // Create new sequelize object that connects to database url with options
  const sequelize = new Sequelize(process.env.DB_URL, {
    schema: "blog_schema",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    protocol: "postgres",
    logging: false,
  });

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

    // Get all blogs from blog_schema.blog_posts, then close connection
    const allBlogs = await blog_posts.findAll();
    sequelize.close();

    return {
      statusCode: 200,
      body: JSON.stringify(allBlogs),
    };
  } catch (err) {
    sequelize.close();

    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  }
};
