# E2E Login + Auth Flow  
**Multi-Framework Browser Testing**  

This project runs end-to-end tests against a static login system using three major test frameworks: **Playwright**, **Cypress**, and **Selenium**. It covers core authentication flows and compares real-world test runner behaviors side-by-side.

---

## Structure  

```
e2e-login-plus-auth-flow/
├── site/                static HTML/CSS/JS login + dashboard pages
├── playwright-tests/    Playwright test suite
├── cypress-tests/       Cypress test suite
├── selenium-tests/      Selenium test suite
```

---

## Test Coverage  

- Login form visibility  
- Valid login → dashboard redirect  
- Invalid login → error message  
- Auth check → redirect unauthenticated users  
- Logout clears session and redirects  

---

## Status  

![Playwright Tests](https://github.com/joshshields/e2e-login-plus-auth-flow/actions/workflows/playwright.yml/badge.svg?branch=stable-display)  
![Cypress Tests](https://github.com/joshshields/e2e-login-plus-auth-flow/actions/workflows/cypress.yml/badge.svg?branch=stable-display)  
![Selenium Tests](https://github.com/joshshields/e2e-login-plus-auth-flow/actions/workflows/selenium.yml/badge.svg?branch=stable-display)


---

[GitHub → @joshshields](https://github.com/joshshields)
