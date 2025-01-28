# local mini-VLAT

This project is a simple web application designed to collect responses from users through a randomized quiz format. The application consists of several pages, including a consent page, a quiz page, a questionnaire, and a results page. 

## Project Structure

```
.
├── public
│   ├── index.html          # Main entry point for the web application
│   ├── consent.html        # Consent page for users
│   ├── quiz.html           # Quiz page that loads questions dynamically
│   ├── questionnaire.html   # Questionnaire for additional participant information
│   └── results.html        # Results page displaying quiz outcomes
├── src
│   ├── js
│   │   ├── app.js          # Main JavaScript file for app initialization and routing
│   │   ├── consent.js      # JavaScript logic for the consent page
│   │   ├── quiz.js         # JavaScript for managing quiz functionality
│   │   ├── questionnaire.js # Logic for the questionnaire
│   │   └── results.js      # Processing and displaying quiz results
│   ├── css
│   │   └── styles.css      # Styles for the web application
│   └── data
│       └── questions.json   # Questions and answers in nested JSON format
├── package.json             # npm configuration file
├── server.js                # Simple backend server for handling requests
└── README.md                # Documentation for the project
```

## Features

- **Consent Page**: Users can read consent information and proceed to the quiz.
- **Randomized Quiz**: Users are randomly assigned one of four quiz versions.
- **Dynamic Question Loading**: Questions are loaded from a JSON file based on the assigned quiz version.
- **Questionnaire**: A follow-up questionnaire collects additional information from participants.
- **Results Display**: Users can view their quiz results, including correct and incorrect answers.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Start the server and bind it to all network interfaces (0.0.0.0):
   ```
   node server.js --host 0.0.0.0
   ```
5. Open your web browser and go to `http://localhost:3000` to access the application.

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.