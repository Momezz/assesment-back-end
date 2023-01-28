# assesment-back-end# assesment-back-end

## API de usuarios y listas
**Este es un una API de listas que permite a los usuarios crear, leer, actualizar y eliminar listas mediante peticiones HTTP**

## Endpoints
**La API cuenta con los siguientes endpoints:**

- Obtener todas las usuarios: GET http://localhost:8080/api/users
- Obtener una usuario específico: GET http://localhost:8080/api/users/:id
- Actualizar un usuario: PATCH http://localhost:8080/api/users:id
- Eliminar una usuario: DELETE http://localhost:8080/api/users/:id
- Crear un usuario: POST http://localhost:8080/api/users
- Crear una usuario
- Para crear un usuario, envíe una solicitud POST al endpoint  con el siguiente cuerpo:

json
{
  "name": "Juana m",
  "email": "juanam@mail.com",
  "password": "01234",
  "favorite": [
    "63d0b0addcc2a7f9903a1c16",
    "63d0b23cd28dd4819c759ebf"
  ]
}

despues necesitara loguearse al endpoints POST   http://localhost:8080/auth/local/login con el siguiente cuerpo

json
{
"email": "kz@mz.com",
"password": "12345"
}
**La respuesta sera un token que debera usar para autenticarse**

## Obtener todos los usuarios
Para obtener todas los usuario, envíe una solicitud GET al endpoint. La respuesta será un arreglo de objetos con la información de cada usuario.

## Obtener un usuario específico
Para obtener un usuario específico, envíe una solicitud GET al endpoint cón el id, donde id es el ID de cada usuario que desee obtener. La respuesta será un objeto con la información del usuario

## Actualizar un usuario
Para actualizar un usuario, envie una solicitud PATCH al endpoint con el y id con el siguiente cuerpo o el item que desea modificar:

json
{
  "name": "Juana m",
  "email": "juanam@mail.com",
  "password": "01234",
  "favorite": [
    "63d0b0addcc2a7f9903a1c16",
    "63d0b23cd28dd4819c759ebf"
  ]
}

**La respuesta sera el usuario actualizado.**

## Eliminar un usuario
Para eliminar un usuario envíe una solicitud DELETE al endpoint mas el id, donde :id es el ID del usuario que desea eliminar. La respuesta sera usuario eliminado


## Endpoints para lista de favoritos

La API cuenta con los siguientes endpoints:

- Crear una lista: POST http://localhost:8080/api/favorite
- Obtener todas las listas: GET http://localhost:8080/api/favorite
- Obtener una lista específica: GET http://localhost:8080/api/favorite/:id
- Actualizar una lista: PATCH http://localhost:8080/api/favorite:id
- Eliminar una lista: DELETE http://localhost:8080/api/favorite/:id
- Crear una lista
- Para crear una lista, envíe una solicitud POST al endpoint  con el siguiente cuerpo:

json
{
  "name": "juegos",
  "favorite": {
    "titleList": "Juegos list",
    "description": "carreras",
    "link": "jue/.cas"
  }
}
**La respuesta será la lista creada.**

## Obtener todas las listas
Para obtener todas las listas, envíe una solicitud GET al endpoint. La respuesta será un arreglo de objetos con la información de cada lista.

## Obtener una lista específica
Para obtener una lista específica, envíe una solicitud GET al endpoint cón el id, donde :id es el ID de la lista que desea obtener. La respuesta será un objeto con la información de la lista.

## Actualizar una lista
Para actualizar una lista, envíe una solicitud PATCH al endpoint con el id con el siguiente cuerpo o el item que desea modificar:

json
{
  "name": "juegos",
  "favorite": {
    "titleList": "Juegos list",
    "description": "carreras",
    "link": "jue/.cas"
  }
}

**La respuesta será la lista actualizada.**

## Eliminar una lista
Para eliminar una lista, envíe una solicitud DELETE al endpoint mas el id, donde :id es el ID de la lista que desea eliminar. La respuesta será la lista eliminada

Es importante que cuando tenga las carpetas en su pc ejecute el comando npm install para que instale dependencias importantes para el correcto funcionamiento de tipos en las tecnologias implementadas en el proyecto ademas de de las que se usan para encriptar contraseñas, otorgar permisos al usuario etc

 "dependencies": {
    "bcryptjs": "",
    "cors": "",
    "dotenv": "",
    "express": "",
    "jsonwebtoken": "",
    "mongoose": "",
    "morgan": ""
  }

**Luego ejecute el comando npm run dev para iniciar la API**
