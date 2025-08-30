# Demoblaze UI Test Automation

This project uses [Playwright](https://playwright.dev/) to run automated UI tests for [Demoblaze](https://www.demoblaze.com).

It is designed to test product browsing, ordering, and user login flows using a Page Object Model (POM) structure.

## Authentication Support

This project uses Playwright's [Authentication Storage](https://playwright.dev/docs/auth) to handle login sessions, allowing tests to run with pre-authenticated users.

## Prerequisites

- Node.js 20.x
- npm (comes with Node.js)

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
npx playwright install
```

## Setting up Environment Variables

Some tests require a user account for login. To securely store credentials, create a `.env` file in the root of the project.

### Steps

1. Create a `.env` file next to `package.json`.
2. Add your environment variables:

```dotenv
BASE_URL=https://www.demoblaze.com
USER_NAME=yourusername
USER_PASSWORD=yourpassword
```

## Running Tests

Run playwright UI tests:

```bash
npx playwright test
```

## Viewing Reports

After test execution, generate and view the HTML report:

```bash
npx playwright show-report
```
