/**
 * Handle HTTP POST request to this endpoint.
 * Trigger website rebuild on request to this endpoint.
 *
 * @param {*} req http request to this endpoint
 * @param {*} context http request metadata
 * @returns 200 status code on success.
 * @returns 500 status code on failure.
 * @returns 400 status code on error.
 */

export const handler = async (req, context) => {
  /**
   * Try post request to bulid hook url.
   * If response is ok, console log then return status code 200.
   * If response is not 200, console log then return response status code.
   * If there is an error, console log error then return status code 400.
   */
  try {
    const response = await fetch(process.env.BUILD_HOOK_URL, {
      method: "POST",
    });

    if (response.ok) {
      console.log("Successful rebuild!");

      return {
        statusCode: 200,
      };
    } else {
      console.log("Something went wrong with rebuild!", response.status);

      return {
        statusCode: response.status,
      };
    }
  } catch (err) {
    console.error(err);

    return {
      statusCode: 400,
    };
  }
};
