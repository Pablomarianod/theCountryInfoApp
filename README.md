# The Country InfoApp

This repository contains the implementation of a full-stack application that provides detailed information about countries. The application consists of two main parts: a Backend (BE) built with Node.js (Express) and a Frontend (FE) built with React.js.

Project Overview
Backend (Node.js / Express)

*Tech Stack:
Node.js
Express.js
Tasks:
Endpoint: Get Available Countries

The backend exposes an API endpoint that fetches a list of available countries using the Date Nager API.
The endpoint returns a list of countries available from the external API.
Endpoint: http://localhost:8080/api/countries/available

This endpoint retrieves detailed information about a specific country, including:
List of Border Countries: A list of countries that share a border with the selected country. Data is fetched from Date Nager API - Country Info.
Population Data: Historical population data for the selected country suitable for use in a chart, fetched from Countries Now API.
Flag URL: A URL to the country's flag image, fetched from Countries Now API.
Endpoint: http://localhost:8080/api/countries/info/code

*Frontend (React.js)
Tech Stack:

React.js
Tasks:
Country List Page

Displays a list of countries fetched from the backend.
Each country name is clickable and navigates the user to the Country Info Page for detailed information.


How to Run the Application
Prerequisites
Make sure you have the following installed:

Node.js (v14 or above)
npm (v6 or above)

Steps to Run the Backend
Navigate to the backend directory.

Install dependencies:
npm install

Create a .env file in the root of the backend directory and define the necessary environment variables (e.g., API base URL, keys).

Run the backend server:
node index.js
This will start the backend server on http://localhost:8080.

Steps to Run the Frontend
Navigate to the frontend directory.

Install dependencies:
npm install

Run the frontend server:
npm run dev
This will start the frontend server on http://localhost:3000.

Running Both Servers Simultaneously
To run both the backend and frontend servers simultaneously, you can use tools like concurrently or simply open two terminal windows, one for each server.

-Environment Variables:
Backend (.env):
PORT=8080
URL_NAGER=https://date.nager.at/api/v3
URL_COUNTRIES=https://countriesnow.space/api/v0.1

FrontEnd (.env):
API_BASE_URL=https://date.nager.at/api/v3
Make sure to replace any placeholder values with your actual credentials or endpoints.

Testing the Application
Open http://localhost:3000 in your browser to access the frontend.
Use the Country List page to view the countries and click to see detailed information about each country.

Folder Structure
The project is organized into two main directories:
Backend (backend/): Contains the Node.js backend code, including API routes and server configuration.
Frontend (frontend/): Contains the React.js code for the user interface, including components and styling.

Additional Notes:
Make sure both the frontend and backend are running on separate ports, with the frontend fetching data from the backend API.