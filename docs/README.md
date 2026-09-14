# PayPay prep tracker — deploy & install guide

The tracker is a PWA (a web page that installs like an app). Once it's on
GitHub Pages you get a home-screen icon, no browser chrome, offline access,
and progress that persists. Free, no card, nothing expires.

Same setup as the N3 tracker in `~/Developer/Belajar_jepang` — if you've
deployed that one, you already know every step.

**Total time: ~10 minutes, most of it waiting for GitHub.**

---

## What's in this folder

| File | What it is | Edit it? |
| --- | --- | --- |
| `index.html` | The tracker itself | **No — generated.** Edit `../paypay-plan.html` |
| `manifest.webmanifest` | Name, icon, colours for the installed app | Yes |
| `sw.js` | Service worker — makes it work offline | Only to bump `CACHE` |
| `icon-192.png` `icon-512.png` | Home-screen icons (Android, desktop) | Yes |
| `apple-touch-icon.png` | Home-screen icon (iPhone/iPad) | Yes |
| `.nojekyll` | Stops GitHub running Jekyll on these files | No |

---

## Step 0 — Test locally first (optional, 2 min)

```sh
cd docs
python3 -m http.server 8788 --bind 0.0.0.0
```

Find your Mac's address on the wifi:

```sh
ipconfig getifaddr en0
```

Open `http://<that-address>:8788/` on your phone — same wifi network.
(Port 8788 so it doesn't clash with the N3 tracker on 8787.)

**Expect this to work:** the page loads, checkboxes tick, progress bars move.
**Expect this NOT to work:** offline mode and Add to Home Screen. Service
workers require HTTPS. That starts working once you're on Pages.

---

## Step 1 — Create the repo on GitHub

1. Go to **https://github.com/new**
2. **Repository name:** `BE_Material`
   *Your URL becomes `https://axeln2399.github.io/BE_Material/`.*
3. **Private is recommended** — this reveals you are job hunting. Pages
   works on private repos, but note the *published site* is still public to
   anyone with the URL. If that matters, skip Pages and use Step 0 only.
4. **Do NOT** tick "Add a README", ".gitignore", or "license".
5. Click **Create repository**.

---

## Step 2 — Push the code

From the **project root** (`BE_Interview_Material/`, not `docs/`):

```sh
cd /Users/axel/Developer/BE_Interview_Material
git add .
git commit -m "PayPay interview tracker"
git branch -M main
git remote add origin https://github.com/axeln2399/BE_Material.git
git push -u origin main
```

The repo is already `git init`-ed. Use a Personal Access Token (or SSH) when
asked for a password — same as the `n3` repo.

---

## Step 3 — Turn on Pages

1. Repo → **Settings** → **Pages**
2. **Source:** `Deploy from a branch` · **Branch:** `main` · **Folder:** `/docs`
3. **Save**, then watch the **Actions** tab for `pages-build-deployment` (1–3 min).

URL: `https://axeln2399.github.io/BE_Material/`

---

## Step 4 — Install it on your phone

**iPhone:** open the URL in **Safari** → Share → **Add to Home Screen** → the
name shows as **PayPay Prep** → Add. You get a 面 icon.

**Android:** open in **Chrome** → ⋮ → **Install app**.

Open it once while online so it caches, then it works in airplane mode.

---

## Backing up your progress

Ticked weeks and questions live in the phone's local storage. That survives
reboots and closing the app — **not** a lost phone or deleting the app.

**Every week, on Sunday's log block:** open the tracker → **Export .md** → save it
over `paypay-progress.md` in this project.

---

## Updating the plan later

`docs/index.html` is generated. Never edit it directly.

```sh
# 1. Edit the real source
$EDITOR paypay-plan.html

# 2. Regenerate the app
node build-app.mjs

# 3. Bump the cache version so phones don't serve the old page
$EDITOR docs/sw.js          # change  var CACHE = "paypay-v1"  →  "paypay-v2"

# 4. Ship it
git add . && git commit -m "Update plan" && git push
```

**Step 3 is not optional.** Without it, the installed app keeps showing the old
plan. After pushing, the app updates on its **second** launch.

---

## Troubleshooting

| Symptom | Cause | Fix |
| --- | --- | --- |
| **404 at the Pages URL** | Build not done, or wrong folder | Actions tab green? Settings → Pages shows `main` + `/docs`? |
| **Old version after deploying** | Service worker cache | Bump `CACHE` in `sw.js`, push, relaunch twice |
| **No "Add to Home Screen"** | Not Safari on iOS | Open the URL in Safari specifically |
| **Ticks disappeared** | Different browser/storage | Home-screen app and Safari keep separate storage — always open from the icon |
| **Export does nothing on iPhone** | iOS blocks some downloads in standalone apps | Open the same URL in Safari tab and export there |
