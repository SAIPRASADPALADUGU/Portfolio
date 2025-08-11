# Sai Prasad Paladugu — Portfolio

Simple, fast, single-page portfolio built with **HTML/CSS/JS**. Ready for **GitHub Pages**.

## Run locally
Open `index.html` in your browser.

## Deploy to GitHub Pages (UI)
1. Create a **new GitHub repo** (e.g., `portfolio`).
2. Upload these files to the repo root (`index.html`, `styles.css`, `script.js`, `README.md`).
3. Add your PDF resume named `Sai_Prasad_Paladugu_Resume.pdf` to the repo root, or edit the link in `index.html`.
4. Go to **Settings → Pages**:
   - **Source**: *Deploy from a branch*
   - **Branch**: `main`, **Folder**: `/ (root)` → **Save**
5. Wait ~1–2 minutes. Your site will be at `https://<your-username>.github.io/<repo-name>/`.

## Deploy with Git (CLI)
```bash
mkdir portfolio && cd portfolio
# create the files above in this folder
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
