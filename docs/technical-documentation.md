# Technical Documentation (Assignment 2)

## Project Overview
This project is an improved portfolio website built with HTML, CSS, and JavaScript. It contains three main sections: About Me, Projects, and Contact, with added interactivity and dynamic behavior compared to Assignment 1.

## Folder Structure
- `index.html` — Main page structure
- `css/styles.css` — Page styling + responsive rules + dark mode styles + small UI effects
- `js/script.js` — JavaScript interactivity (theme toggle, search filter, form validation)
- `assets/images/` — Images used in the Projects section
- `docs/ai-usage-report.md` — AI usage report
- `docs/technical-documentation.md` — This document

## HTML Structure (index.html)
- `<main id="container">` wraps the whole page content
- Sections:
  - `#about` — short intro
  - `#projects` — ordered list of projects, each project has a title, description, and image
    - Includes a search input (`#projectSearch`) for filtering projects
    - Includes an empty state message (`#emptyMessage`)
  - `#contact` — contact form with name, email, and message
    - Includes a feedback message element (`#formMessage`)

## CSS Styling (css/styles.css)
- Centered layout using `#container` with a max-width.
- Section separation using borders, padding, and margins.
- Images are responsive using `max-width: 100%` and `height: auto`.
- Contact form styling:
  - Labels are block elements.
  - Inputs/textarea have consistent padding.
- Responsive behavior:
  - A media query (`@media (max-width: 600px)`) makes inputs/textarea full width on small screens.
- Dark mode:
  - The `.dark` class changes background and text colors.
  - Section borders and button styling change in dark mode.
- Basic UI improvements:
  - Hover effect on buttons
  - Simple transitions for smoother appearance

## JavaScript Interactivity (js/script.js)

### Dark/Light Mode Toggle
- A button with `id="themeToggle"` toggles dark mode.
- On click:
  - Adds/removes the `dark` class on the `<body>`
  - Updates the button text
  - Saves the theme in `localStorage`
- On page load:
  - The saved theme is loaded and applied automatically

### Project Search Filter (Dynamic Content)
- Input field with `id="projectSearch"` listens for user typing.
- Filters project list items in real-time using `includes()`.
- Shows only matching projects.
- Displays a message if no results are found.

### Contact Form Validation (User Feedback)
- The form has `id="contactForm"`.
- On submit:
  - Prevents default submission using `event.preventDefault()`
  - Checks if fields are empty
  - Displays error message if any field is missing
  - Displays success message if all fields are filled
  - Resets the form after successful submission

## How to Run Locally
1. Open the project folder in VS Code.
2. Open `index.html` in a browser, or use the VS Code Live Server extension.