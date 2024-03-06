# BeMaster Challenge React + TS

![alt text](https://github.com/munozrc/bemaster-challenge/blob/main/docs/screenshot.png?raw=true)

**Deploy @Vercel and AWS s3**

- [https://bemaster-challenge.vercel.app/](https://bemaster-challenge.vercel.app/)
- [http://bemaster-challenge-munozrc.s3-website.us-east-2.amazonaws.com/home](http://bemaster-challenge-munozrc.s3-website.us-east-2.amazonaws.com/home)

## Table of Contents

- [About](#about)
- [Test Users](#test-users)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)

## About

This web application allows users who purchase the service to view multimedia content such as series and movies totally inspired by the Disney+ app but with my personal touch 👌. It consists of the following main components:

- **Login**: Implements validation logic for empty fields and allowed characters for the email field, in addition to the implementation of login with Google.

- **Home**: Contains 5 cards representing categories to which the logged-in user will have access. Includes a basic navbar with a logout button.

- **Content Category**: Presents all content related to the selected category of the `Home` component in rows. Add the poster that represent the different contents.

- **Content Details**: Shows the selected multimedia content from the `Content Category` component along with its synopsis, year of release and category to which it belongs (the category is clickable) and poster of the content.

## Test Users

To facilitate testing, the application comes with predefined test users:

```bash
email = munozrengifocarlos@gmail.com
password = munozrengifocarlos@gmail.com
```

```bash
email = munozrengifocarlos@outlook.com
password = munozrengifocarlos@outlook.com
```

Feel free to use these credentials to log in and explore the application.

## Technologies Used

- React 18.2.0
- ReactDom 18.2.0
- firebase 10.8.1
- Sonner 1.4.3
- Zod 3.22.4
- @hookform/resolvers 3.3.4
- React Hook Form 7.51.0
- React Router 6.22.2
- PostCSS 8.4.35
- TailwindCSS 3.4.1
- TypeScript 5.2.2
- ViteJs 5.1.4
- ESLint 8.56.0

## Features

- Login with email and password using `Firebase` authentication. with form management with `React Hook Form` and field validations with `Zod`. Login with Google was added.

- Management of global state with `API Context` and simulation of data fetching to obtain the content within the application, it was used in this way since the state of the app was simple and the behavior of `API Context` was sufficient for the implementation of global state.

- A 500ms load is simulated to fetch the multimedia content, which is why skeleton was used to avoid sudden jumps when waiting for the request to be resolved.

- The application has public and private routes, using a custom component to perform this validation when a user is logged in.

- It has a grid design to display the content posters, all the styles of the app were made with `TailwindCSS` to achieve quick prototyping.

- Dynamic routes were used to use as a persistence state so the user must go to the home when they enter the application for the second time. In addition to allowing transparent navigation.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

Provide step-by-step instructions on how to install the project locally.

1. Clone the repository
```bash
git clone https://github.com/munozrc/bemaster-challenge
```

2. Navigate to the project directory
```bash
cd bemaster-challenge
```

3. Install dependencies
```bash
npm install
```

## Usage

After installing the dependencies, you can start the development server using the following command:

```bash
npm run dev
```

This will start the development server at http://localhost:5173. You can view the project in your web browser and make changes to the source code. The server will automatically reload the page when changes are detected.

