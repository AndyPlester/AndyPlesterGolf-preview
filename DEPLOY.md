# Deploy: GitHub Pages + Wix domain + Cursor

Replace **YOUR-GITHUB-USERNAME** with your actual GitHub username everywhere below.

---

## Part 1: GitHub – repo and Pages

### 1.1 Create the repo (if you haven’t)

1. On GitHub: **New repository**.
2. Name it e.g. `andyplestergolf` or `andyplestergolf.github.io`.
3. **Private** (you have Pro).
4. Do **not** add a README, .gitignore, or license (you already have files).
5. Create the repo.

### 1.2 Link this folder to GitHub and push

In a terminal (Cursor: **Terminal → New Terminal**), run from this project folder:

```bash
git init
git add .
git commit -m "Initial commit – Andy Plester Golf site"
git branch -M main
git remote add origin https://github.com/YOUR-GITHUB-USERNAME/andyplestergolf.git
git push -u origin main
```

(If the repo is named something else, use that name instead of `andyplestergolf` in the `git remote add` and `git push` commands.)

### 1.3 Turn on GitHub Pages

1. Repo → **Settings** → **Pages**.
2. **Source:** “Deploy from a branch”.
3. **Branch:** `main` (or `master`), folder **/ (root)** → **Save**.
4. Wait a minute; the site will be at `https://YOUR-GITHUB-USERNAME.github.io/andyplestergolf/` (or `https://YOUR-GITHUB-USERNAME.github.io/` if the repo is `YOUR-GITHUB-USERNAME.github.io`).

### 1.4 Add your custom domain

1. Still in **Settings → Pages**.
2. **Custom domain:** type `andyplestergolf.com` → **Save**.
3. Leave **Enforce HTTPS** unchecked until after Wix DNS is done and the site loads on your domain.

---

## Part 2: Cursor – update the site “automatically”

Every time you **push** to the `main` branch, GitHub Pages rebuilds the site. So “automatically” = you push from Cursor, and the live site updates.

### 2.1 Normal workflow in Cursor

1. Edit your files (e.g. `index.html`, `style.css`).
2. Open **Source Control** (Ctrl+Shift+G / Cmd+Shift+G) or the Git icon.
3. Stage changes (**+** next to files, or “Stage All”).
4. In the message box type e.g. `Update hero copy` → **Commit**.
5. Click **Sync** (or **Push**) to send to GitHub.

After the push, wait 30–60 seconds; your live site (and `andyplestergolf.com` once DNS is set) will show the new version.

### 2.2 Optional: push from the terminal

```bash
git add .
git commit -m "Describe your change"
git push
```

---

## Part 3: Wix – DNS (point andyplestergolf.com to GitHub)

Do this in **Wix → Domains → andyplestergolf.com → Manage DNS Records** (the screen you screenshotted).

### 3.1 A (Host) records – root domain (andyplestergolf.com)

**Remove Wix’s A records:**

1. In **A (Host) Records**, find the rows that point to:
   - `185.230.63.186`
   - `185.230.63.107`
2. Use the **⋯** menu on each → **Delete** (or **Remove**). Confirm.
3. If there is an unsaved row (e.g. with `185.230.63.171`), click **Cancel** so it’s not saved.

**Add GitHub’s A records:**

Add **four** new A records. For each, use **+ Add Record** (or **Add**), then:

| # | Host name | Value / Points to | TTL   |
|---|-----------|-------------------|-------|
| 1 | `@`       | `185.199.108.153` | 1 Hour |
| 2 | `@`       | `185.199.109.153` | 1 Hour |
| 3 | `@`       | `185.199.110.153` | 1 Hour |
| 4 | `@`       | `185.199.111.153` | 1 Hour |

If Wix doesn’t accept `@`, try **Host name** = `andyplestergolf.com` (or whatever it suggests for “root domain”). Save each record.

### 3.2 CNAME – www (www.andyplestergolf.com)

**Point www to GitHub instead of Wix:**

1. In **CNAME (Aliases)**, find the row:
   - **Host:** `www` (or `www.andyplestergolf.com`)
   - **Value:** `cdn1.wixdns.net`
2. **⋯** → **Edit** (or delete it and add a new one).
3. Set:
   - **Host name:** `www`
   - **Value / Points to:** `YOUR-GITHUB-USERNAME.github.io`  
     (e.g. `janesmith.github.io` – no `https://`, no path.)
4. **Save**.

**Do not change** the other CNAME (`litesrv._domainkey...`) – that’s for MailerLite.

### 3.3 TXT and MX

- **TXT:** Leave as they are (MailerLite, SPF).
- **MX:** Leave as is (email).
- **NS:** Wix says they’re not editable; that’s fine. You’re only changing A and CNAME.

### 3.4 After DNS is saved

- Propagation can take **5 minutes to 48 hours**.
- When `https://andyplestergolf.com` and `https://www.andyplestergolf.com` open your GitHub site, go back to **GitHub → Settings → Pages** and turn **Enforce HTTPS** on.

---

## Quick checklist

- [ ] GitHub repo created (private OK with Pro).
- [ ] This folder pushed to `main` (Part 1.2).
- [ ] Pages enabled, branch `main`, root folder (Part 1.3).
- [ ] Custom domain `andyplestergolf.com` set in GitHub (Part 1.4).
- [ ] Wix: Wix A records removed, four GitHub A records added (Part 3.1).
- [ ] Wix: `www` CNAME changed to `YOUR-GITHUB-USERNAME.github.io` (Part 3.2).
- [ ] After domain works: **Enforce HTTPS** enabled in GitHub Pages.

After that, any time you **commit and push** from Cursor, the site updates automatically.
