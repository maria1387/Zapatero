const request = require("supertest");
const server = require("../../server")

describe("Operaciones CRUD", () => {
	it("Obteniendo un 200", async () => {
	const response = await request(server).get("/productos").send();
	const status = response.statusCode;
	expect(status).toBe(200);
	});
	// it("Obteniendo un producto", async () => {
	// 	const { body } = await request(server).get("/productos/1").send();
	// 	const producto = body;
	// 	expect(producto).toBeInstanceOf(Object);
	// 	});
		
	})
