-- MySQL Database Setup Script for Student Survey Application
-- This script creates the database and user for the application

-- Create the database (if not exists)
CREATE DATABASE IF NOT EXISTS student_survey_db;

-- Use the database
USE student_survey_db;

-- Optional: Create a dedicated user for the application
-- Uncomment the lines below if you want to create a specific user
-- CREATE USER IF NOT EXISTS 'survey_user'@'localhost' IDENTIFIED BY 'survey_password';
-- GRANT ALL PRIVILEGES ON student_survey_db.* TO 'survey_user'@'localhost';
-- FLUSH PRIVILEGES;

-- Note: The tables will be automatically created by Hibernate when the application starts
-- due to the spring.jpa.hibernate.ddl-auto=update setting in application.properties

-- To run this script, use:
-- mysql -u root -p < database-setup.sql
