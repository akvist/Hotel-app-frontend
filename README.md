# Hotell app, front-end

This is the front-end of an app created with React.js.
The back-end can be found at: https://github.com/akvist/Hotel-app-backend.git

Deployment: https://coruscating-ganache-ede5f1.netlify.app

## Table of contents

- Introduction
- Scope of Functionalities
- Deployment
- Demo
- Lessons Learned
- Tech Stack
- Run Locally Together with Back-end Code
- Links

## Introduction

This is a front-end for a full-stack project. The application was made to learn the whole process of developing an app, from writing both back-and front-end code with Node.js and React.js to using services as git, databases, and deployment services.

The application is a simulation of the functionality of three elevators in a hotell with ten floors. It consists of ten buttons, one for each floor, and the three elevators that move between
these ten floors when the buttons are pushed.

## Scope of Functionalities

The starting point of the elevators is that they are standing still. When pushing a button,
the closest elevator will leave it's location and move towards the chosen floor with a pace
of 2 seconds per floor and stop when it has arrived. If a button is pushed while one or more elevators
are moving, the closest free elevator will be called to the chosen floor. All three elevators
can move at the same time. If a button is pushed while all three elevators are moving, the
elevators will still finish with their current paths. The elevator that arrives first to its
destination will after its arrival start again and move to the chosen floor. If a button is pushed and an elevator
already is at the chosen floor, nothing will happen.

## Deployment

The whole full-stack project has been deployed and can be found at: https://coruscating-ganache-ede5f1.netlify.app

## Demo

Demo video on youtube: https://www.youtube.com/watch?v=VU5xx1ZXCaE

## Lessons Learned

**Lessons learned and highlights of this code**:

- Managing Hooks such as useState and useEffect
- Handling events such as onClick with a custom function that takes variables
- Managing git and GitHub
- Writing DRY code by dynamically rendering multiple elevatorbuttons from an array using the map function (in the return-function in App.js)
- Writing DRY code by dynamically rendering multiple squares that change colors to simulate the movements of the elevators using the map function (in the return-function in App.js)
- Fetching data from back-end code
- Styling with CSS
- The logic that checks the elevators' status every second and sets it to the current status
- The logic that decides which color the squares that simulate the elevators' movements will be

**Together with back-end code**:

- Making a full-stack application

## Tech Stack

**Server:** React.js

**Deployment:** Netlify

## Run Locally Together with Back-end Code

**Front-end**

Clone the front-end

```bash
  git clone https://github.com/akvist/Hotel-app-frontend.git
```

Go to the project directory

```bash
  cd Hotellapp-frontend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

**Back-end**

Clone the back-end

```bash
  git clone https://github.com/akvist/Hote-lapp-backend.git
```

Go to the project directory

```bash
  cd Hotellapp-backend
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

**Important**: Environmental variables are needed for the Back-end, as mentioned in that README. Use the PORT 5000 for the endpoints since they are set to 5000 in the front-end code.

## 🔗 Links

You can find me on LinkedIn:

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amira-kvist-7a5083187/)
