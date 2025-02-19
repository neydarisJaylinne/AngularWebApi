# Employee API - Guía de Implementación FrontEnd Angular

Este proyecto Angular permite consultar la información de empleados a través de un formulario interactivo. Utiliza Material Design para la interfaz de usuario y se comunica con un backend alojado en otro repositorio.

## Descripción

El componente principal de este proyecto es una vista de formulario donde el usuario puede consultar la información de un empleado proporcionando su identificación. Al hacer clic en "Consultar", se realiza una petición al backend y se muestran los datos en una tabla.

El proyecto maneja el estado de carga con un spinner y muestra la información de los empleados en una tabla ordenable con paginación.

## Características

- **Formulario de consulta:** Permite al usuario ingresar la identificación de un empleado y hacer clic en "Consultar".
- **Interfaz de usuario con Angular Material:** Utiliza `mat-spinner` para mostrar un indicador de carga y `mat-card` para la tarjeta de consulta.
- **Tabla de resultados:** Muestra la información de los empleados con las columnas: Id, Nombre, Edad, Salario, Salario Anual e Imagen de Perfil.
- **Paginación y ordenamiento:** La tabla es ordenable y tiene paginación.

## Requisitos

- **Angular:** v12 o superior
- **Angular Material:** v12 o superior

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone <URL_DEL_REPOSITORIO_ANGULAR>
   ```

2. Instala las dependencias del proyecto:

   ```bash
   cd <nombre_del_directorio_del_proyecto>
   npm install
   ```

3. Asegúrate de que el backend está configurado y corriendo en el repositorio correspondiente.

4. Configura el `infoUrl` en el componente principal para que apunte a la URL correcta del backend.

5. Inicia el servidor de desarrollo de Angular:

   ```bash
   ng serve
   ```

   El proyecto estará disponible en [http://localhost:4200](http://localhost:4200).

## Estructura del Proyecto

- **src/app/components/consulta-empleados:**
  - `consulta-empleados.component.ts`: Componente principal para la consulta de empleados.
  - `consulta-empleados.component.html`: Vista que incluye el formulario, spinner de carga, y la tabla de resultados.
  - `consulta-empleados.component.css`: Estilos para el componente.

- **src/app/services/empleados.service.ts:**
  - Servicio encargado de realizar las peticiones al backend para consultar los empleados.

## Backend

Este proyecto depende de un backend alojado en un repositorio separado https://github.com/neydarisJaylinne/EmployeesApi. El backend se encarga de proporcionar la información de los empleados a través de una API. Asegúrate de que el backend esté corriendo correctamente y de que la URL esté configurada en el proyecto Angular.

## Uso

1. En la interfaz, ingresa el ID del empleado en el campo correspondiente.
2. Haz clic en "Consultar" para obtener la información del empleado.
3. Los resultados se mostrarán en una tabla con paginación y columnas ordenables.

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature-nueva-funcionalidad`).
3. Realiza los cambios y haz un commit (`git commit -am 'Añadir nueva funcionalidad'`).
4. Haz un push a la rama (`git push origin feature-nueva-funcionalidad`).
5. Crea un Pull Request.

---

**Nota:** Asegúrate de tener configurado el backend correctamente y de que la URL de la API esté definida en el proyecto Angular para que funcione correctamente.
