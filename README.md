# NC PLUS ONE FRONT END

This React/TypeScript project is a front end to my prevous back end API. It will allow a user or organiser to interact with the API from a browser and do things like view events, create a profile and RSVP.

## Status 

I have built the Events page, also each event has it's own address and is linked through the event title. I am currently working on the Auth section of the site where users and organisers can login and create/edit events and rsvp to event(s).

## Tech Stack

- React
- Typescript
- Vite
- vitest

## Back End Repo

https://github.com/eeinmaciver/nc_plus_one

## Getting Started

### Prerequisites

npm install
npm i react-router
npm install -D vitest jsdom @testing-library/react @testing-library/user-event @testing-library/jest-dom

### Running Locally

In a seperate terminal type the command: npm run dev
This will begin the server at the address: http://localhost:5173/

### Connecting to the API

The approach I went with for connecting the front end to the back end was CORS on the API. This is because I wanted to make sure that both repos were able to communicate with each other rather than relying on a proxy.

### Features