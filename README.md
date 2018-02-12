# Taller 1 de microservicios

Código para pruebas del taller 1 de microservicios

* **microservice1.js:** código del primer microservicio que ofrece una interfaz web y envia mensajes por medio del servicio de mensajería.
* **microservice2.js:** código del segundo microservicio que almacena mensajes del servicio de mensajería y ofrece una interfaz web para solicitarlos.
* **registry.js:** Código para registro de los microservicios en el APIGateway
* **package.json:** Dependencias del proyecto
* **Dockerfile:** Template para la generación de contenedoras con el código desarrollado por nosotros

En la carpeta deployments

* **microservice1-svc.yml:** descripción del despliegue del microservicio uno para Kubernetes.
* **microservice1-svc.yml:** descripción del despliegue del microservicio dos para Kubernetes.
* **api-gateway-svc.yml:** descripción del despliegue del api gateway para Kubernetes.