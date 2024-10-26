# news-prueba-tecnica

Prueba técnica para Allfunds

# News APP client

Usar el comando `npm run dev` para levantar el cliente
En el cliente han quedado pendientes las siguientes características:

- Testing
- Conexión mediante websocket para visualizar on-live las inserciones de nuevas noticias o archivadas
- Se podría montar, un sistema de colas con RabbitMQ para la gestión de nuevas inserciones y archivadas y evitar condiciones de carrera

# News APP server

Usar el comando `npm start` para levantar el servidor
Usar el comando `npm test` para lanzar los tests
En el lado del servidor ha quedado pendiente:

- Testing (mejor cobertura)
- Websocket para la visualización on-live de las nuevas inserciones de noticias o archivadas
- Se podría montar, un sistema de colas con RabbitMQ para la gestión de nuevas inserciones y archivadas y evitar condiciones de carrera

Pdte. en cuanto al proyecto:

- Dockerizar todo para levantar el proyecto conjuntamente
