// This file handles the logic for the questionnaire, including collecting additional participant information after the quiz.

document.addEventListener('DOMContentLoaded', function() {
    const questionnaireForm = document.getElementById('questionnaire-form');

    questionnaireForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Form validation
        const age = document.getElementById('age').value;
        if (age < 0 || age > 120) {
            showError('Please enter a valid age between 0 and 120');
            return;
        }

        const participantData = {
            age: age,
            gender: document.getElementById('gender').value,
            education: document.getElementById('education').value,
            colorBlind: document.getElementById('color-blind').value,
            familiarity: document.getElementById('familiarity').value,
            englishLevel: document.getElementById('english-level').value,
            ukrainianLevel: document.getElementById('ukrainian-level').value,
            visualizationDifficulty: document.getElementById('visualization-difficulty').value,
            quizDifficulty: document.getElementById('quiz-difficulty').value,
            kseAffiliation: document.getElementById('kse-affiliation').value,
            comments: document.getElementById('comments').value
        };

        // Disable form while submitting
        const submitButton = document.querySelector('button[type="submit"]');
        submitButton.disabled = true;

        // Store participant data in local storage
        localStorage.setItem('participantData', JSON.stringify(participantData));

        // Retrieve existing quiz data
        const allQuizzes = JSON.parse(localStorage.getItem('allQuizzes') || '{}');
        const quizId = 'quiz';
        if (allQuizzes[quizId]) {
            allQuizzes[quizId].participantData = participantData;
            localStorage.setItem('allQuizzes', JSON.stringify(allQuizzes));
        }

        // Send data to the backend
        fetch('/api/responses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(allQuizzes)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                console.log('Success:', data);
                window.location.href = 'results.html';
            } else {
                throw new Error(data.message || 'Failed to submit the form');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            showError('Failed to submit the form. Please try again.');
            submitButton.disabled = false;
        });
    });

    function showError(message) {
        const errorDiv = document.getElementById('error-message');
        errorDiv.textContent = message;
        errorDiv.style.display = 'block';
    }
});