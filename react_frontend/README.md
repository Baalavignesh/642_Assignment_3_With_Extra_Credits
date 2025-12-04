# Student Survey Application - React Frontend

## Overview
This is a React-based implementation of the Student Survey Application for George Mason University Campus Visit Feedback. This application was converted from the original Angular implementation while maintaining the exact same design, styling, and functionality.

## Key React Concepts Used

### 1. **Functional Components with Hooks**
- **useState**: Used for managing component state (form data, loading states, error states)
- **useEffect**: Used for side effects like loading data on component mount
- **useNavigate & useParams**: Used for routing and navigation

### 2. **React Router**
- Implemented routing for multiple pages:
  - `/` - Home page
  - `/survey` - New survey form
  - `/survey/:id` - Edit survey form
  - `/surveys` - List all surveys

### 3. **Controlled Components**
- All form inputs are controlled components with state management
- Form validation is handled through React state

### 4. **Component Structure**
```
src/
├── components/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   ├── SurveyForm/
│   │   ├── SurveyForm.tsx
│   │   └── SurveyForm.css
│   └── SurveyList/
│       ├── SurveyList.tsx
│       └── SurveyList.css
├── services/
│   └── surveyService.ts
├── models/
│   └── Survey.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

### 5. **API Integration**
- Used Axios for HTTP requests
- Service layer pattern for API calls
- CRUD operations: Create, Read, Update, Delete surveys

### 6. **Styling**
- Bootstrap 5 for responsive design
- Custom CSS with GMU color palette
- Same visual design as Angular version

## Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)
- Backend Spring Boot application running on `http://localhost:8080`

## Installation

1. Navigate to the react_frontend directory:
```bash
cd react_frontend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Ensure the backend Spring Boot application is running on port 8080

2. Start the React development server:
```bash
npm run dev
```

3. Open your browser and navigate to the URL shown in the terminal (typically `http://localhost:5173`)

## Features

### Home Page
- Welcome screen with two navigation cards
- Links to Survey Form and Survey List
- GMU-themed design with green and gold colors

### Survey Form
- Create new surveys or edit existing ones
- Form validation for all required fields
- Fields include:
  - Personal Information (name, address, contact)
  - Date of Survey
  - Campus likes (checkboxes)
  - Interest source (radio buttons)
  - Recommendation likelihood (dropdown)
  - Additional comments (textarea)
- Success messages on submission
- Reset functionality for new surveys

### Survey List
- Display all surveys in a responsive table
- View survey details
- Edit existing surveys
- Delete surveys with confirmation
- Loading spinner while fetching data
- Empty state message when no surveys exist

## React-Specific Implementation Details

### State Management
```javascript
const [formData, setFormData] = useState(createEmptySurvey());
const [submitted, setSubmitted] = useState(false);
const [errors, setErrors] = useState({});
```

### Form Handling
```javascript
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;
  setFormData({
    ...formData,
    [name]: type === 'checkbox' ? checked : value
  });
};
```

### Async Operations
```javascript
const loadSurveys = async () => {
  try {
    const data = await surveyService.getAllSurveys();
    setSurveys(data);
  } catch (error) {
    console.error('Error loading surveys:', error);
  }
};
```

### Conditional Rendering
```javascript
{loading && <Spinner />}
{!loading && surveys.length === 0 && <EmptyState />}
{!loading && surveys.length > 0 && <Table />}
```

## API Endpoints Used

- `GET /api/surveys` - Get all surveys
- `GET /api/surveys/{id}` - Get survey by ID
- `POST /api/surveys` - Create new survey
- `PUT /api/surveys/{id}` - Update survey
- `DELETE /api/surveys/{id}` - Delete survey

## Building for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## Technologies Used

- **React 18**: Core library for building UI
- **TypeScript**: Type-safe JavaScript
- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **Bootstrap 5**: CSS framework for responsive design
- **Vite**: Build tool and development server

## Comparison with Angular Implementation

| Feature | Angular | React |
|---------|---------|-------|
| Components | Standalone Components | Functional Components |
| State Management | Component properties | useState Hook |
| Lifecycle | ngOnInit | useEffect |
| Routing | Angular Router | React Router |
| Forms | Reactive Forms | Controlled Components |
| HTTP | HttpClient | Axios |
| Styling | Component CSS | CSS Modules |

## Key Differences from Angular

1. **TypeScript**: Both use TypeScript for type safety
2. **Hooks over Lifecycle Methods**: Used React Hooks (useState, useEffect) instead of lifecycle methods
3. **Controlled Components**: Used React's controlled component pattern instead of Angular's Reactive Forms
4. **JSX Syntax**: Used JSX instead of Angular templates
5. **Function-based**: All components are functional components instead of class-based

## Authors

- **Baalavignesh Arunachalam**
  - G-Number: G01486574
  - Email: barunac@gmu.edu

- **Pranav Arya**
  - G-Number: G01513979
  - Email: paryasom@gmu.edu

Created as part of SWE642 Extra Credit Assignment - Option 1

## Notes

- Ensure CORS is properly configured in the backend to allow requests from `http://localhost:5173`
- The application maintains the exact same design and user experience as the Angular version
- All form validations match the Angular implementation
