# TypeHero

TypeHero is typing speed test platform designed to help users improve their typing speed, accuracy, and performance. With a user-friendly interface and real-time tracking.

## Features

**Character Count**:

- Tracks the total number of characters typed, including both correct and incorrect characters.

**Wrong Character Detection**:

- Detects and calculates incorrect characters as the user types.

**Words Per Minute (WPM) Calculation**:

- Calculates the user's typing speed in correctly words per minute (WPM).

**Typing Accuracy Tracking**:

- Calculates the percentage of correctly typed words.

**Performance Check (Progress Tracker)**:

- Allows users to compare their current typing performance with previous test results.

**Timer**:

- Includes a 60-second timer for each typing test.

## Technologies Used

- **HTML**
- **CSS**
- **JavaScript**

## Installation

**Clone the Repository**:
git clone https://github.com/Mikolonija/typeHero.git

## Requirements

**Visual studio code**

- **Extensions**
  - `Live Server`: 5.6.1 (https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

## Running the program

1. **Navigate to the src/index.html file:**

- `Open your file explorer and locate the index.html file.`

2. **Open with live server:**

- `Right-click on the index.html file.`
- `From the context header-menu, choose "Open with Live Server".`

## Website link

[https://type-hero-sigma.vercel.app/](https://type-hero-sigma.vercel.app/)

## Data Storage

- `Stats are stored in localStorage.`

## Text api

- `Endpoint`: https://random-word-form.herokuapp.com/random/noun?count=50
- `More info`: https://random-word-form.herokuapp.com/

## Description of folders and files

### `src/`

#### `assets/`

- `*`: Project images.

#### `data/`

- `offlineText.js`: Offline typing text data
- `typingGuide.js`: Typing guide text data.

#### `modules/`

- `copyright.js`: Handles copyright-related date.
- `renderGuideData.js`: Handles guide descriptions data.

#### `modules/text-management/`

- `fetchTextData.js`: Fetches text data and prepares it for display.
- `ui.js`: Updates the UI for text display and interactions.

#### `modules/time-management/`

- `progressBar.js`: Manages the update and reset of the progress bar.
- `timer.js`: Manages the timer functionality and time-related actions.

#### `modules/typing-management/`

- `resetFirstCharacter.js`: Resets the styles and content of first character.
- `update.js`: Updates the typing text and characters states.
- `validation.js`: Validates the typed text and applies styling.

#### `modules/typing-stats/`

- `saving.js`: Saving the typing statistics data in localStorage.
- `ui.js`: Manages and updates the UI for typing statistics.
- `update.js`: Manages typing stats calculations and updates.

#### `utils/`

- `domElements.js`: Stores references to important DOM elements.
- `helpers.js`: Contains utility functions used across the project.

#### `styles/`

- `card.css`: Contains the styles for the typing statistics card.
- `font.css`: Defines global font styles used across the website.
- `footer.css`: Styles for the footer section of the website.
- `global.css`: A general stylesheet containing common styles used throughout the website.
- `header.css`: Styles for the header section of the website.
- `info.css`: Contains the styles for the info container.
- `layout.css`: The layout styles.
- `reset.css`: A CSS reset file that normalizes or resets default browser styling for HTML elements.
- `table.css`: Provides styles specifically for the typing stats table.
- `typing.css`: Contains the styles for the typing container.
- `variables.css`: Global CSS variables.

`config.js`: Contains configuration settings for the project.

`guide.js`: The JavaScript file, that serves as the central point for the guide page logic.

`index.js`: The JavaScript file that serves as the entry point for the main page logic.

### `/`

- `guide.html`: The main HTML file, that serves as the entry point for the guide page.
- `index.html`: The main HTML file, that serves as the entry point for the main page.
- `README.md`: A markdown file providing an overview and instructions for the application.
