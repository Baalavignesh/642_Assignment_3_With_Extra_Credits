# Student Survey Application - SWE 642 Assignment 3

A full-stack student survey management system built with Angular 18 (frontend) and Spring Boot (backend) with MySQL database.

## Team Members

- Baalavignesh Arunachalam - G01486574
- Pranav Arya -

## Project Overview

This application allows prospective students to fill out survey forms about their campus visit experience. It provides full CRUD (Create, Read, Update, Delete) operations for managing survey data.

## Features

- **Student Survey Form**: Comprehensive form with validation for collecting student feedback
- **Survey List**: View all submitted surveys in a clean table format
- **Update Survey**: Edit existing survey responses
- **Delete Survey**: Remove survey entries
- **Clean UI**: Minimal design using George Mason University color palette

## Technology Stack

### Frontend
- Angular 18 with standalone components
- Bootstrap 5 for styling
- TypeScript
- RxJS for reactive programming

### Backend
- Spring Boot 3.2.0
- Spring Data JPA / Hibernate for ORM
- MySQL database
- RESTful APIs
- Maven for build management

## Prerequisites

Ensure you have the following installed:

- **Java 17** or higher
- **Node.js** (v18+) and npm
- **MySQL 8.0** or higher
- **Maven 3.6+**
- **Git**

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd "642 Assignment 3"
```

### 2. Install Prerequisites

#### macOS:

```bash
# Install Homebrew (if not installed)
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Java
brew install openjdk@17

# Install Node.js
brew install node

# Install MySQL
brew install mysql
brew services start mysql

# Install Maven
brew install maven
```

#### Windows:

1. **Java**: Download from [Oracle](https://www.oracle.com/java/technologies/downloads/) or [Adoptium](https://adoptium.net/)
2. **Node.js**: Download from [nodejs.org](https://nodejs.org/)
3. **MySQL**: Download from [mysql.com](https://dev.mysql.com/downloads/installer/)
4. **Maven**: Download from [maven.apache.org](https://maven.apache.org/download.cgi)

Add all tools to your system PATH.

### 3. Database Setup

```bash
# Connect to MySQL
mysql -u root -p

# Create database
CREATE DATABASE student_survey_db;
EXIT;
```

### 4. Configure Database Credentials

Edit `backend/src/main/resources/application.properties`:

```properties
spring.datasource.username=root
spring.datasource.password=your_mysql_password
```

### 5. Build and Run Backend

```bash
cd backend
mvn clean install
mvn spring-boot:run
```

Backend will start on `http://localhost:8080`

### 6. Setup and Run Frontend

Open a new terminal:

```bash
cd frontend/student-survey-app
npm install
npm start
```

Frontend will start on `http://localhost:4200`

### 7. Access the Application

Open your browser and navigate to: `http://localhost:4200`

## Running the Application

After initial setup, follow these steps each time:

1. **Start MySQL** (if not running)
2. **Start Backend**:
   ```bash
   cd backend
   mvn spring-boot:run
   ```
3. **Start Frontend** (in another terminal):
   ```bash
   cd frontend/student-survey-app
   npm start
   ```
4. **Open Browser**: `http://localhost:4200`

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/surveys` | Get all surveys |
| GET | `/api/surveys/{id}` | Get survey by ID |
| POST | `/api/surveys` | Create new survey |
| PUT | `/api/surveys/{id}` | Update existing survey |
| DELETE | `/api/surveys/{id}` | Delete survey |

## Survey Form Fields

### Required Fields
- First Name
- Last Name
- Street Address
- City
- State
- Zip Code (5 digits)
- Telephone Number (10 digits)
- Email (valid email format)
- Date of Survey
- Interest Source (Radio: Friends, Television, Internet, Other)
- Recommendation Likelihood (Dropdown: Very Likely, Likely, Unlikely)

### Optional Fields
- What liked most about campus (Checkboxes: Students, Location, Campus, Atmosphere, Dorm Rooms, Sports)
- Additional Comments (Text area)

## Project Structure

```
642 Assignment 3/
├── backend/                          # Spring Boot application
│   ├── src/main/java/               # Java source code
│   ├── src/main/resources/          # Configuration files
│   ├── pom.xml                      # Maven dependencies
│   └── database-setup.sql           # MySQL setup script
│
├── frontend/student-survey-app/     # Angular application
│   ├── src/app/                     # Application code
│   │   ├── components/              # Angular components
│   │   ├── models/                  # TypeScript interfaces
│   │   ├── services/                # HTTP services
│   │   └── app.routes.ts            # Route configuration
│   ├── src/styles.css               # Global styles
│   └── angular.json                 # Angular configuration
│
└── README.md                        # This file
```

## Design Features

- George Mason University color palette (Green #006633, Gold #FFCC33)
- Clean, minimal design without excessive animations
- Responsive layout using Bootstrap
- Form validation with real-time error messages
- User confirmation dialogs for delete operations

## Testing

1. Navigate to `http://localhost:4200`
2. Click "Take Survey" to fill out a new survey
3. Submit the form
4. Click "View Surveys" to see all surveys
5. Use "Edit" button to update a survey
6. Use "Delete" button to remove a survey

## Stopping the Application

Press `Ctrl + C` in both terminal windows (backend and frontend) to stop the applications.

## Notes

- Backend runs on port 8080
- Frontend runs on port 4200
- MySQL default credentials: root/root (update in application.properties)
- Tables are automatically created by Hibernate
- All source files include descriptive comments

---

**George Mason University**
**SWE 642 - Software Engineering for the World Wide Web**
