const request = require("supertest");
const app = require("../server");

describe("GET /notas", () => {
  it("Debe devolver un arreglo de notas", async () => {
    const res = await request(app).get("/notas");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
