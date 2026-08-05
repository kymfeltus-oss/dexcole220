# Dexter L. Coleman Jr. — Resume Landing Page

Production-ready, mobile-first resume landing page for **Dexter L. Coleman Jr., Music Director**, at [dexcole220.com](https://dexcole220.com).

The approved resume image is the centerpiece of the site. Contact actions, share, and save-contact tools support visitors on phone and desktop.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other commands:

```bash
npm run lint
npm run build
npm start
```

## Resume image location

Exact path used by the site:

```text
public/images/dexter-coleman-resume.png
```

### How to replace the resume image later

1. Export or obtain the approved full-resolution resume image (`.png` preferred).
2. Replace `public/images/dexter-coleman-resume.png` with the new file (same filename).
3. Do **not** crop, edit, overlay text on, or recompress the approved image.
4. If dimensions change, update `resumeImageWidth` and `resumeImageHeight` in `src/lib/contact.ts`.
5. Run `npm run build` to verify.

If the image is missing locally, the page shows a polished missing-image notice instead of crashing. A reminder file also lives at `public/images/PLACE-RESUME-IMAGE-HERE.txt`.

## How to edit contact links

All contact details are centralized in:

```text
src/lib/contact.ts
```

Edit phone, email, Facebook, Instagram, website, and related values there. Also update `public/dexter-l-coleman-jr.vcf` if contact download details change.

## GitHub publishing

```bash
git init
git add .
git commit -m "Build Dexter Coleman resume landing page"
git branch -M main
git remote add origin https://github.com/kymfeltus-oss/dexcole220.git
git push -u origin main
```

If the remote already exists, use:

```bash
git remote -v
git push -u origin main
```

Do not commit `node_modules`, `.next`, `.env*`, or `.vercel`.

## Vercel deployment

1. Go to [vercel.com](https://vercel.com) and import the GitHub repository `kymfeltus-oss/dexcole220`.
2. Framework preset: **Next.js** (auto-detected).
3. Leave build settings default (`npm run build`, output handled by Next.js).
4. No environment variables are required.
5. Deploy.

### Attach dexcole220.com in Vercel

1. Open the project in Vercel → **Settings** → **Domains**.
2. Add `dexcole220.com`.
3. Follow Vercel’s DNS instructions at your domain registrar (A/ALIAS/CNAME as shown).

### Set dexcole220.com as primary

1. In **Settings → Domains**, find `dexcole220.com`.
2. Use **Set as Primary** (or equivalent) so production traffic and canonical links prefer the apex domain.

### Redirect www.dexcole220.com to dexcole220.com

1. Add `www.dexcole220.com` as a domain on the same Vercel project.
2. Configure it to **redirect** to `dexcole220.com` (Vercel domain UI redirect option).
3. Confirm DNS for the `www` record matches Vercel’s guidance.

## Production verification checklist

- [ ] Homepage loads at https://dexcole220.com
- [ ] Resume image is fully visible, uncropped, and readable on mobile and desktop
- [ ] No horizontal scrolling on phones (320px+)
- [ ] Call opens the phone dialer
- [ ] Email opens the mail client
- [ ] Facebook and Instagram open in a new tab
- [ ] Share Resume works (native share or clipboard fallback)
- [ ] Save Contact downloads a valid `.vcf`
- [ ] Page title and meta description are correct
- [ ] Open Graph / Twitter preview shows the resume image
- [ ] https://www.dexcole220.com redirects to https://dexcole220.com
- [ ] 404 page matches branding
- [ ] `npm run lint` and `npm run build` pass locally
