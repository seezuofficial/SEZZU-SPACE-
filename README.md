# Season Space — Dark Premium Portfolio

A mobile-first personal portfolio starter built with plain HTML, CSS and JavaScript. It works on phones and laptops and can be hosted free on GitHub Pages.

## Files

- `index.html` — public portfolio: intro, about, skills, sample projects, journal, gallery, music player and contact form.
- `style.css` — responsive dark premium styling, gradients and animations.
- `script.js` — mobile menu, scroll reveal, year and email-draft contact form.
- `login.html` + `login.js` — login UI placeholder. It does **not** authenticate users yet.
- `dashboard.html` + `dashboard.js` — dashboard UI preview. It is **not private** until authentication and access protection are added.
- `assets/` — add your photo, gallery images and music here.

## 1. Personalise it

1. Open `index.html` in a code editor.
2. Replace `Season` and the sample biography with your own details.
3. Replace Instagram/GitHub/Telegram links with your real profile URLs.
4. Replace `your.email@example.com` in `index.html` and `script.js` with the email you want to receive messages at.
5. Add `assets/profile.jpg`. In `script.js`, uncomment the two profile-image lines.
6. Add your own project names, descriptions and links.
7. Add an MP3 file named `music.mp3` inside `assets/`. Use music you own or have permission to publish.
8. Add gallery photos in `assets/`, then edit the `.gallery-one`, `.gallery-two`, `.gallery-three` background styles in `style.css`.

## 2. Test on your device

- On a laptop: open `index.html` in a browser, or use VS Code with the Live Server extension.
- On Android: easiest beginner workflow is GitHub's website editor or an editor app, then preview via GitHub Pages after publishing.
- Check the menu and sections at mobile and desktop widths.

## 3. Free GitHub Pages hosting

1. Create or sign in to a GitHub account at https://github.com/
2. Create a **public** repository named exactly `YOUR-USERNAME.github.io` (replace with your GitHub username).
3. Upload the files and the `assets` folder to the repository root. Keep `index.html` at the root.
4. Open repository **Settings → Pages**.
5. Under build/deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
6. Wait for deployment. Your address will be `https://YOUR-USERNAME.github.io/`.
7. If it doesn't appear immediately, wait a few minutes and refresh the Pages settings.

Alternative: create any repository, then set Pages to deploy from `main` / root; the URL will include the repository name.

## 4. Important: real private login/dashboard

GitHub Pages only hosts static files. A hidden link or a page called `dashboard.html` is **not security**. Anyone who knows its URL can open it. Do not place private personal information in this starter dashboard.

For real login:
1. Create a project at https://console.firebase.google.com/
2. Add a Web App and copy the Firebase configuration.
3. In **Authentication → Sign-in method**, enable Email/Password.
4. Add your deployed GitHub Pages domain under **Authentication → Settings → Authorized domains** if required.
5. Integrate Firebase's modular Web SDK into the login page; use `createUserWithEmailAndPassword`, `signInWithEmailAndPassword` and `signOut`.
6. On `dashboard.html`, check `onAuthStateChanged` and redirect unauthenticated visitors to `login.html`.
7. If saving user data in Firestore or Realtime Database, set strict security rules so each user can access only their own records. Never use open rules in production.
8. Test logged-out access in a private/incognito browser.

This starter deliberately leaves real authentication unconnected rather than storing passwords insecurely. The dashboard preview uses local browser storage only and is not an account system.

## 5. Contact form limitation

The sample contact form opens the visitor's email app with a prepared draft. It does not send a message directly from the website. For a proper hosted form, use a reputable form endpoint/service and check its free-tier limits and privacy policy.

## 6. Music and privacy

- The visitor must press play; browsers usually block autoplay.
- Use music and photos you have the right to publish.
- Avoid publishing your home address, personal phone number, passwords or private documents.

## Suggested future upgrades

- Firebase Authentication + Firestore
- Blog posts stored as Markdown files
- Project cards linking to live demos and GitHub repositories
- Contact form service
- SEO title/description and a custom domain later
