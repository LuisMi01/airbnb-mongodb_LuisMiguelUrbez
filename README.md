# BaseNoSQL_LuisMiguelUrbez

**Main deploy (ultimo) de la web**
https://airbnb-mongodb-luis-miguel-urbez.vercel.app

**Centro de deploys de la web**
[https://vercel.com/luis-miguel-urbezs-projects/mongodb-starter](https://vercel.com/luis-miguel-urbezs-projects/airbnb-mongodb-luis-miguel-urbez)

**Pagina web usada para empezar con MongoDB:**
https://mongodb-starter-omega-woad.vercel.app

**Inicializar MongoDB con SpringBoot**
https://www.mongodb.com/compatibility/spring-boot

**Centro de control MongoDB**
https://cloud.mongodb.com/v2/6569bc3594a51b1b2b200e02#/setup/access?includeToast=true

**La explicacion de como se ha creado el proyecto se encuentra en la documentacion de tipo pdf en este mismo repositorio creada con Overleaf Latex**

# Enunciado de la Práctica: Implementación de Programación Concurrente en Bases de Datos NoSQL

## Objetivos de la práctica:

En esta práctica, nuestro objetivo será obtener una comprensión práctica de cómo aplicar los principios de la programación concurrente en un entorno de base de datos NoSQL. Implementaremos diferentes estrategias de programación concurrente y evaluaremos su rendimiento al manejar grandes volúmenes de datos.

En la era actual de Big Data, las organizaciones generan y consumen cantidades enormes de información diariamente. Con tanta información disponible, las bases de datos tradicionales SQL pueden resultar ineficientes para manejar volúmenes de datos tan masivos y estructuras de datos complejas. Por lo tanto, las bases de datos NoSQL se han convertido en una elección popular debido a su escalabilidad y flexibilidad. Sin embargo, la eficiencia de estas bases de datos puede mejorarse aún más con el uso de la programación concurrente.

## Detalles de la tarea:

Para la base de datos NoSQL, puedes optar por utilizar MongoDB, que es una base de datos orientada a documentos, o Apache Cassandra, que es una base de datos orientada a columnas. Ambas opciones son open-source y tienen amplia documentación disponible.

En cuanto a los datos, puedes utilizar conjuntos de datos públicos disponibles en recursos como Kaggle, Google Dataset Search o el Portal de Datos Abiertos del Gobierno. Sin embargo, elige un conjunto de datos que sea lo suficientemente grande para que sea relevante el uso de programación concurrente.

Podrías optar por un conjunto de datos relacionados con transacciones de comercio electrónico, tweets de Twitter, datos meteorológicos históricos, registros de sensores de IoT, etc. Recuerda, cuanto más grande y complejo sea el conjunto de datos, más interesantes serán los desafíos al implementar la programación concurrente.

Para la implementación de la programación concurrente, puedes usar herramientas y bibliotecas como ExecutorService y Future en Java, o ThreadPoolExecutor en Python. Estas herramientas te permiten gestionar la creación de hilos, su ejecución y la recolección de resultados de manera eficiente.

## Detalles de la tarea:

**Configuración inicial:**
Inicia configurando una base de datos NoSQL (puedes elegir entre una base de datos clave-valor, orientada a documentos, orientada a columnas o una base de datos de grafos).

**Modelado de datos:**
Modela un conjunto de datos para tu base de datos NoSQL elegida. Los datos deben ser lo suficientemente complejos para requerir el uso de programación concurrente (por ejemplo, un número significativo de registros o una estructura de datos compleja).

**Implementación de programación concurrente:**
Implementa la programación concurrente para realizar operaciones en tu base de datos. Esto puede implicar el uso de múltiples hilos o procesos para manejar las operaciones de lectura y escritura, la implementación de bloqueos y otras estrategias de control de concurrencia, o el uso de bibliotecas de programación concurrente de alto nivel.

**Pruebas y evaluación de rendimiento:**
Realiza pruebas de rendimiento en tu implementación. ¿Cómo se compara el rendimiento de tu implementación con y sin programación concurrente? Considera el tiempo de ejecución, el uso de recursos y cualquier otro factor de rendimiento relevante.

**Informe de la práctica:**
Escribe un informe que documente tu enfoque, los desafíos que encontraste y cómo los resolviste, los resultados de tus pruebas de rendimiento y cualquier hallazgo o conclusión interesante que hayas obtenido de la práctica.

## Consideraciones finales:

Este proyecto está diseñado para ser un desafío. Te animamos a que experimentes, investigues y explores diferentes enfoques y soluciones. ¡Buena suerte!

## Rúbrica:

**Entendimiento y modelado del problema (25%):**
- Entiende el problema y el contexto de la práctica.
- Diseña e implementa correctamente un modelo de datos en MongoDB que se adapta al problema.

**Implementación de la programación concurrente (25%):**
- Implementa correctamente los conceptos de programación concurrente en la práctica.
- Usa adecuadamente los recursos de la computadora para optimizar la eficiencia y rendimiento.
- Maneja adecuadamente los errores y las excepciones que puedan surgir durante la ejecución concurrente.

**Interacción con la base de datos MongoDB (25%):**
- Establece correctamente la conexión con la base de datos MongoDB.
- Realiza correctamente operaciones de lectura y escritura en la base de datos.
- Maneja adecuadamente los errores y las excepciones que puedan surgir durante la interacción con la base de datos.

**Análisis del rendimiento (15%):**
- Realiza un análisis cuantitativo y cualitativo del rendimiento de la práctica.
- Compara y discute los resultados obtenidos con y sin la programación concurrente.

**Calidad del código (10%):**
- Escribe código limpio, legible y bien comentado.
- Sigue las mejores prácticas de codificación y estilo.

Por favor, ten en cuenta que esta es una rúbrica sugerida y puede adaptarse según las necesidades y requisitos específicos de tu curso o proyecto.

# MongoDBAirbnb

This app was created with Bootify.io - tips on working with the code [can be found here](https://bootify.io/next-steps/).
Feel free to contact us for further questions.

## Development

When starting the application `docker compose up` is called and the app will connect to the contained services.
[Docker](https://www.docker.com/get-started/) must be available on the current system.

During development it is recommended to use the profile `local`. In IntelliJ `-Dspring.profiles.active=local` can be
added in the VM options of the Run Configuration after enabling this property in "Modify options". Create your own
`application-local.yml` file to override settings for development.

Lombok must be supported by your IDE. For IntelliJ install the Lombok plugin and enable annotation processing -
[learn more](https://bootify.io/next-steps/spring-boot-with-lombok.html).

In addition to the Spring Boot application, the DevServer must also be started. [Node.js](https://nodejs.org/) has to be
available on the system - the latest LTS version is recommended. On first usage and after updates the dependencies have to be installed:

```
npm install
```

The DevServer can now be started as follows:

```
npm run devserver
```

Using a proxy the whole application is now accessible under `localhost:8081`. All changes to the templates and JS/CSS
files are immediately visible in the browser.

## Build

The application can be built using the following command:

```
mvnw clean package
```

Node.js is automatically downloaded using the `frontend-maven-plugin` and the final JS/CSS files are integrated into the jar.

Start your application with the following command - here with the profile `production`:

```
java -Dspring.profiles.active=production -jar ./target/MongoDBAirbnb-0.0.1-SNAPSHOT.jar
```

If required, a Docker image can be created with the Spring Boot plugin. Add `SPRING_PROFILES_ACTIVE=production` as
environment variable when running the container.

```
mvnw spring-boot:build-image -Dspring-boot.build-image.imageName=io.uax/mongo-d-b-airbnb
```

## Further readings

* [Maven docs](https://maven.apache.org/guides/index.html)
* [Spring Boot reference](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/)
* [Spring Data MongoDB reference](https://docs.spring.io/spring-data/mongodb/docs/current/reference/html/)
* [Thymeleaf docs](https://www.thymeleaf.org/documentation.html)
* [Webpack concepts](https://webpack.js.org/concepts/)
* [npm docs](https://docs.npmjs.com/)
* [Bootstrap docs](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
* [Htmx in a nutshell](https://htmx.org/docs/)
* [Learn Spring Boot with Thymeleaf](https://www.wimdeblauwe.com/books/taming-thymeleaf/)


# MongoDB Starter – Developer Directory

A developer directory built on [Next.js](https://nextjs.org/) and [MongoDB Atlas](https://www.mongodb.com/atlas/database), deployed on [Vercel](https://vercel.com/) with the [Vercel + MongoDB integration](https://vercel.com/integrations/mongodbatlas).



Featured on the [MongoDB World](https://www.mongodb.com/world-2022) keynote.

## Deployment Instructions

You will need to create a [GitHub OAuth App](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) to use this starter. Here are the steps:

1. Go to https://github.com/settings/developers and create a new OAuth application
2. Name your application **"MongoDB Starter"**
3. Set the homepage URL to **`https://vercel.app`** for now (we'll change this later)
4. Set the authorization callback URL to **`https://vercel.app/api/auth/callback/github`** for now (we'll change this later)
5. Click "Register application".
6. Once the application is created, copy the "Client ID". This will be your **`GITHUB_CLIENT_ID`**.
7. Generate a new client secret and copy that too. This will be your **`GITHUB_CLIENT_SECRET`**.
8. Generate a random secret [here](https://generate-secret.vercel.app/32). This will be your **`NEXTAUTH_SECRET`**.
9. Click on this button below to clone and deploy this template to Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fmongodb-starter&project-name=mongodb-nextjs&repository-name=mongodb-nextjs&demo-title=MongoDB%20Developer%20Directory&demo-description=Log%20in%20with%20GitHub%20to%20create%20a%20directory%20of%20contacts.&demo-url=https%3A%2F%2Fmongodb.vercel.app%2F&demo-image=https%3A%2F%2Fmongodb.vercel.app%2Fog.png&integration-ids=oac_jnzmjqM10gllKmSrG0SGrHOH&env=GITHUB_CLIENT_ID,GITHUB_CLIENT_SECRET,NEXTAUTH_SECRET&envDescription=Instructions%20on%20how%20to%20configure%20these%20env%20vars:&envLink=https://github.com/vercel/mongodb-starter/blob/main/.env.example)

10. Once your application is deployed, **edit the homepage & callback URLs in your GitHub OAuth App to match your deployment URL**.

## Demo

https://mongodb.vercel.app

## Vercel + MongoDB Integration

https://vercel.com/integrations/mongodbatlas

## Tech Stack

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [NextAuth.js](https://next-auth.js.org/)
- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [Vercel](https://vercel.com/)



This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
