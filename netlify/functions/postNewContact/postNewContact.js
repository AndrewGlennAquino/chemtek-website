// Library imports
const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_PREFIX,
});

/**
 * Handle HTTP POST request to this endpoint.
 * Pull Name email, and message from request body, then
 * make POST request to Mailchimp API.
 *
 * @param {*} req http request to this endpoint
 * @param {*} context http request metadata
 * @returns 200 status code and message on success
 * @returns 500 status code and message on failure
 */
export const handler = async (req, context) => {
  // Await request body, then parse the data
  const body = await req.body;
  const data = JSON.parse(body);

  /* Try to add new contact to Mailchimp audience using Mailchimp API.
   * If response is successful, return status code 200 and stringified response.
   * On caught error, then respond with status code 500 and error message.
   */
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID,
      {
        status: "subscribed",
        email_address: data.email,
        merge_fields: {
          NAME: data.name,
          MESSAGE: data.message,
        },
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response),
    };
  } catch (err) {
    console.log(err);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: "ERROR" }),
    };
  }
};
