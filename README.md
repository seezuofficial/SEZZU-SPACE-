# SEZZU SPACE — Personal Portfolio

A dark-premium, mobile-first portfolio starter for Android and laptop. The public portfolio is the launch focus; login is not enabled yet. Includes Lavender, Midnight Blue, Pink Noir, Monochrome and Anime Glow theme buttons.

## Main files
- `index.html` — homepage, about/skills, sample projects, journal, gallery, music player and contact form
- `style.css` — responsive layout and visual design
- `script.js` — navigation, animations and contact form email draft
- `assets/` — add profile photo, gallery images and optional music

The starter also contains `login.html` and `dashboard.html` from the original package, but they are placeholders and are not linked from the public site. Do not publish private information there. They are not protected or secure.

## Personalize the site
1. Open `index.html` in a text/code editor.
2. Replace the sample project descriptions and journal notes with your real work.
3. Replace Instagram, GitHub and Telegram links with your real URLs.
4. Replace `your.email@example.com` in both `index.html` and `script.js` with the email address you want visitors to use.
5. Add your profile photo as `assets/profile.jpg`.
6. Open `script.js` and uncomment these lines near the bottom:
   ```js
   const avatar = document.querySelector("#avatar");
   avatar.innerHTML = '<img src="assets/profile.jpg" alt="Profile photo">';
   ```
7. Add an optional song as `assets/music.mp3`. The visitor must press play; autoplay is intentionally not used.
8. Add gallery images later by updating the `.gallery-one`, `.gallery-two`, and `.gallery-three` backgrounds in `style.css`.

## Free GitHub Pages hosting
1. Sign in at https://github.com/
2. Create a public repository named exactly `YOUR-USERNAME.github.io` (replace with your GitHub username).
3. Upload the contents of this folder into the repository root. `index.html` must be at the root, not inside another nested folder.
4. Open **Settings → Pages**.
5. Select **Deploy from a branch**, branch `main`, folder `/ (root)`, then Save.
6. Wait for deployment. Your site should be at `https://YOUR-USERNAME.github.io/`.

## Contact form
The current form opens the visitor's email app with a prepared draft; it does not send messages directly from the site. Change the destination email in `script.js` and the displayed email link in `index.html`. A hosted form service can be connected later.

## Privacy and security
GitHub Pages hosts static files. The original login/dashboard pages are not private and should not be used for confidential data. Since you selected portfolio-only for now, the public homepage is the main page. Real login can be added later with Firebase Authentication and protected data rules.

## Before publishing checklist
- [ ] Replace sample social links
- [ ] Replace contact email
- [ ] Replace sample project cards and journal entries
- [ ] Add profile photo when ready
- [ ] Check mobile layout
- [ ] Upload files and enable GitHub Pages


## Aesthetic themes
The homepage has a built-in theme switcher for Lavender Dream, Midnight Blue, Pink Noir, Monochrome and Anime Glow. These are front-end theme choices; no account or database is needed.
