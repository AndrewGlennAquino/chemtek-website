const pg = require("pg");
const { Sequelize, DataTypes } = require("sequelize");

/**
 * Handle HTTP DELETE request to this endpoint.
 * Pull postId from request body, then
 * make DELETE request to Render PostgreSQL server.
 *
 * @param {*} req http request to this endpoint
 * @param {*} context http request metadata
 * @returns 200 status code and message on success
 * @returns 500 status code and message on failure
 */
export const handler = async (req, context) => {
  // Parse request body then destructure
  const data = JSON.parse(req.body);
  const postId = data;

  // Create new sequelize object that connects to database url with options
  const sequelize = new Sequelize(process.env.DB_URL, {
    schema: "blog_schema",
    dialect: "postgres",
    dialectModule: pg,
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
   * Try to sync model to database. On successful sync,
   * delete blog post, close connection, then return success code and message.
   * On error, close connection then return server error code and error message.
   */
  try {
    // Connect to table within database
    await blog_posts.sync();

    // Insert into blog_posts title and body values, then close connection
    await blog_posts.destroy({
      where: {
        post_id: postId,
      },
    });
    sequelize.close();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Successful DELETE" }),
    };
  } catch (err) {
    sequelize.close();

    return {
      statusCode: 500,
      body: JSON.stringify({ message: err }),
    };
  }
};
