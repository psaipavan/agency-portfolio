# 🚀 Git Workflow Guide — Good Will Agency

## 📐 Branch Structure

```
main                →  Live production. Protected. PR from develop only.
develop             →  Shared stable branch. Direct push allowed.
saipavan_develop    →  Sai Pavan's personal work branch.
aravind_develop     →  Aravind's personal work branch.
```

## ✅ The Only Allowed Flow

```
saipavan_develop  ──→  develop  (direct merge via terminal)
aravind_develop   ──→  develop  (direct merge via terminal)
develop           ──→  main     (Pull Request on GitHub only)
```

> ⚠️ develop to main ALWAYS requires a Pull Request on GitHub.
> ✅ Personal branches to develop can be merged directly from terminal.

---

## 🆕 Aravind — First Time Setup on Your Laptop

Follow these steps exactly once when setting up for the first time.

### Step 1 — Install Git
Download and install Git from **git-scm.com**

Verify it is installed:
```bash
git --version
```

### Step 2 — Configure Git with your details
```bash
git config --global user.name "Aravind"
git config --global user.email "aravind@youremail.com"
```

Verify it saved:
```bash
git config --global --list
```

### Step 3 — Create a GitHub account
- Go to **github.com** and sign up
- Use a professional username
- Verify your email
- Send your GitHub username to Sai Pavan

### Step 4 — Generate SSH Key on your laptop
```bash
ssh-keygen -t ed25519 -C "aravind@youremail.com"
```
Press **Enter** three times — do not type anything.

### Step 5 — Copy your SSH Key
```bash
cat ~/.ssh/id_ed25519.pub
```
Copy the entire line that appears starting with `ssh-ed25519 AAAA...`

### Step 6 — Add SSH Key to GitHub
1. Go to **github.com** → click your profile photo → **Settings**
2. Left sidebar → **SSH and GPG keys**
3. Click **New SSH key**
4. Title → `My Laptop`
5. Paste your key in the Key box
6. Click **Add SSH key**

### Step 7 — Test the connection
```bash
ssh -T git@github.com
```
You should see:
```
Hi aravind! You've successfully authenticated.
```

### Step 8 — Accept Sai Pavan's collaborator invite
- Sai Pavan will add you as a collaborator on GitHub
- You will get an email from GitHub → click **Accept invitation**

---

## 💻 Aravind — Clone the Repo onto Your Laptop

After accepting the invite, run these:

### Step 1 — Clone the repo
```bash
git clone git@github.com:psaipavan/agency-portfolio.git
```

### Step 2 — Go into the project folder
```bash
cd agency-portfolio
```

### Step 3 — Check all branches exist
```bash
git branch -a
```
You should see:
```
  remotes/origin/main
  remotes/origin/develop
  remotes/origin/saipavan_develop
  remotes/origin/aravind_develop
```

### Step 4 — Switch to your personal branch
```bash
git checkout aravind_develop
```

### Step 5 — Verify you are on the right branch
```bash
git branch
```
You should see `* aravind_develop` with the star next to it.

### Step 6 — Open in VS Code
```bash
code .
```

> You are now fully set up. Never leave aravind_develop. Always work here.

---

## 🔑 Sai Pavan — How to Add Aravind as Collaborator

1. Go to **github.com/psaipavan/agency-portfolio**
2. Click **Settings** tab
3. Left sidebar → **Collaborators**
4. Click **Add people**
5. Search Aravind's GitHub username
6. Click **Add**
7. Aravind gets an email → he clicks **Accept invitation** ✅

---

## 📅 Daily Workflow — Sai Pavan

### Step 1 — Switch to your personal branch
```bash
git checkout saipavan_develop
```

### Step 2 — Pull latest from develop into your branch
```bash
git pull origin develop
```
> Do this every morning before writing any code.

### Step 3 — Write your code in VS Code

### Step 4 — Check what changed
```bash
git status
```

### Step 5 — Stage your changes
```bash
git add .
```

### Step 6 — Commit with a clear message
```bash
git commit -m "add navbar component"
```

### Step 7 — Push to your personal branch
```bash
git push origin saipavan_develop
```

### Step 8 — Merge into develop directly
```bash
git checkout develop
git merge saipavan_develop
git push origin develop
```

### Step 9 — Go back to your personal branch
```bash
git checkout saipavan_develop
```

---

## 📅 Daily Workflow — Aravind

### Step 1 — Switch to your personal branch
```bash
git checkout aravind_develop
```

### Step 2 — Pull latest from develop into your branch
```bash
git pull origin develop
```
> Do this every morning before writing any code.

### Step 3 — Write your code in VS Code

### Step 4 — Stage, commit and push to your branch
```bash
git add .
git commit -m "add footer component"
git push origin aravind_develop
```

### Step 5 — Merge into develop directly
```bash
git checkout develop
git merge aravind_develop
git push origin develop
```

### Step 6 — Go back to your personal branch
```bash
git checkout aravind_develop
```

---

## 🚢 develop to main — Pull Request Only

Only do this when `develop` is fully tested and both of you agree it is ready to go live.

```
develop  ──→  main   (Pull Request on GitHub)
```

### How to raise the PR on GitHub

1. Go to **github.com/psaipavan/agency-portfolio**
2. Click **Pull requests** → **New pull request**
3. Set it as:
   - **base:** `main`
   - **compare:** `develop`
4. Title it: `Release - date - brief description`
5. Both members review it
6. One person approves → Click **Merge pull request** ✅
7. `main` is live — Vercel auto-deploys ✅

---

## ⬇️ Pulling — Stay Updated

### Every morning — pull develop into your branch
```bash
# Sai Pavan
git checkout saipavan_develop
git pull origin develop

# Aravind
git checkout aravind_develop
git pull origin develop
```

### After the other person merges into develop — update your branch
```bash
git pull origin develop
```

### If you worked on another machine — pull your own branch
```bash
# Sai Pavan
git pull origin saipavan_develop

# Aravind
git pull origin aravind_develop
```

---

## ⚡ Merge Conflicts — How to Fix

Happens when both of you edited the same line in the same file.

### Step 1 — Git tells you which files have conflicts
```bash
git status
```

### Step 2 — Open the conflicted file in VS Code
You will see this inside the file:
```
<<<<<<< HEAD
your version of the code
=======
aravind's version of the code
>>>>>>> aravind_develop
```

### Step 3 — Keep the correct version
- Delete the version you don't want
- Delete the marker lines
- Save the file

### Step 4 — Commit the fix
```bash
git add .
git commit -m "resolve merge conflict in Navbar.jsx"
git push origin saipavan_develop
```

> Best way to avoid conflicts — always pull from develop every morning
> and never both edit the same file at the same time.
> Communicate on WhatsApp before editing shared files.

---

## 🛑 Rules — Non Negotiable

| Rule | Why |
|---|---|
| Never push directly to `main` | It is live production code — PR only |
| Never work directly on `develop` or `main` | Always use your personal branch |
| Always pull from develop before starting | Avoids merge conflicts |
| Merge personal branch into develop via terminal | Fast and simple |
| develop to main always via Pull Request | Second pair of eyes before going live |
| One feature per commit | Easy to undo specific changes |
| Clear commit messages always | Future you will thank you |
| Tell each other before editing shared files | Prevents conflicts |

---

## 🔧 Commands Quick Reference

```bash
# See which branch you are on
git branch

# Switch to your branch
git checkout saipavan_develop        # Sai Pavan
git checkout aravind_develop         # Aravind

# Pull latest from develop into your branch
git pull origin develop

# See what files changed
git status

# See line by line changes
git diff

# Stage everything
git add .

# Stage a specific file
git add src/components/Navbar.jsx

# Commit
git commit -m "your message"

# Push to your personal branch
git push origin saipavan_develop     # Sai Pavan
git push origin aravind_develop      # Aravind

# Merge your branch into develop
git checkout develop
git merge saipavan_develop           # or aravind_develop
git push origin develop

# Go back to your personal branch
git checkout saipavan_develop        # or aravind_develop

# See commit history
git log --oneline

# Undo last commit but keep your changes
git reset --soft HEAD~1

# Discard all unsaved changes — careful
git checkout -- .
```

---

## 🧭 Full Visual Flow

```
VS Code (Sai Pavan)          VS Code (Aravind)
        │                           │
        ▼                           ▼
saipavan_develop             aravind_develop
        │                           │
        │  git checkout develop     │  git checkout develop
        │  git merge saipavan_dev   │  git merge aravind_dev
        │  git push origin develop  │  git push origin develop
        └───────────┬───────────────┘
                    ▼
                develop
          (direct merge — no PR needed)
                    │
                    │  GitHub Pull Request
                    │  base: main
                    │  compare: develop
                    ▼
                  main
          (PR required — reviewed and merged)
                    │
                    ▼
                 Vercel
             (auto deploys)
```

---

## 👥 Who Does What

| Person | Works On | Merges Into | How | Push to Main |
|---|---|---|---|---|
| Sai Pavan | `saipavan_develop` | `develop` | Direct terminal merge | ❌ PR only |
| Aravind | `aravind_develop` | `develop` | Direct terminal merge | ❌ PR only |
| Both (agreed) | `develop` | `main` | PR on GitHub | ❌ PR only |

---

## ✅ Aravind Setup Checklist

```
☐  Git installed on laptop  (git --version to verify)
☐  Git configured with name and email
☐  GitHub account created
☐  SSH key generated
☐  SSH key added to GitHub
☐  SSH connection tested  (ssh -T git@github.com)
☐  Collaborator invite accepted from Sai Pavan
☐  Repo cloned  (git clone ...)
☐  Switched to aravind_develop branch
☐  Opened project in VS Code  (code .)
☐  Ready to work
```

---

*Good Will Agency — Internal Git Guide 2025*