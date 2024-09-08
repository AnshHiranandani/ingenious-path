document.getElementById('assistant-form').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Fetch input values from the form fields
    const currentField = document.getElementById('current-field').value;
    const desiredField = document.getElementById('desired-field').value;

    // Create a JSON object with the input data
    const formData = {
        current_field: currentField,
        desired_field: desiredField
    };

    // Send a POST request to the Flask backend
    fetch('/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)  // Convert JSON object to a string
    })
    .then(response => response.json())
    .then(data => {
        // Display the AI advice in the advice-container div
        const adviceContainer = document.getElementById('advice-container');
        if (data.advice) {
            adviceContainer.innerHTML = `<p>${data.advice}</p>`;
        } else if (data.error) {
            adviceContainer.innerHTML = `<p>Error: ${data.error}</p>`;
        }
    })
    .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error('Error:', error);
        const adviceContainer = document.getElementById('advice-container');
        adviceContainer.innerHTML = `<p>Error: ${error.message}</p>`;
    });
});

// Smooth scroll to anchor links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Toggle mobile navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('show');
});

// Close mobile navigation menu on click outside
window.addEventListener('click', (e) => {
  if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
    navMenu.classList.remove('show');
  }
});

async function getCareerAdvice(event) {
    event.preventDefault();

    const currentField = document.getElementById('current-field').value;
    const desiredField = document.getElementById('desired-field').value;
    const adviceOutput = document.getElementById('advice-output');

    const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            current_field: currentField,
            desired_field: desiredField
        })
    });

    const data = await response.json();
    adviceOutput.innerHTML = `<p>${data.advice}</p>`;
    function formatResponse(rawText) {
      // Split the text by period followed by a space, or by newline
      let sentences = rawText.split(/(?<=[.!?])\s+/);
      // Join the sentences with newline characters
      return sentences.join('<br/>');
  }
    // Assuming `aiResponse` is the raw text received from the AI model
let aiResponse = "Your raw text from AI model...";
let formattedResponse = formatResponse(aiResponse);

// Display the formatted response in the designated HTML element
document.getElementById('advice-container').innerHTML = formattedResponse;

}