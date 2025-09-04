const { Sequelize, QueryTypes } = require("sequelize");

/**
 * Handle HTTP POST request to this endpoint.
 * Pull title and body from request body, then
 * make POST request to Render PostgreSQL server.
 *
 * @param {*} req http request to endpoint
 * @param {*} context http request metadata
 * @returns http response from Render PostgreSQL server
 */

export const handler = async (req, context) => {
  // Parse request body then destructure
  const data = JSON.parse(req.body);
  const { postTitle, postBody } = data;

  // Create new sequelize object that connects to database url with options
  const sequelize = new Sequelize(process.env.DB_URL, {
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

  // Create paramterized query, then insert into blog_posts table
  try {
    const parameterizedQuery = `INSERT INTO blog_schema.blog_posts (post_title, post_body) VALUES ('${postTitle}', '${postBody}');`;

    const posts = await sequelize.query(parameterizedQuery, {
      type: QueryTypes.INSERT,
    });
    console.log(posts);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Works!" }),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Doesn't work!" }),
    };
  }
};
