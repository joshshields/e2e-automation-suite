# 🔧 E2E Automation Suite

A cross-framework test automation suite demonstrating Playwright, Cypress, and Selenium through end-to-end browser testing. Built to showcase tool comparisons, modern testing practices, and full-stack developer workflow readiness.

---

## 📁 Project Structure

```
test-automation-practice/
├── site/              # Static login site (HTML, CSS, JS)
├── playwright-tests/  # Playwright test suite
├── cypress-tests/     # (optional, coming soon)
├── selenium-tests/    # (optional, coming soon)
```

---

## 🚀 Running the Static Site

Use `live-server` to serve the static login page:

```bash
cd site
npx live-server --port=5500
```

Then open in your browser:  
👉 `http://127.0.0.1:5500/site/`

---

## ✅ Successful Tests
![Playwright Tests](https://github.com/joshshields/e2e-automation-suite/actions/workflows/playwright.yml/badge.svg)<br>![Cypress Tests](https://github.com/joshshields/e2e-automation-suite/actions/workflows/cypress.yml/badge.svg)

---

## 🔬 Features Tested

- ✅ Successful login with correct credentials
- ❌ Failed login with invalid credentials
- 🛑 Blocked submission on empty fields
- 🔁 Redirect to dashboard after success
- 🧾 Visual message feedback (error/success)

---

## 📌 Future Plans

- Add Cypress and Selenium equivalents
- Add GitHub Actions CI pipeline
- Add page object model structure
- Expand test coverage to API or file upload flows

---

## 👤 Author
GitHub: [@joshshields](https://github.com/joshshields)
