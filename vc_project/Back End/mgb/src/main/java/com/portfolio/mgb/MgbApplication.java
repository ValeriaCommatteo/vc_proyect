package com.portfolio.mgb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class MgbApplication {

	public static void main(String[] args) {
		SpringApplication.run(MgbApplication.class, args);
	}
        
        @Bean
        public WebMvcConfigurer corsConfigurer() {
            return new WebMvcConfigurer() {
                @Override
                public void addCorsMappings(CorsRegistry registry) {
                    registry.addMapping("/**")
                            .allowedOrigins("*")
                            .allowedMethods("*")
                            .allowedHeaders("*");
//                            .allowedOrigins("http://localhost:4200")
//                            .allowedMethods("http://localhost:4200")
//                            .allowedHeaders("http://localhost:4200");
//                            .allowedOrigins("https://fendprueba.web.app")
//                            .allowedMethods("https://fendprueba.web.app")
//                            .allowedHeaders("https://fendprueba.web.app");
                }
                
            };
        }

}
