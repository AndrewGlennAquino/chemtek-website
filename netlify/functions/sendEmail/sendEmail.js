const mailchimp = require("@mailchimp/mailchimp_marketing");

/**
 * Handle HTTP POST request to this end point.
 * Pull sanitized user data, then make post request to
 * Mailchimp API
 *
 * @param {*} req http request to endpoint
 * @param {*} context http request metadata
 * @returns http response from Mailchimp API
 */
export const handler = async (req, context) => {
  // Configure Mailchimp API with environment variables
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_SERVER_PREFIX,
  });

  // Parse HTTP POST request body into object, then deconstruct
  const data = await JSON.parse(req.body);
  const { name, company, email, phone } = data;

  /**
   * Make call to MailchimpAPI to add list member, then send confirmation
   * email to given email address to confirm signup.
   */
  // const response = await mailchimp.lists.addListMember(
  //   process.env.MAILCHIMP_AUDIENCE_ID,
  //   {
  //     email_address: email,
  //     status: "subscribed",
  //     merge_fields: {
  //       NAME: name,
  //       COMPANY: company,
  //       PHONE: phone
  //     }
  //   }
  // );

  const response = await mailchimp.ping.get();

  console.log(response)

  return {
    body: JSON.stringify(response),
    statusCode: 200,
  };
};
