QuizQuest

Overview

QuizQuest is a web-based quiz application that provides an engaging and interactive experience for users. The app fetches quiz data from an API and presents questions through an intuitive UI. It incorporates gamification elements to enhance user engagement and motivation.

Features

Dynamic Quiz Questions: Fetches quiz data from an API dynamically.

Gamification Elements: Includes a scoring system with bonuses for correct answers and penalties for incorrect ones.

Progress Tracking: Displays question progress and total score.

Responsive UI: Ensures compatibility across different screen sizes.

Local Score Storage: Stores the most recent score for users.

Error Handling: Handles API errors and unexpected responses gracefully.

Technologies Used

Frontend: HTML, CSS, JavaScript

State Management: Vanilla JavaScript (No additional frameworks required)

API Integration: Fetch API for retrieving questions from external sources

Deployment: Can be hosted on static site hosting platforms like GitHub Pages, Vercel, or Netlify

Installation & Setup

Clone the repository:

git clone https://github.com/your-username/quizquest.git
cd quizquest

Install dependencies (if any):

npm install

Run the project locally:

If using a local server, start a simple HTTP server:

npx http-server .

Or open index.html directly in a browser.

API Integration

QuizQuest fetches questions from an external API. The current setup uses:

fetch("https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX")
    .then((res) => res.json())
    .then((data) => {
        questions = data.questions.map((q) => ({
            question: q.description,
            choices: q.options.map(opt => opt.description),
            answer: q.options.findIndex(opt => opt.is_correct) + 1
        }));
        startGame();
    })
    .catch((err) => {
        console.error("Error fetching quiz data:", err);
    });

Usage

Open the application in a browser.

Answer the questions displayed on the screen.

Receive instant feedback on correct and incorrect answers.

View the final score at the end of the quiz.

Contribution

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch:

git checkout -b feature-new-feature

Commit your changes:

git commit -m "Add new feature"

Push to your branch:

git push origin feature-new-feature

Submit a pull request.

License

This project is licensed under the MIT License.

Contact

For any queries, reach out via [your-email@example.com] or create an issue in the repository.
