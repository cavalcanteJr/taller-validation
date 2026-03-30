const request = require("supertest");

async function runApiValidation() {
  const baseURL = "https://jsonplaceholder.typicode.com";
  const endpoint = "/posts/1";

  try {
    const response = await request(baseURL).get(endpoint);

    if (response.status !== 200) {
      throw new Error(
        `Status Code Validation Failed: Expected 200, got ${response.status}`,
      );
    }

    const body = response.body;

    const requiredKeys = ["userId", "id", "title", "body"];
    requiredKeys.forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(body, key)) {
        throw new Error(
          `Key Validation Failed: Missing key "${key}" in response`,
        );
      }
    });

    if (body.id !== 1) {
      throw new Error(
        `Value Validation Failed: Expected id 1, but received ${body.id}`,
      );
    }

    console.log("All tests passed");
  } catch (error) {
    console.error(error.message);
  }
}

runApiValidation();
