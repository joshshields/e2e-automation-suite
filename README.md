# 🧪 Test Automation Practice Project

A beginner-friendly test automation project to simulate and verify user interactions using Playwright. The goal is to demonstrate core testing concepts and workflows using a static login site.

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

## ✅ Running the Playwright Tests

Make sure the site is running (see above), then in a new terminal:

```bash
cd playwright-tests
npx playwright test
```

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

**Your Name**  
GitHub: [@yourusername](https://github.com/joshshields)
