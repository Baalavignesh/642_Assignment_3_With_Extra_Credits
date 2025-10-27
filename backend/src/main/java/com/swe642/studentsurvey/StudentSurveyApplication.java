package com.swe642.studentsurvey;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Main Spring Boot application class for Student Survey Management System.
 * This class bootstraps the application and starts the embedded Tomcat server.
 */
@SpringBootApplication
public class StudentSurveyApplication {
    public static void main(String[] args) {
        SpringApplication.run(StudentSurveyApplication.class, args);
    }
}
