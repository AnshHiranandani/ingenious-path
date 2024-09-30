Engineering Enthusiasts Web Application

Welcome to Engineering Enthusiasts, a Flask-based web application aimed at bringing engineering enthusiasts together to share ideas, collaborate on projects, and grow in the field of engineering. This project is hosted on Render and uses Flask as the web framework.

Table of Contents

Project Overview
Features
Tech Stack
Installation
Usage
Environment Variables
Contributing
License
Project Overview

Engineering Enthusiasts is a platform where engineers and enthusiasts can share their knowledge, learn from each other, and collaborate on various projects. Whether you're working on robotics, drones, or general engineering challenges, this platform provides tools and resources to elevate your work.

Features

User Authentication (Sign Up, Login, Logout)
Profile Creation and Management
Project Posting and Collaboration
Discussion Forums
Integration with OpenAI for generating ideas and solving engineering problems
Mobile Responsive Design
Tech Stack

Backend: Flask (Python)
Frontend: HTML5, CSS3, JavaScript
Database: SQLite (development), PostgreSQL (production on Render)
Hosting: Render
Other Tools: Python-dotenv, Gunicorn, OpenAI API
Installation

Prerequisites
Python 3.8 or higher
Flask 2.x or higher
Render account for deployment (optional)
Git for version control
Step-by-Step Guide
Clone the repository:
bash
Copy code
git clone https://github.com/yourusername/engineering-enthusiasts.git
cd engineering-enthusiasts
Set up a virtual environment:
bash
Copy code
python3 -m venv venv
source venv/bin/activate  # On Windows, use `venv\Scripts\activate`
Install the dependencies:
bash
Copy code
pip install -r requirements.txt
Set up the database (for development):
bash
Copy code
flask db init
flask db migrate
flask db upgrade
Create a .env file in the root directory with the following content:
bash
Copy code
FLASK_APP=app.py
FLASK_ENV=development
SECRET_KEY=your-secret-key
OPENAI_API_KEY=your-openai-api-key
Run the application:
bash
Copy code
flask run
The app should now be running at http://127.0.0.1:5000.
Usage

Once the application is running locally:

Navigate to http://127.0.0.1:5000 in your browser.
Sign up for a new account or log in with your credentials.
Start posting engineering projects, engage in discussions, and explore various features.
Environment Variables

The application relies on several environment variables. Here's a list of the required environment variables that need to be set in the .env file:

FLASK_APP: The entry point of the Flask application (usually app.py).
FLASK_ENV: Set to development for local development.
SECRET_KEY: A secret key for securing sessions and cookies.
OPENAI_API_KEY: Your API key from OpenAI (needed for AI-based features).
DATABASE_URL: (Optional) Specify if you're using a PostgreSQL database in production.
Deployment

This app is hosted on Render. To deploy the app:

Push your code to GitHub.
Create a new Render web service and connect it to your GitHub repository.
Add environment variables in the Render dashboard (e.g., OPENAI_API_KEY).
Render will automatically deploy the app after every commit.
Custom Domain Setup
To set up a custom domain for your Render app:

Go to the Custom Domains section in the Render dashboard.
Add your domain and follow the DNS configuration instructions.
Add an A record with the IP 216.24.57.1 or an ANAME/ALIAS pointing to ingenious-path.onrender.com.
Contributing

We welcome contributions from the community. To contribute:

Fork the repository.
Create a feature branch (git checkout -b new-feature).
Commit your changes (git commit -m "Added new feature").
Push to your branch (git push origin new-feature).
Create a Pull Request.
License

This project is licensed under the MIT License. See the LICENSE file for more details.
