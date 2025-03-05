# Mini Ecommerce Web

[![GIF](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjZzbXEzMDFtbHZxMmU0azUza3hhNmxmNDZ4MW05eGh6aTZrdTltMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/TKSLd3q4TFh9jKzdQX/giphy.gif)](https://giphy.com/gifs/TKSLd3q4TFh9jKzdQX)


## Funcionalidades Principales

- **Autenticación y Registro de Usuarios**
- **Gestión de Productos (CRUD)**
- **Creación y Administración de Pedidos**
- **Exportación de Pedidos en PDF**
- **Roles de Usuario: Administrador, Vendedor y Cliente**

---

## Endpoints de la API
### Autenticación

- ```
  POST /auth/register
  ```

   → Registro de nuevos usuarios  
- ```
  POST /auth/login
  ```

   → Inicio de sesión

### Gestión de Usuarios

- ```
  GET /api/user
  ```

   → Obtener todos los usuarios  
- ```
  POST /api/user
  ```

   → Crear un nuevo usuario  
- ```
  GET /api/userUnique
  ```

   → Obtener un usuario específico  
- ```
  PUT /api/user
  ```

   → Modificar un usuario

### Gestión de Categorías

- ```
  GET /api/category
  ```

   → Obtener todas las categorías  
- ```
  DELETE /api/category/:name
  ```

   → Eliminar una categoría

### Gestión de Productos

- ```
  GET /api/product
  ```

   → Obtener lista de productos  
- ```
  POST /api/product
  ```

   → Crear un nuevo producto  
- ```
  GET /api/productUnique/:name
  ```

   → Obtener un producto específico  
- ```
  PUT /api/product/:id
  ```

   → Actualizar un producto  
- ```
  DELETE /api/product/:id
  ```

   → Eliminar un producto  
- ```
  PUT /api/productStock/:id
  ```

   → Actualizar stock de un producto

### Gestión de Pedidos

- ```
  GET /api/order
  ```

   → Obtener lista de pedidos  
- ```
  POST /api/order
  ```

   → Crear un nuevo pedido  
- ```
  GET /api/orderUnique
  ```

   → Obtener un pedido específico  
- ```
  PUT /api/orderChangeStatus
  ```

   → Cambiar estado de un pedido

## Documentación
## Objetivo General
Desarrollar un mini software web de ecommerce con un sistema de acceso, roles y dos módulos CRUD.

## Objetivos Específicos
- Implementar un sistema de autenticación y roles para gestionar el acceso de usuarios, diferenciando entre administradores, vendedores y clientes.
- Diseñar e implementar un módulo de productos donde los administradores y vendedores puedan agregar, modificar y eliminar productos del menú.
- Desarrollar un módulo de pedidos que permita a los clientes seleccionar productos, visualizar su carrito de compras y confirmar su orden.
- Incorporar un sistema de gestión de estados de pedidos, permitiendo a los administradores y vendedores actualizar su estado (pendiente, en preparación, entregado).
- Optimizar la experiencia de usuario en la interfaz web, utilizando React para el frontend y Node.js en el backend.
- Garantizar la persistencia de datos mediante una base de datos eficiente, que almacene información de usuarios, productos, pedidos y transacciones.
- Implementar un sistema de comprobantes de pago, permitiendo a los clientes adjuntar comprobantes en formato PDF o imagen.

## Descripción del negocio
**Tradición** es un café-restaurante enfocado en ofrecer productos artesanales con un toque casero, resaltando los sabores típicos de la región. Su menú incluye café de especialidad, postres caseros y platos tradicionales, permitiendo a los clientes disfrutar de una experiencia auténtica. A través de la plataforma de ecommerce, los clientes podrán explorar el menú, realizar pedidos en línea para recoger en tienda o solicitar entregas a domicilio.

## Requisitos de Información
### Funcionales
#### Autenticación
| ID | Requerimiento |
|----|--------------|
| 1  | Implementación de un sistema de autenticación basado en correo y contraseña |
| 2  | Solo los administradores pueden asignar y cambiar roles de usuario |
| 3  | Se deben manejar tres roles: Administrador, Vendedor y Cliente |

#### Módulo de Productos
| ID | Requerimiento |
|----|--------------|
| 1  | CRUD de productos (Crear, Leer, Actualizar, Eliminar) |
| 2  | Cada producto debe contener: Nombre, Descripción, Precio, Categoría, Stock e Imagen |
| 3  | Las imágenes deben almacenarse correctamente y ser accesibles desde la interfaz |

#### Módulo de Pedidos
| ID | Requerimiento |
|----|--------------|
| 1  | Los clientes pueden hacer pedidos seleccionando productos disponibles |
| 2  | Un pedido debe incluir: Lista de productos comprados, Cantidad de cada producto, Precio total, Estado del pedido y Comprobante de pago en PDF o imagen |
| 3  | Solo los administradores y vendedores pueden modificar el estado del pedido |

### No Funcionales
| ID | Requerimiento |
|----|--------------|
| 1  | Seguridad en el almacenamiento de contraseñas |
| 2  | Control de acceso según el rol del usuario |
| 3  | Validaciones de datos en formularios |

## Reglas del Negocio
| ID | Regla | Tipo |
|----|-------|------|
| 1  | Cada usuario debe registrarse con correo y contraseña | Estructural |
| 2  | Solo un administrador puede asignar roles | Procedimiento |
| 3  | Solo los administradores y vendedores pueden cambiar el estado del pedido | Procedimiento |
| 4  | Si un producto está agotado, no se puede añadir a un pedido | Estructural |
| 5  | El precio total del pedido se calcula automáticamente en base a los productos y sus cantidades | Estructural |
| 6  | Un cliente no puede realizar pedidos sin autenticarse | Estructural |
| 7  | Un producto no puede ser eliminado si está presente en un pedido en estado pendiente o enviado | Procedimiento |
| 8  | Un pedido no puede cambiar a enviado sin un comprobante de pago | Procedimiento |
| 9  | No se permite modificar un pedido después de haber sido entregado | Procedimiento |
| 10 | Los clientes pueden cancelar pedidos solo si el estado es pendiente | Procedimiento |

## Supuestos
| ID | Supuestos |
|----|----------|
| 1  | Un cliente puede ver el historial de sus pedidos desde su cuenta |
| 2  | La autenticación será mediante correo y contraseña |


### Diagrama Conceptual  
<img src="https://github.com/VlVergel-U/TradicionBack/blob/2157b91e66d632ffa016b2b0feb1bad3fcb50ac6/images/conceptual.png" alt="Modelo Conceptual">


### Diagrama Lógico  
<img src="https://github.com/VlVergel-U/TradicionBack/blob/2157b91e66d632ffa016b2b0feb1bad3fcb50ac6/images/logico.png" alt="Modelo Conceptual">

### Modelo de Tablas  
<img src="https://github.com/VlVergel-U/TradicionBack/blob/2157b91e66d632ffa016b2b0feb1bad3fcb50ac6/images/tabla.png" alt="Modelo Conceptual">

### Diagrama Físico  
<img src="https://github.com/VlVergel-U/TradicionBack/blob/2157b91e66d632ffa016b2b0feb1bad3fcb50ac6/images/fisico.png" alt="Modelo Conceptual">
