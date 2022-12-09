# Project Details

## Identa

Project is coded in Java, JSP, CSS, JS, Spring Boot and MySQL. It follows the micro-services architecture, whereby you
can have multiple clients (mobile applications, web ui) using an API Gateway which handles all the requests and apply
the required business logics to crud any data depending on the user access.

## Description

Identa is a multi tenancy application that allows the users to register one or more restaurants and manage their
respective menus & products.

This application comprises the web interface and Rest APIs.

## Resources

- [API document](API.md)
- [The swagger documentation](http://178.128.192.92:8080/swagger-ui.html)
- [Web Application](http://178.128.192.92:9000/)

## Entities

- **Tenants:** an entity which contains the details of a registered company.
- **Restaurants:** an entity where you can find the list of restaurants for a specific tenant.
- **Users:** an entity where you can find the list of registered users who use the web application (Users can be of
  role: SUPER ADMIN, CLIENT, STAFF).
- **Menus:** an entity where you can find all the menus which we want to show the users
- **Products:** an entity where you can find all products under a menu category.
- **Orders:** an entity where you can find all orders at a specific table (Dining IN) or Take Away.
- **OrderItems:** an entity where you can find all order items of a specific order.


## Development

**Prerequisite(s):**

- **Maven** Download and install maven
- **Java JDK** Java JDK 1.8 or greater
- **MySQL** - Load the DB Schema from [model/src/main/resources/sql](model/src/main/resources/sql)
- **Oracle SQL Developer**
- **Eclipse IDE** or **Jetbrain IntelliJ**


**Integration Tests**

- Postman is needed to be installed. You can import the postman collection from [postman](postman)


**E2E Tests**
- Cypress is needed to be installed. The tests are located in [E2E](E2E)


**Continuous Integration (CI)**

The project is build on GitLab using Gitlab pipelines as configure in the [.gitlab-ci.yml](.gitlab-ci.yml)


