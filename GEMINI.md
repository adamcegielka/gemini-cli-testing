# Gemini CLI Project Instructions

This file contains foundational mandates for Gemini CLI when working on the `gemini-cli-testing` project. These instructions take absolute precedence over general defaults.

## 🛠 Tech Stack & Standards
- **Framework:** Always use Playwright with TypeScript.
- **Project Structure:**
  - UI tests in `tests/ui/`
  - API tests in `tests/api/`
  - Documentation in `docs/test-cases/`
- **Typing:** Strict TypeScript typing; avoid using `any`.
- **Auto-waiting:** Leverage Playwright's built-in auto-waiting; avoid manual `page.waitForTimeout()`.

## 📝 Documentation & Language
- **Communication:** Interact with the user in **Polish**.
- **Code & Docs:** Write all code, comments, and documentation (Test Cases, README) in **English**.
- **Traceability:** Every new test script must have a corresponding Test Case documented in Markdown in `docs/test-cases/`.

## 🚀 Workflow & Git
- **Commits:** Use conventional commit prefixes: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`.
- **Branching:** Push directly to the `main` branch unless instructed otherwise.
- **Verification:** Always run `npm test` before committing new changes to ensure no regressions.

## 🤖 AI Interaction Style
- Be concise and focus on technical rationale.
- Proactively suggest best testing practices (e.g., Page Object Model, Data-Driven Testing).
- When asked to fix a bug, always reproduce it with a test case first.
