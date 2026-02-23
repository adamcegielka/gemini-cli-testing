# Playwright Learning Project: UI & API Testing

This repository is a hands-on project dedicated to learning and practicing automated testing using **Playwright**. It covers both User Interface (UI) and Application Programming Interface (API) testing, following industry best practices.

## 🤖 Collaborative Learning with Gemini CLI

This project was initialized and is being developed in collaboration with **Gemini CLI**, an interactive AI agent. It serves as a living workspace for:
- Learning automation from scratch.
- Practicing UI and API test automation.
- Understanding best practices in testing documentation and project structure.
- Version control and collaborative development workflows.

## 🚀 Features

-   **UI Testing:** Automated login scenarios on [The Internet (HerokuApp)](https://the-internet.herokuapp.com/login).
-   **API Testing:** RESTful API validations using [JSONPlaceholder](https://jsonplaceholder.typicode.com).
-   **Test Documentation:** Professional test cases documented in Markdown format.
-   **Configuration:** Scalable Playwright configuration with Chromium, Firefox, and WebKit support.
-   **Best Practices:** Organized folder structure, `.gitignore`, and Git version control.

## 📁 Project Structure

```text
├── docs/               # Test documentation (Test Cases)
├── tests/              # Test scripts
│   ├── ui/             # UI automation tests
│   └── api/            # API automation tests
├── playwright.config.ts # Playwright global configuration
└── package.json        # Project dependencies and scripts
```

## 🛠️ Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (version 18 or higher recommended)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/adamcegielka/gemini-cli-testing.git
    cd gemini-cli-testing
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Install Playwright browsers:
    ```bash
    npx playwright install
    ```

## 🧪 Running Tests

-   **Run all tests:**
    ```bash
    npm test
    ```
-   **Run tests in UI Mode (Interactive):**
    ```bash
    npm run test:ui
    ```
-   **Show HTML Report:**
    ```bash
    npm run test:report
    ```

## 📚 Resources Used

-   [Playwright Documentation](https://playwright.dev/)
-   [The Internet (Practice UI)](https://the-internet.herokuapp.com/)
-   [JSONPlaceholder (Practice API)](https://jsonplaceholder.typicode.com/)

---
*Created as a joint venture for learning and automation excellence.*
