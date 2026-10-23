# Andy Plester Golf

Static website for Andy Plester, PGA Coach. Clean, modern single-page site (Brum Eats–style) with video hero, free drills CTA, testimonials, and social links.

## Host on GitHub Pages

1. Create a new repo (e.g. `andyplestergolf` or `andyplestergolf.github.io`).
2. Push this folder to the repo (all files in root or in `main` branch).
3. **Settings → Pages**: set source to **Deploy from a branch**, branch **main** (or **master**), folder **/ (root)**.
4. Save; the site will be at `https://<username>.github.io/<repo>/` or `https://andyplestergolf.github.io/` if the repo is named `andyplestergolf.github.io`.

---

## Use your Wix domain with GitHub Pages

If your domain is registered or managed in Wix, you can keep it there and point it at the GitHub Pages site.

### 1. GitHub: turn on custom domain

1. In your GitHub repo go to **Settings → Pages**.
2. Under **Custom domain**, type your domain (e.g. `andyplestergolf.com` or `www.andyplestergolf.com`) and click **Save**.
3. If GitHub shows a **DNS check** warning, that’s normal until you finish the Wix DNS step below.

### 2. Wix: point the domain to GitHub

In Wix you need to change the domain’s DNS so it points to GitHub instead of Wix.

- Go to **Wix Dashboard → Domains → Your domain → Manage** (or **Domain settings**).
- Find **DNS settings** or **Manage DNS records** (you may need to choose “Advanced” or “Use another host” so you can edit DNS).
- Add these records (replace `YOUR-GITHUB-USERNAME` with your actual GitHub username):

**If you want people to use the main domain (e.g. andyplestergolf.com):**

| Type | Name / Host | Value / Points to |
|------|-------------|-------------------|
| **A**  | `@` (or leave blank) | `185.199.108.153` |
| **A**  | `@` | `185.199.109.153` |
| **A**  | `@` | `185.199.110.153` |
| **A**  | `@` | `185.199.111.153` |
| **CNAME** | `www` | `YOUR-GITHUB-USERNAME.github.io` |

So you add four A records for the root and one CNAME for `www`. Remove or stop using any old A/CNAME records that pointed the domain to Wix.

**If you only want www (e.g. www.andyplestergolf.com):**

| Type   | Name / Host | Value / Points to                |
|--------|-------------|-----------------------------------|
| **CNAME** | `www`       | `YOUR-GITHUB-USERNAME.github.io` |

- Save the DNS changes. It can take from a few minutes up to 24–48 hours to apply.

### 3. GitHub: enforce HTTPS (after DNS is working)

Once the domain loads your GitHub Pages site:

1. Back in **Settings → Pages**, under **Custom domain**, tick **Enforce HTTPS**.
2. Save.

### Notes

- **Repo name:** If the repo is `YOUR-GITHUB-USERNAME.github.io`, GitHub will serve the site at the root of that domain. If the repo has another name (e.g. `andyplestergolf`), the site will be at `YOUR-GITHUB-USERNAME.github.io/andyplestergolf/` unless you use a custom domain — with a custom domain it will still work at your Wix domain.
- **Wix and the site:** After this, the domain will show the GitHub Pages site, not a Wix site. You can keep the domain in Wix for renewals and just use it for DNS pointing to GitHub.
- If Wix doesn’t let you edit A/CNAME records (some plans don’t), you may need to transfer the domain to another registrar (e.g. Cloudflare, Namecheap, Google Domains) or use Wix’s “point domain to external site” if they offer it.

## Hero video

- **No audio:** the hero video is muted (required for autoplay).
- **Long-form:** use a full-length video from [YouTube @andyplestergolf](https://www.youtube.com/@andyplestergolf), not a Short. In `index.html`, replace the video ID in the hero iframe `src` (currently `8Sn52prImzo`). Use the ID from any video URL: `youtube.com/watch?v=VIDEO_ID`.
- The video is slightly transparent with a gradient and a Brum Eats–style squares grid overlay.

## Logo

The footer uses your existing image `WhatsApp Image 2026-03-03 at 5.40.31 PM (1).jpeg`. Optional: rename it to `logo.jpeg` and update the footer `img` `src` in `index.html` to `logo.jpeg` for a shorter URL.

## Links

- **Free drills (lead magnet):** https://subscribepage.io/Af6nkB  
- **YouTube:** https://www.youtube.com/@andyplestergolf  
- **Instagram:** https://www.instagram.com/andyplestergolf/  
- **Skillest:** https://skillest.com/@andyplester  
- **Facebook:** https://www.facebook.com/andyplestergolf/

No build step; just HTML, CSS, and a small JS file. Safe to use with GitHub Pages (no Jekyll required).
