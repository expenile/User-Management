# User Management Application

## Overview

This User Management Application allows users to create, read, update, and delete (CRUD) user profiles. Each profile contains a name, an email, and an image URL. The application offers a simple web interface built with Express and EJS templates on the backend and styled with TailwindCSS on the frontend.

## Features

- **Create User Profiles:** Users can enter their name, email, and a link to an image which will then be displayed on the user list.
- **Read User Profiles:** A list of all user profiles can be viewed.
- **Update User Profiles:** Users have the option to edit any profile.
- **Delete User Profiles:** Users can also delete profiles.

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB with Mongoose
- **Frontend:** HTML, TailwindCSS
- **Templates:** EJS (Embedded JavaScript)
- **Environment:** dotenv for configuration

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd User-Management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your configuration:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://127.0.0.1:27017/UserPro
   NODE_ENV=development
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Deployment

This EJS-based application can be deployed to various platforms:

### Heroku
1. Create a Heroku app
2. Set environment variables in Heroku config vars
3. Deploy using Git or GitHub integration

### Railway
1. Connect your GitHub repository
2. Set environment variables
3. Deploy automatically

### Vercel/Netlify
Note: These platforms are optimized for static sites. For Node.js apps with EJS, consider:
- Railway
- Heroku  
- DigitalOcean App Platform
- AWS Elastic Beanstalk

### Environment Variables for Production
```env
PORT=3000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/UserPro
NODE_ENV=production
```

## Project Structure
```
User-Management/
├── app.js              # Main application file
├── package.json        # Dependencies and scripts
├── .env               # Environment variables (local)
├── .env.example       # Environment template
├── models/
│   └── user.js        # User model
├── views/             # EJS templates
│   ├── index.ejs      # Home page
│   ├── read.ejs       # Users list
│   └── edit.ejs       # Edit user form
└── public/
    └── stylesheets/
        └── style.css  # Custom styles
```

## API Endpoints

- `GET /` - Home page with create user form
- `GET /read` - Display all users
- `POST /create` - Create new user
- `GET /edit/:userid` - Edit user form
- `POST /update/:userid` - Update user
- `GET /delete/:id` - Delete user