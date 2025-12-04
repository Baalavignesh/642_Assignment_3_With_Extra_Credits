package com.swe642.studentsurvey.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * CORS configuration to allow Angular and React frontends to communicate with the backend.
 * Enables cross-origin requests from:
 * - localhost:4200 (Angular default port)
 * - localhost:5173 (React/Vite default port)
 * - localhost:5174 (React/Vite alternative port)
 * - localhost:5175 (React/Vite alternative port)
 */
@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/api/**")
                        .allowedOrigins(
                            "http://localhost:4200",  // Angular
                            "http://localhost:5173",  // React (Vite default)
                            "http://localhost:5174",  // React (Vite alternative)
                            "http://localhost:5175"   // React (Vite alternative)
                        )
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS")
                        .allowedHeaders("*")
                        .allowCredentials(true);
            }
        };
    }
}
