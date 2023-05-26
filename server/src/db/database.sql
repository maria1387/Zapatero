CREATE DATABASE zapatero;
\c zapatero;
-- users table 
CREATE TABLE users(
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  roles varchar(25),
  created_at date default current_date
);



//Tabla de datos de los productos 
CREATE TABLE producto(
	id SERIAL PRIMARY KEY,
	name VARCHAR(400) UNIQUE,
  sku INT,
	img VARCHAR(4000),
	img1 VARCHAR(4000),
	img2 VARCHAR(4000),
	img3 VARCHAR(4000),
	description VARCHAR(3000),
	price INT,
	category VARCHAR(25),
outstanding VARCHAR(25),
model VARCHAR(50)
 );

SELECT * FROM producto;

 INSERT INTO producto(name, sku, img, img1, img2, img3, description, price, category, outstanding, model  )
VALUES ( 'Bota Mujer Lara','501394807', 'https://batacl.vtexassets.com/arquivos/ids/864492-1200-auto?v=638175991533630000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/864493-1200-auto?v=638175991536770000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/864494-1200-auto?v=638175991539100000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/864496-1200-auto?v=638175991544270000&width=1200&height=auto&aspect=true','bota de invierno' , 54990, 'Mujer', 'destacado', 'Bata'),('Bota Mujer Beagle Mid', '559221305','https://batacl.vtexassets.com/arquivos/ids/854107-1200-auto?v=638173654254100000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/854108-1200-auto?v=638173654257600000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/854110-1200-auto?v=638173654266270000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/854112-1200-auto?v=638173654271170000&width=1200&height=auto&aspect=true','BEAGLE es un calzado diseñado para la ciudad con una plantilla Ortholite, una membrana transpirable e impermeable y una suela de goma que ofrece un mejor agarre en las superficies.',47990, 'Mujer' ,'no destacado', 'WEINBRENNER'),('Bota Niña Levi', '301582506','https://batacl.vtexassets.com/arquivos/ids/822197-1200-auto?v=638146882804130000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/822198-1200-auto?v=638146882806730000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/822199-1200-auto?v=638146882808770000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/822202-1200-auto?v=638146882816970000&width=1200&height=auto&aspect=true', 'ssssssssssssss', 33990, 'Ninos', 'destacado', 'BUBBLEGUMMERS' ),('Botín Escolar Niña Baby Star II', '501693304', 'https://batacl.vtexassets.com/arquivos/ids/815283-1200-auto?v=638146851607330000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/815284-1200-auto?v=638146851609200000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/815285-1200-auto?v=638146851611730000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/815288-1200-auto?v=638146851618370000&width=1200&height=auto&aspect=true','ssssssss',31990,'Ninos','destacado', 'Bata'), ('Botín Escolar Niño Jacky Caña Alta','401604408', 'https://batacl.vtexassets.com/arquivos/ids/819887-1200-auto?v=638146871948000000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/819888-1200-auto?v=638146871949800000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/819889-1200-auto?v=638146871952130000&width=1200&height=auto&aspect=true','https://batacl.vtexassets.com/arquivos/ids/819892-1200-auto?v=638146871958530000&width=1200&height=auto&aspect=true','GGGGGGGGGGGGG',31990,'Ninos',' No destacado','BUBBLEGUMMERS'),('Zapato Mujer Mike','711616109', 'https://batacl.vtexassets.com/arquivos/ids/622596-1200-auto?v=638052635412800000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/622597-1200-auto?v=638052635414530000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/622599-1200-auto?v=638052635418000000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/622601-1200-auto?v=638052635421600000&width=1200&height=auto&aspect=true','Stiletto básico versátil.', 24990, 'Mujer', 'No destacado', 'Bata');


INSERT INTO producto (name, sku, img, img1, img2, img3, description, price, category, outstanding, model)
VALUES ('Zapatilla Urbana Hombre Rockefeller','884672104', 'https://batacl.vtexassets.com/arquivos/ids/813352-1200-auto?v=638146843251670000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/813353-1200-auto?v=638146843254000000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/813355-1200-auto?v=638146843258270000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/813357-1200-auto?v=638146843262000000&width=1200&height=auto&aspect=true','La tecnología Life Natural es antibacterial, entregando protección contra microorganismos a tus pies.', 33990, 'Hombre', 'Destacado', 'NORTHSTAR'), ('Botín Hombre Sarychev','801426402', 'https://batacl.vtexassets.com/arquivos/ids/824850-1200-auto?v=638146895052070000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/824851-1200-auto?v=638146895054270000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/824852-1200-auto?v=638146895056900000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/824855-1200-auto?v=638146895063930000&width=1200&height=auto&aspect=true','rrrrrrrrrrrrr', 49990, 'Hombre', 'No destacado', 'Bata'), ('Botín Outdoor Hombre Ascent Kodiak', '801666002','https://batacl.vtexassets.com/arquivos/ids/850912-1200-auto?v=638157786645430000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/850913-1200-auto?v=638157786648270000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/850915-1200-auto?v=638157786653570000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/850917-1200-auto?v=638157786658930000&width=1200&height=auto&aspect=true','Zapatilla Outdoor con mix de materiales,', 35990, 'Hombre', 'destacado', 'POWER'), ('Botín Mujer Real','501994207', 'https://batacl.vtexassets.com/arquivos/ids/866293-1200-auto?v=638176000790330000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/866294-1200-auto?v=638176000792830000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/866295-1200-auto?v=638176000795800000&width=1200&height=auto&aspect=true', 'https://batacl.vtexassets.com/arquivos/ids/866298-1200-auto?v=638176000803630000&width=1200&height=auto&aspect=true','jjjjjjjjjjjj', 34990, 'Mujer', 'No destacado', 'Bata');