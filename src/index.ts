//Crea una interface Vehicle con propiedades comunes a distintos vehículos como model, year, color, etc. Luego
//crea interfaces Car y Motorcycle que hereden de Vehicle y tengan propiedades específicas, implemente en una
//clase

interface Vehicle {
  modelo: string;
  año: number;
  color: string;
  placa: number;
  tamaño: string;

  getInfo(): string;
}

interface Car extends Vehicle {
  numero: number;
  getNumero(): number;
}

interface Motorcycle extends Vehicle {
  tipo: string;
  getTipo(): string;
}

class Auto implements Car {
  constructor(
    public modelo: string,
    public año: number,
    public color: string,
    public placa: number,
    public tamaño: string,
    public numero: number,
  ) {}

  getInfo(): string {
    return `Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Placa: ${this.placa}, Tamaño: ${this.tamaño}, Número: ${this.numero}`;
  }

  getNumero(): number {
    return this.numero;
  }
}

class Moto implements Motorcycle {
  constructor(
    public modelo: string,
    public año: number,
    public color: string,
    public placa: number,
    public tamaño: string,
    public tipo: string
  ) {}

  getInfo(): string {
    return `Modelo: ${this.modelo}, Año: ${this.año}, Color: ${this.color}, Placa: ${this.placa}, Tamaño: ${this.tamaño}, Tipo: ${this.tipo}`;
  }

  getTipo(): string {
    return this.tipo;
  }
}

// objetos de ejemplo
const auto1 = new Auto("Toyota Corolla", 2023, "Blanco", 12345, "Mediano", 123);
const moto1 = new Moto(
  "Honda CBR600RR",
  2021,
  "Rojo",
  56789,
  "Deportiva",
  "Sport"
);

console.log("Información del auto:");
console.log(auto1.getInfo());
console.log("Número de puertas:", auto1.getNumero());

console.log("\nInformación de la motocicleta:");
console.log(moto1.getInfo());
console.log("Tipo de motocicleta:", moto1.getTipo());



2 //Crea una interface User y otra interfaz Admin que herede de User. Crea una función para imprimir datos de
//usuario que acepte tanto User como Admin
class Cliente {
  constructor(public nombreUsuario: string, public correoElectronico: string) {}

  obtenerNombre(): string {
      return this.nombreUsuario;
  }

  obtenerCorreo(): string {
      return this.correoElectronico;
  }
}

class Administrador extends Cliente {
  constructor(nombreUsuario: string, correoElectronico: string, public nivelAdmin: string) {
      super(nombreUsuario, correoElectronico);
  }

  obtenerNivel(): string {
      return this.nivelAdmin;
  }
}

function imprimirDatosCliente(cliente: Cliente): void {
  console.log("Nombre:", cliente.obtenerNombre());
  console.log("Correo electrónico:", cliente.obtenerCorreo());
  if (cliente instanceof Administrador) {
      console.log("Nivel de administrador:", cliente.obtenerNivel());
  }
}

// Ejemplo de uso
const cliente1 = new Cliente("andrea", "andrea1@example.com");
const admin1 = new Administrador("juan", "juan123@example.com", "Jefe de administración");

console.log("Datos del cliente:");
imprimirDatosCliente(cliente1);

console.log("\nDatos del administrador:");
imprimirDatosCliente(admin1);


//Crea una interface Product con name, price, etc. Crea una interface Inventory que contenga un array de Product
//y funciones para agregar y buscar productos

interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
  marca: string;
}

interface Inventory {
  products: Producto[];
  
  addProduct(product: Producto): void;
  
  findProductByName(name: string): Producto | undefined;
}

class SimpleInventory implements Inventory {
  products: Producto[] = [];
  
  addProduct(product: Producto): void {
    this.products.push(product);
  }
  
  findProductByName(name: string): Producto | undefined {
    return this.products.find(product => product.nombre === name);
  }
}

const inventory = new SimpleInventory();

const producto1: Producto = { nombre: "Chocolate", precio: 6700, descripcion: "Chocolate Lyne Endulsado Con Splenda 200 G", marca: "Chocolate Lyne" };
const producto2: Producto = { nombre: "Azucar", precio: 12875, descripcion: "AZUCAR MANUELITA POLIET 2.5 kg", marca: "Azucar Manuelita" };

inventory.addProduct(producto1);
inventory.addProduct(producto2);

const foundProduct = inventory.findProductByName("Chocolate");
if (foundProduct) {
  console.log("Producto encontrado:", foundProduct);
} else {
  console.log("Producto no encontrado");
}


//Crea una interface BaseObject con una propiedad id. Luego crea interfaces User, Product y Order que hereden de
//BaseObject. Crea una función genérica que pueda imprimir los datos

interface ObjetoBase {
  id: number;
}

interface Usuario extends ObjetoBase {
  nombre: string;
  correo: string;
}

interface Productos extends ObjetoBase {
  nombre: string;
  precio: number;
}

interface Orden extends ObjetoBase {
  idUsuario: number;
  idProducto: number;
  cantidad: number;
}

const Usuario: Usuario = { id: 1, nombre: "Juan Pérez", correo: "juan@example.com" };
const Productos: Productos = { id: 2, nombre: "Teléfono", precio: 500 };
const ordenes: Orden = { id: 3, idUsuario: 1, idProducto: 2, cantidad: 1 };

imprimirObjeto(Usuario);
imprimirObjeto(Productos);
imprimirObjeto(ordenes);function imprimirObjeto<T extends ObjetoBase>(obj: T): void {
  console.log("ID del objeto:", obj.id);
  if ('nombre' in obj) console.log("Nombre:", obj.nombre);
  if ('correo' in obj) console.log("Correo:", obj.correo);
  if ('precio' in obj) console.log("Precio:", obj.precio);
  if ('idUsuario' in obj) console.log("ID Usuario:", obj.idUsuario);
  if ('idProducto' in obj) console.log("ID Producto:", obj.idProducto);
  if ('cantidad' in obj) console.log("Cantidad:", obj.cantidad);
}

const usuario: Usuario = { id: 1, nombre: "Juan Pérez", correo: "juan@example.com" };
const Producto: Productos = { id: 2, nombre:"Teléfono", precio: 500 };
const orden: Orden = { id: 3, idUsuario: 1, idProducto: 2, cantidad: 1 };

imprimirObjeto(usuario);
imprimirObjeto(Productos);
imprimirObjeto(orden);


// Crea una interface Database con funciones como connect, find, update, etc. Luego crea una clase
//MySQLDatabase e SQLiteDatabase que implementen esa interface con distintas funcionalidades.
interface Database {
  connect(): void;
  find(query: string): any[];
  update(query: string, data: any): void;
}

class MySQLDatabase implements Database {
  connect(): void {
    console.log("Conectando a la base de datos MySQL...");
  }

  find(query: string): any[] {
    console.log("Buscando en MySQL:", query);
  
    return []; 
  }

  update(query: string, data: any): void {
    console.log("Actualizando en MySQL:", query, "con datos:", data);
  }
}

class SQLiteDatabase implements Database {
  connect(): void {
    console.log("Conectando a la base de datos SQLite...");
    // Lógica de conexión a SQLite
  }

  find(query: string): any[] {
    console.log("Buscando en SQLite:", query);
    return []; 
  }

  update(query: string, data: any): void {
    console.log("Actualizando en SQLite:", query, "con datos:", data);
  }
}

// Ejemplo de uso
const mysqlDB = new MySQLDatabase();
mysqlDB.connect();
mysqlDB.find("SELECT * FROM users");
mysqlDB.update("UPDATE users SET email = 'new@example.com' WHERE id = 1");

const sqliteDB = new SQLiteDatabase();
sqliteDB.connect();
sqliteDB.find("SELECT * FROM products");
sqliteDB.update("UPDATE products SET price = 100 WHERE id = 1");
