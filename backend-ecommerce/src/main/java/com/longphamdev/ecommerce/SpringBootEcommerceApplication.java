package com.longphamdev.ecommerce;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootEcommerceApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootEcommerceApplication.class, args);
		 // JDBC URL, username, and password of MySQL server
        String url = "jdbc:mysql://localhost:3306/full-stack-ecommerce";
        String user = "root";
        String password = "root";

        // Establishing the connection
        // try (Connection connection = DriverManager.getConnection(url, user, password)) {
        //     System.out.println("Connected to the database!");
        // } catch (SQLException e) {
        //     System.err.println("Failed to connect to the database!");
        //     e.printStackTrace();
        // }
	}

}