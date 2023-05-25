const request = require("supertest");
const server = require("../index")

describe("Operaciones CRUD", () => {
	it("Obteniendo un 200", async () => {
	const response = await request(server).get("/productos").send();
	const status = response.statusCode;
	expect(status).toBe(200);
	});
	it("Obteniendo un producto", async () => {
		const { body } = await request(server).get("/productos/1").send();
		const producto = body;
		expect(producto).toBeInstanceOf(Object);
		});
		
	
		it('debería devolver el estado 400 cuando el producto no existe', async () => {
			const jwt = 'Token';
			const idEliminar = 100;
			const {statusCode}= await request(server)
			  .delete(`/productos/${idEliminar}`)
			  .set("Authorization", jwt)
			  .send();
		
			expect(statusCode).toBe(404);
		  });

		//   it("Enviando un nuevo producto", async () => {
		// 	const id = Math.floor(Math.random() * 999);
		// 	const producto = { id, name:"Zapatilla Outdoor Hombre Beagle Mid", sku: "809209305", img:"https://batacl.vtexassets.com/arquivos/ids/881324-1200-auto?v=638193236017330000&width=1200&height=auto&aspect=true", img1:"https://batacl.vtexassets.com/arquivos/ids/881325-1200-auto?v=638193236019970000&width=1200&height=auto&aspect=true", img2:"https://batacl.vtexassets.com/arquivos/ids/881326-1200-auto?v=638193236022170000&width=1200&height=auto&aspect=true", img3:"https://batacl.vtexassets.com/arquivos/ids/881329-1200-auto?v=638193236028700000&width=1200&height=auto&aspect=true", description:"prueba de testing", price:"49.990", category:"hombre",outstanding:"no destacado", model:"WEINBRENNER" };
		// 	const { body: productos } = await request(server)
		// 	.post("/productos")
		// 	.send(producto);
		// 	// expect(productos).toContainEqual(producto);
		// });
	
			it(' should have a content-type: aplication/json in header',async () => {
				const response = await request(server).post("/productos").send();
				expect(response.headers["content-type"]).toEqual(expect.stringContaining("json"));

			});
			// it('should respond with an producto  ids', async () => {
			// 	const response = await request(server).post("/productos").send({
				  
			// 	  name:"Zapatilla Deportiva Mujer Hem", sku: "501688204", img:"https://batacl.vtexassets.com/arquivos/ids/845868-1600-auto?v=638151830797200000&width=1600&height=auto&aspect=true", img1:"https://batacl.vtexassets.com/arquivos/ids/845869-1200-auto?v=638151830799430000&width=1200&height=auto&aspect=true", img2:"https://batacl.vtexassets.com/arquivos/ids/845871-1200-auto?v=638151830803330000&width=1200&height=auto&aspect=true", img3:"https://batacl.vtexassets.com/arquivos/ids/845871-1200-auto?v=638151830803330000&width=1200&height=auto&aspect=true", description:"Zapatilla estilo court de la tendencia block en colores negros con detalles en celeste y fucsia que le entregan un estilo único y audaz a tu look. incorpora tecnología life natural, antibacterial de alta calidad.", price: 44.990, category:"mujer",outstanding:"no destacado", model:"North Star"
			// 	})
			
			// 	expect(response.body.id).toBeDefined();
			//   });
		
		// it('debería retornar 400 cuando se actualiza un café enviando diferentes  ids', async () => {
		// 	const id = 2
		// 	const payload = {
		// 	  id: 3,
		// 	  name:"Zapatilla Deportiva Mujer Hem", sku: "501688204", img:"https://batacl.vtexassets.com/arquivos/ids/845868-1600-auto?v=638151830797200000&width=1600&height=auto&aspect=true", img1:"https://batacl.vtexassets.com/arquivos/ids/845869-1200-auto?v=638151830799430000&width=1200&height=auto&aspect=true", img2:"https://batacl.vtexassets.com/arquivos/ids/845871-1200-auto?v=638151830803330000&width=1200&height=auto&aspect=true", img3:"https://batacl.vtexassets.com/arquivos/ids/845871-1200-auto?v=638151830803330000&width=1200&height=auto&aspect=true", description:"Zapatilla estilo court de la tendencia block en colores negros con detalles en celeste y fucsia que le entregan un estilo único y audaz a tu look. incorpora tecnología life natural, antibacterial de alta calidad.", price: 44.990, category:"mujer",outstanding:"no destacado", model:"North Star"
		// 	}
		//  await request(server).put(`/productos/${id}`).send(payload);
		// 	// expect(response.status).toBe(400);
		//   });
	
		
	
		
		
	})
