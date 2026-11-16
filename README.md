# User Registration Tracker

A simple and responsive web application to register users and save their information in the browser. Built with Vanilla JavaScript, Tailwind CSS, and Vite.

## Features

- **Add Users:** Register new users with their first name, last name, age, email, and position.
- **Data Persistence:** Saves all registered users in `localStorage`, so data stays safe even after refreshing the page.
- **Input Validation:** Prevents submitting negative or zero values for age and trims extra spaces.
- **Reset All Data:** Includes a reset button that clears all saved users from the list and `localStorage`.
- **Empty State & Dynamic UI:** Shows a clean message when no users are registered and automatically hides the reset button when the list is empty.
- **Fast DOM Rendering:** Uses `DocumentFragment` and ES6 helper functions for clean and fast UI updates.

## Technologies Used

- **HTML5**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Vite**

## How to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/Moslem2002/user-registration-tracker.git
   ```

2. Go to the project folder:

   ```bash
   cd user-registration-tracker
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## What I Learned

In this project, I practiced working with DOM manipulation, handling form events, managing data with `localStorage`, and writing cleaner JavaScript using ES6 default parameters and `DocumentFragment`.
