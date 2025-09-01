/**
 * Handle HTTP POST request to this endpoint.
 * Pull title and body for blog, then make POST
 * request to Render PostgreSQL server.
 *
 * @param {*} req http request to endpoint
 * @param {*} context http request metadata
 * @returns http response from Render PostgreSQL server
 */

export const handler = async (req, context) => {
  try {
    console.log(req.body);

    const response = await fetch("http://localhost:3000/postBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req),
    });

    if (response.ok) {
      console.log("Successful POST from postBlog");
    } else {
      console.log(
        "There was a problem during POST from postBlog",
        response.status
      );
    }
  } catch (error) {
    console.error("There was an error during submission from postBlog!", error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify("Works!"),
  };
};
