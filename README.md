# Shopflo SDET Assignment

## Overview

This repository contains the solution for the Shopflo SDET Assignment covering:

* Manual Testing
* UI Automation Testing
* API Automation Testing
* CI/CD Integration using GitHub Actions

---

## Framework Choice

### Playwright + TypeScript

I selected Playwright with TypeScript because it provides:

* Fast and reliable browser automation
* Built-in API testing capabilities
* Automatic waiting mechanisms
* Cross-browser support (Chromium, Firefox, WebKit)
* Parallel test execution
* Rich reporting capabilities
* Seamless GitHub Actions integration

Using a single framework for both UI and API automation improves maintainability and reduces framework complexity.

---

## Project Structure

```text
shopflo-sdet-assignment
│
├── pages
│   ├── LoginPage.ts
│   ├── InventoryPage.ts
│   ├── CartPage.ts
│   └── CheckoutPage.ts
│
├── tests
│   ├── ui
│   │   ├── login.spec.ts
│   │   ├── cart.spec.ts
│   │   ├── checkout.spec.ts
│   │   └── e2e.spec.ts
│   └── api
│       ├── auth.spec.ts
│       ├── cart.spec.ts
│       ├── cart-negative.spec.ts
│       └── product.spec.ts
│
├── test-cases
│   └── ShopfloAssignment_Format.xlsx
│
├── .github/workflows
│   └── playwright.yml
│
├── playwright.config.ts
└── README.md
```

---

# Assignment 1 - SauceDemo

## Manual Testing

Created comprehensive manual test cases covering:

* Login
* Product Listing
* Cart
* Checkout
* End-to-End Purchase Flow

The test cases include:

* Severity
* Priority
* Steps
* Expected Result
* Actual Result
* Status

---

## UI Automation Coverage

### Login

* Valid Login
* Invalid Username
* Invalid Password
* Empty Username
* Empty Password

### Cart

* Add Product to Cart
* Remove Product from Cart
* Verify Cart Count

### Checkout

* Successful Checkout
* Missing First Name
* Missing Last Name
* Missing Postal Code

### End-to-End

* Login → Add Product → Cart → Checkout → Order Confirmation

Implemented using:

* Page Object Model (POM)
* Playwright Test Runner
* TypeScript

---

# Assignment 2 - Fake Store API

## Authentication

* Login API Validation
* Token Verification

## Cart CRUD Operations

* Create Cart (POST)
* Get Cart (GET)
* Update Cart (PUT)
* Delete Cart (DELETE)

## Negative Testing

* Invalid Cart Retrieval
* Invalid Cart Deletion

## Data-Driven Testing

Executed product validation using multiple product IDs:

* Product ID 1
* Product ID 2
* Product ID 3
* Product ID 4

## Response Schema Validation

Validated API response structure including:

* id
* title
* price
* description
* category

## Contract Validation

Implemented schema-style validation to ensure response structure remains consistent across future API changes.

---

# Running Tests

Install dependencies:

```bash
npm install
```

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

Generate report:

```bash
npx playwright show-report
```

---

# CI/CD

GitHub Actions workflow is configured to:

* Trigger on every push
* Install dependencies
* Execute Playwright tests
* Generate execution reports

---
# Extension Plan

## Parallel Execution

Currently, the framework supports Playwright's built-in parallel execution capabilities.

Future enhancements include:

* Executing tests across multiple workers
* Running UI and API suites in parallel
* Cross-browser parallel execution (Chromium, Firefox, WebKit)
* Reduced execution time for regression suites

Example:

```bash
npx playwright test --workers=4
```

---

## Reporting

Currently, Playwright's default HTML report is used.

Future enhancements include:

* Allure Reporting integration
* Test execution dashboards
* Historical trend analysis
* Failure screenshots and videos
* Email notifications after execution

Example:

```bash
npx playwright show-report
```

---

## CI/CD Improvements

Future enhancements include:

* Scheduled nightly test execution
* Pull Request validation pipelines
* Environment-specific test execution
* Docker-based execution in CI environments

---

## Test Data Management

Future enhancements include:

* External test data using JSON files
* Environment-specific configurations
* Secure credential management through GitHub Secrets

---

## Framework Scalability

Future enhancements include:

* API and UI test segregation
* Reusable utility libraries
* Centralized configuration management
* Contract testing and advanced schema validation


## Author

Dolly Priyanka

Automation Testing | Playwright | TypeScript | API Testing
