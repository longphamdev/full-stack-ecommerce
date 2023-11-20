# Use the official Maven image as the build environment
FROM openjdk:17 as builder

# Set the working directory inside the container
WORKDIR /code

COPY .mvn/ .mvn

COPY mvnw pom.xml ./

COPY src ./src

EXPOSE 8080
FROM openjdk:17
WORKDIR /code
CMD ["./mvnw", "spring-boot:run"]







