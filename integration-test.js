const axios = require("axios");

describe("Integration test", () => {
  test("GET /health should return 200 status", async () => {
    const response = await axios.get("http://localhost:3000/health");
    expect(response.status).toBe(200);
  });
});
