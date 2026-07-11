# Playwright Project

End-to-end test automation project built with **Playwright** and **TypeScript**.

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- GitHub Actions

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/<repository-name>.git
```

Navigate to the project folder:

```bash
cd <repository-name>
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## ▶️ Running Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

Run tests using the Playwright UI:

```bash
npx playwright test --ui
```

Run a specific test file:

```bash
npx playwright test tests/example.spec.ts
```

## 📊 Test Reports

After running the tests, open the HTML report:

```bash
npx playwright show-report
```

## 📁 Project Structure

```
playwright-project/
│
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   └── example.spec.ts
├── playwright.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 🔄 Continuous Integration

This project includes a GitHub Actions workflow that automatically runs the Playwright test suite on every push and pull request.
