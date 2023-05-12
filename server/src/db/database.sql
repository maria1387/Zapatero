CREATE DATABASE zapatero;
\c zapatero;
-- users table 
CREATE TABLE users(
  user_id serial primary key,
  email varchar(255) unique not null,
  password varchar(255) not null,
  created_at date default current_date
);



//Tabla de datos de los productos 
CREATE TABLE producto (id SERIAL, modelo VARCHAR(50) NOT NULL, categoria VARCHAR(50) NOT NULL, talla VARCHAR(50) NOT NULL, precio INTEGER);

//insertar datos en tabla productos
//BD usuario Login
CREATE TABLE usuarios ( id SERIAL, nombre VARCHAR(50) NOT NULL,  email VARCHAR(50) NOT NULL, password
VARCHAR(60) NOT NULL, telefono VARCHAR(25), direccion  VARCHAR(60) );