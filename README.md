# NC PLUS ONE FRONT END

This React/TypeScript project is a front end to my prevous back end API. It will allow a user or organiser to interact with the API from a browser and do things like view events, create a profile and RSVP.

## Status 

The current site displays a homepage, events, single events and users can login or register if they don't have an account. The next steps are signed in users being able to RSVP events, navigate to a My Events page and for organisers to create and edit events.

## Tech Stack

- React
- TypeScript
- Vite
- vitest

## Back End Repo

https://github.com/eeinmaciver/nc_plus_one

## Setup

1. Clone the repo and install dependencies: npm install
2. Copy the contents of .env.example to your own .env
3. Start the server with: npm run dev (accessed in broswer through http://localhost:5173)
4. In a seperate terminal run tests with: npm test

### Connecting to the API

The approach I went with for connecting the front end to the back end was CORS on the API. This is because I wanted to make sure that both repos were able to communicate with each other rather than relying on a proxy.

### Features

Complete
- Homepage
- Events list
- Individual event pages
- Login page
- Register page

To Do
- RSVP to events
- My Events Page
- Create and edit events