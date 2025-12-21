AuthNest – Frontend

AuthNest Frontend is a Vue.js application that consumes the AuthNest backend APIs.
It is built to demonstrate clean frontend-backend communication using Axios with proper CORS handling.

Features
- Vue.js based authentication UI
- Axios based API communication
- Centralized API client setup
- Login and Signup screens (upcoming)
- Clean and scalable folder structure

Tech Stack
- Vue.js (Vue CLI)
- Axios
- JavaScript
- HTML & CSS

Project Structure
frontend/
 ├─ src/
 │   ├─ views/
 │   │   ├─ Login.vue
 │   │   ├─ Register.vue
 │   ├─ services/
 │   │   ├─ apiClient.js
 │   │   └─ statusService.js
 │   ├─ router/
 │   ├─ App.vue
 │   └─ main.js
 ├─ public/
 ├─ vue.config.js
 ├─ package.json
 └─ README.md

Backend Integration
Backend runs on:
http://localhost:5000

API requests are handled using Axios with credentials enabled.

Example API Call
GET /status

Running the Project

npm install
npm run serve

Frontend URL
http://localhost:8080

CORS Handling
CORS is handled on the backend by allowing requests from:
http://localhost:8080

Design Decisions
- Centralized Axios client for API calls
- Separation of API services and UI components
- Clean project structure for scalability

Upcoming Features
- User Signup UI
- User Login UI
- JWT based authentication flow
- Protected routes
- Token handling and logout

Author
Mayank Rai
Frontend Developer (Vue.js)

License
MIT
