# Quick Start Guide - Student Survey React App

## 🚀 Get Started in 3 Steps

### Step 1: Start the Backend
```bash
cd "642 Assignment 3/backend"
mvn spring-boot:run
```

Wait for the message: "Started StudentSurveyApplication"

Verify backend is running at: http://localhost:8080/api/surveys

---

### Step 2: Start the React Frontend
```bash
cd "642 Assignment 3/react_frontend"
npm run dev
```

---

### Step 3: Open the Application

Open your browser and go to:
```
http://localhost:5173
```
(or the port shown in your terminal)

---

## 📝 What You'll See

1. **Home Page** - Two cards: "Take Survey" and "View Surveys"
2. **Survey Form** - Fill out campus visit feedback
3. **Survey List** - View, edit, or delete surveys

---

## ✨ Test the Application

### Create a Survey:
1. Click "Take Survey" from home
2. Fill in all required fields (marked with *)
3. Click "Submit"
4. Success message appears
5. Form resets

### View All Surveys:
1. Click "View Surveys" from home
2. See all surveys in a table
3. Use Edit/Delete buttons

### Edit a Survey:
1. From survey list, click "Edit"
2. Make changes
3. Click "Update"
4. Redirects to survey list

### Delete a Survey:
1. From survey list, click "Delete"
2. Confirm deletion
3. Survey removed from list

---

## 🎨 Features to Highlight

- ✅ GMU Green and Gold color scheme
- ✅ Bootstrap 5 responsive design
- ✅ Form validation with error messages
- ✅ Loading spinners
- ✅ Success/error alerts
- ✅ Confirmation dialogs
- ✅ Card hover effects

---

## 🛠️ Troubleshooting

### Backend not connecting?
- Check if Spring Boot is running on port 8080
- Verify CORS is configured in backend

### Port already in use?
- Vite will automatically use the next available port
- Check terminal output for the correct port

### Dependencies missing?
```bash
cd "642 Assignment 3/react_frontend"
npm install
```

---

## 📦 Build for Production

```bash
npm run build
```

Files will be in the `dist/` directory.

To preview the production build:
```bash
npm run preview
```

---

## 🎯 Key React Concepts Demonstrated

1. **Functional Components** - All components use modern React patterns
2. **Hooks** - useState, useEffect, useNavigate, useParams
3. **Routing** - React Router for navigation
4. **Controlled Components** - Form inputs managed by React state
5. **Async Operations** - API calls with async/await
6. **Conditional Rendering** - Show/hide based on state
7. **List Rendering** - Display arrays of data
8. **Event Handling** - User interactions
9. **Component Composition** - Reusable, modular components
10. **Service Layer** - Centralized API logic

---

## 📁 Project Structure

```
react_frontend/
├── src/
│   ├── components/
│   │   ├── Home/           # Landing page
│   │   ├── SurveyForm/     # Create/Edit form
│   │   └── SurveyList/     # Display all surveys
│   ├── services/
│   │   └── surveyService.js  # API calls
│   ├── models/
│   │   └── Survey.js       # Data model
│   ├── App.jsx             # Routes
│   └── main.jsx            # Entry point
├── README.md               # Setup instructions
├── IMPLEMENTATION_DOCUMENTATION.md  # Detailed docs
└── package.json            # Dependencies
```

---

## 💡 Tips for Demo/Video

1. **Show Home Page** - Explain the two navigation options
2. **Create a Survey** - Fill form, show validation errors, submit successfully
3. **View Survey List** - Show the table with all surveys
4. **Edit a Survey** - Click edit, modify data, update
5. **Delete a Survey** - Click delete, confirm, show it's removed
6. **Highlight React Code** - Open SurveyForm.jsx and show:
   - useState for state management
   - useEffect for data loading
   - Controlled components
   - Form validation
7. **Show Service Layer** - Open surveyService.js to show API calls
8. **Explain Routing** - Open App.jsx to show React Router setup
9. **Show Styling** - Demonstrate GMU colors, responsive design

---

## 🎬 Video Recording Suggestions

### Introduction (1 min)
- Explain the project: React conversion of Angular app
- Show the project structure

### Running the App (2 min)
- Start backend
- Start frontend
- Navigate to home page

### Feature Demonstration (5 min)
- Create a survey (show validation)
- View survey list
- Edit a survey
- Delete a survey

### Code Walkthrough (5 min)
- Show key React concepts:
  - Home component (simple functional component)
  - SurveyForm component (useState, useEffect, form handling)
  - SurveyList component (list rendering, async operations)
  - surveyService (API integration)
  - App.jsx (routing)

### Design & Styling (2 min)
- Show GMU colors in index.css
- Demonstrate responsive design
- Show Bootstrap integration

### Conclusion (1 min)
- Summary of React concepts used
- Comparison with Angular version
- Thank you

**Total Duration: ~15 minutes**

---

## 📚 Documentation Files

1. **README.md** - Setup and basic information
2. **IMPLEMENTATION_DOCUMENTATION.md** - Comprehensive technical documentation
3. **QUICK_START_GUIDE.md** - This file

---

## 🎓 Submission Checklist

- [ ] React application runs successfully
- [ ] Backend Spring Boot API works
- [ ] All CRUD operations functional
- [ ] Form validation working
- [ ] Responsive design verified
- [ ] GMU color scheme applied
- [ ] Documentation complete
- [ ] Video recorded
- [ ] Code commented
- [ ] README files included

---

**Happy Coding! 🚀**

