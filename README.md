# The O-Huffman Group

Clean Next.js site for The O-Huffman Group, LLC.

Run locally:

```bash
npm install
npm run dev
```

Deployment & Vercel
-------------------

I added two GitHub Actions to protect and deploy the project:

- `Prevent Large Files` — fails pushes/PRs that include any file > 100MB.
- `Deploy to Vercel` — template workflow that deploys on push to `main` using the Vercel Action (requires secrets).

To enable automatic deploys via GitHub Actions:

1. Create a Vercel project and connect it to this GitHub repo (or use the Vercel dashboard to import `ohuffman-site`).
2. In Vercel, create a Personal Token (Account Settings → Tokens).
3. In the GitHub repo, add these repository secrets: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`.
	- `VERCEL_ORG_ID` and `VERCEL_PROJECT_ID` are available in the Vercel project settings (or from the Vercel API).
4. Push to `main` — the workflow will deploy to Vercel automatically.

If you want, I can walk you through the Vercel import and where to find the IDs and token.
 
Local preview: run `npm install` and `npm run dev` then open http://localhost:3001

If you'd like, I can import the repo into Vercel for you and configure DNS records — you will need to add the Vercel secrets in the GitHub repo settings and update Namecheap DNS to point the domain to Vercel.
