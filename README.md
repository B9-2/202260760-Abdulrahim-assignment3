# My Portfolio (Assignment 2)

## Description
This is an improved version of my personal portfolio website for Assignment 2. It builds on Assignment 1 by adding interactivity, better user experience, and more dynamic behavior using JavaScript.

The website still includes 3 main sections: About Me, Projects, and a Contact form, but now with additional interactive features.

## Features
- About Me introduction
- Projects listing 2 projects along with images
- Contact form requiring name, email, and a message

### New Features (Assignment 2)
- JavaScript interactivity: dark/light mode toggle with saved preference using localStorage
- Live project search/filter that updates while typing
- Empty state message when no projects match the search
- Form validation with user feedback (error and success messages)
- Improved user experience with hover effects and smoother transitions

## Setup (Run Locally)
1. Download or clone this repository.
2. Open the folder in VS Code.
3. Open `index.html` in your browser or, as I did, use the VS Code Live Server extension.

## How It Works
- The theme toggle saves the user’s choice using localStorage, so that it stays after refreshing the page.
- The project search filters the projects based on user's input.
- The contact form prevents submission if at least one of the fields is empty and shows a message to the user.

## AI Use
I used AI tools (ChatGPT) to help with implementing and debugging JavaScript features such as the search filter, form validation, and improving interactivity.  
I reviewed and modified the generated code to make sure I understand how it works.

More details: `docs/ai-usage-report.md`.

## Live Demo
https://b9-2.github.io/202260760-Abdulrahim-assignment2/