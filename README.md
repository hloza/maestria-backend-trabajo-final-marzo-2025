# Gestor de Curriculums - Backend

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-15+-blue)
![Express](https://img.shields.io/badge/Express-4.x-lightgrey)
![Sequelize](https://img.shields.io/badge/Sequelize-6.x-orange)

## Descripción

Este proyecto es un backend desarrollado en Node.js con TypeScript para la gestión de curriculums. Permite a los usuarios:

- Registrarse y autenticarse mediante JWT
- Gestionar su perfil profesional
- Administrar habilidades técnicas
- Registrar experiencias laborales
- Añadir formación académica
- Mostrar proyectos personales

## Características principales

- 🔐 Autenticación segura con JWT
- 🏗️ Arquitectura escalable
- 📊 Base de datos relacional con PostgreSQL
- 📝 Documentación de API incluida
- 🔄 Validación de datos robusta
- 🛡️ Middlewares de seguridad

## Requisitos previos

Antes de instalar el proyecto, asegúrate de tener instalado:

- Node.js (versión 18 o superior)
- PostgreSQL (versión 15 o superior)
- npm (viene con Node.js)

## Instalación

1. Clonar el repositorio:

```bash
git clone <URL_DEL_REPOSITORIO>
cd gestor-curriculums-backend

```
2. instalar dependencias

```bash
npm istall
```

3. configurar .env en la raiz del proyeccto
```
DATABASE_URL=postgres://usuario:password@localhost:5432/nombre_bd
JWT_SECRET=clave_secreta_jwt
PORT=3000
NODE_ENV=development
```
4. ejecutar migraciones (de usar otra base de datos)
```
npx sequelize-cli db:migrate
```