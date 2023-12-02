# MERN Stack Employee Management Application

This is a MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing employees.

## Getting Started

### Prerequisites

Make sure you have Node.js, npm and MongoDB installed on your machine. You can check and monitor your database using these commands after installing mongoDB:

```bash

systemctl status mongod
systemctl start mongod
mongosh
show dbs;
use 101394258_comp3123_assignment2_reactjs;
show collections;
db.employeesCollection.find() [or any other transaction]

```

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vicjuma/101394258_comp3123_assignment2_reactjs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd 101394258_comp3123_assignment2_reactjs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

This will concurrently run the server and the client application.

## Project Structure

- `.`: Contains the Express.js server files.
- `101394258_comp3123_assignment2_reactjs/`: Contains the React.js client files.
- `package.json`: Includes project dependencies and scripts.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Runs the server and client concurrently in development mode.
- `npm run server`: Runs the server only.
- `npm run client`: Runs the client only.
