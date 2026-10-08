const request = require("supertest");

const app = require("../src/server");

describe("Application Tests", () => {
  test("Health endpoint should return 200", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);

    expect(response.body.status).toBe("healthy");
  });
});
