CREATE DATABASE zapatero;
\c zapatero;
-- users table 
CREATE TABLE users(
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  roles varchar(25),
  created_at date default current_date,
  reset_token varchar(255)
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



