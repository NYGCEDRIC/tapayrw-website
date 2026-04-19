# 👋 How to Contribute to the Tapay Website

Follow these steps every time you want to make changes to the site.

---

## 🛠️ First Time Setup (do this once)

### 1. Accept the GitHub invitation
Check your email or go to:
👉 https://github.com/NYGCEDRIC/tapayrw-website/invitations

Click **Accept invitation**.

### 2. Install required tools
Make sure you have these installed on your computer:
- [Git](https://git-scm.com/downloads)
- [Node.js](https://nodejs.org/) (version 18 or higher)

### 3. Clone the project
Open your terminal and run:
```bash
git clone https://github.com/NYGCEDRIC/tapayrw-website.git
cd tapayrw-website
```

### 4. Install dependencies
```bash
npm install
```

### 5. Run the site locally
```bash
npm run dev
```
Then open http://localhost:3000 in your browser to see the site.

---

## ✏️ Every Time You Want to Make Changes

### Step 1 — Get the latest code from GitHub
Always start by pulling the latest changes before you start:
```bash
git checkout main
git pull origin main
```

### Step 2 — Create your own branch
Never work directly on `main`. Create a new branch named after what you're changing:
```bash
git checkout -b your-branch-name
```

**Examples:**
```bash
git checkout -b fix/hero-text
git checkout -b feature/add-contact-form
git checkout -b update/pricing-page
```

### Step 3 — Make your changes
Edit the files you need to change. You can run `npm run dev` to preview your changes live in the browser.

### Step 4 — Save your changes
```bash
git add .
git commit -m "describe what you changed"
```

**Good commit message examples:**
- `fix: correct typo in hero section`
- `update: change pricing for basic plan`
- `feature: add contact form to footer`

### Step 5 — Push your branch to GitHub
```bash
git push origin your-branch-name
```

### Step 6 — Open a Pull Request (PR)
1. Go to 👉 https://github.com/NYGCEDRIC/tapayrw-website
2. You'll see a yellow banner saying **"Compare & pull request"** — click it
3. Add a short description of what you changed
4. Click **"Create pull request"**

### Step 7 — Wait for review
Cedric will review your changes. Once approved and merged, the site at **tapayrw.io** will update automatically within ~2 minutes. 🚀

---

## ⚠️ Important Rules

- ❌ **Never push directly to `main`** — always use a branch + PR
- ✅ **Always pull latest `main` before starting** new work
- ✅ **One PR per feature or fix** — keep changes focused
- ✅ **Test locally** (`npm run dev`) before opening a PR

---

## 🆘 Need Help?

Contact Cedric or check the [GitHub Issues](https://github.com/NYGCEDRIC/tapayrw-website/issues) page.
