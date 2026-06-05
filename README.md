# Shopflo SDET Assignment

## Overview

This repository contains the solution for the SDET assignment, covering both UI and API test automation.

### Assignment Scope

#### UI Automation

Target Application: https://www.saucedemo.com/

Coverage:

* Positive Test Scenarios
* Negative Test Scenarios
* End-to-End User Flows
* Login Validation
* Product Selection
* Cart Validation
* Checkout Process

#### API Automation

Target API: https://fakestoreapi.com/

Coverage:

* Cart CRUD Operations
* Authentication Testing
* Positive Test Scenarios
* Negative Test Scenarios
* Response Validation
* Schema Validation
* Data-Driven Testing

---

## Technology Stack

* Playwright
* TypeScript
* Node.js
* GitHub Actions

---

## Framework Design

The framework follows:

* Page Object Model (POM)
* Reusable Components
* Modular Test Design
* Maintainable Test Structure

---

## Project Structure

```text
shopflo-sdet-assignment

├── pages
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests
│   ├── ui
│   └── api
│
├── test-data
│
├── test-cases
│
├── .github
│   └── workflows
│
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Installation

```bash
npm install
```

---

## Execute Tests

Run all tests:

```bash
npx playwright test
```

Run UI tests:

```bash
npx playwright test tests/ui
```

Run API tests:

```bash
npx playwright test tests/api
```

---

## Reporting

Playwright HTML Reports are generated after execution.

Open the report using:

```bash
npx playwright show-report
```

---

## Continuous Integration

GitHub Actions is configured to execute automated tests on every push.

---

## Future Enhancements

* Cross-browser execution
* Parallel execution
* Environment-specific configuration
* Advanced reporting and dashboards
* Test data management improvements

---

## Author

Dolly Priyanka
