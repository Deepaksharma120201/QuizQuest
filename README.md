
# QuizQuest

## Overview

QuizQuest is a web-based quiz application that provides an engaging and interactive experience for users. The app fetches quiz data from an API and presents questions through an intuitive UI. It incorporates gamification elements to enhance user engagement and motivation.

## Features

-   **Dynamic Quiz Questions:** Fetches quiz data from an API dynamically.
-   **Gamification Elements:** Includes a scoring system with bonuses for correct answers and penalties for incorrect ones.
-   **Progress Tracking:** Displays question progress and total score.
-   **Responsive UI:** Ensures compatibility across different screen sizes.
-   **Local Score Storage:** Stores the most recent score for users.
-   **Error Handling:** Handles API errors and unexpected responses gracefully.

## Technologies Used

-   **Frontend:** HTML, CSS, JavaScript
-   **State Management:** Vanilla JavaScript (No additional frameworks required)
-   **API Integration:** Fetch API for retrieving questions from external sources
-   **Deployment:** Can be hosted on static site hosting platforms like GitHub Pages, Vercel, or Netlify

## Installation & Setup

1.  Clone the repository:
    
    ```bash
    git clone https://github.com/Deepaksharma120201/QuizQuest.git
    cd QuizQuest
    
    ```
    
2.  Install dependencies (if any):
    
    ```bash
    npm install
    
    ```
    
3.  Run the project locally:
    -   If using a local server, start a simple HTTP server:
        
        ```bash
        npx http-server .
        
        ```
        
    -   Or open `index.html` directly in a browser.

## API Integration

QuizQuest fetches questions from an external API. The current setup uses:

```javascript
fetch("https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX")
    .then((res) => res.json())
    .then((data) => {
        if (!data.questions || data.questions.length === 0) {
            console.error("No questions found in the response data.");
            return;
        }
        questions = data.questions.map((q) => {
            return {
                question: q.description || "No question text available",
                choices: q.options.map(opt => opt.description || "No option text"),
                answer: q.options.findIndex(opt => opt.is_correct) + 1
            };
        }).filter(q => q !== null);

        console.log("Parsed Questions:", questions);
        startGame();
    })
    .catch((err) => {
        console.error("Error fetching quiz data:", err);
    });

```

## Usage

1.  Open the application in a browser.
2.  Answer the questions displayed on the screen.
3.  Receive instant feedback on correct and incorrect answers.
4.  View the final score at the end of the quiz.
5.  Submit a pull request.

## Application Screenshots

Below are some images showcasing different pages of the application:

### Home Page
![Home Page](images/home_page.png)

### Rules Page
![Rules Page](images/rules_page.png)

### Quiz Page
![Quiz Page](images/quiz_page.png)

### Score Page
![Score Page](images/score_page.png)

## Video Walkthrough  
[![Watch the video](images/home_page.png)](images/demo.mp4)  

## License

This project is licensed under the MIT License.

## Contact

For any queries, reach out via [[deepaksharma120201@gmail.com](mailto:deepaksharma120201@gmail.com)] or create an issue in the repository.