Open to public endpoints first
User experience
Pages
Errors
Break down to list of features
Vertical slice (feature)

# Create React Project
npm create vite@latest repo_name -- --template react-ts
npm install
npm i react-router
npm run dev

# Git Repo Initialisation
git init
git remote add origin URL
git add .
git commit -m “...”
git push origin main

# Servers
FE: npm run dev
BE: uvicorn main:app --reload

# Tests
npm test (running in seperate terminal)

# Check Browser is connected to API
fetch("http://localhost:8000/api/events").then(r => r.json()).then(console.log)

# Get a token
const res = await fetch("http://localhost:8000/api/auth/login", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ email: "alice@example.com", password: "password123" }),
});
const { token } = await res.json();
console.log(token);

# Authenticated Request
fetch("http://localhost:8000/api/user/me/events", {
  headers: { Authorization: `Bearer ${token}` },
}).then(r => r.json()).then(console.log);

# Debugs
- pages not opening in new tabs because the server wasn't running due to and import typo
-

# To Do
Auth
- Login form(error message)
- Register form (error message)
- UI shows signed in user
- Redirect signed out users to login page
- 401 rejected token signs out user
RSVP
- Signed in user can RSVP an event (button)
- My events page
Organising events
- Signed in user can create event
- Organiser (event creator) can edit event
Screens
- loading state while data is fetched
- error state when request fails
- empty state
- layout for mobile and desktop

- Improve UX/CSS
- Refactor start/end times

- Tests
  - EventsPage
    - error state
    - empty state
    - loading state

  - EventDetailPage
  - apiFetch

