## Development

```bash
npm install
npm run dev
```

## Deployment on cPanel (Node.js App)

This project is configured to deploy with GitHub Actions on a dedicated `deploy` branch.
The server no longer needs to run `next build` on cPanel.

### What was added

- `server.js`: production HTTP server compatible with cPanel ports.
- `npm start`: now runs `node server.js` in production mode.
- `next.config.ts`: `output: "standalone"` for production bundle output.
- `.github/workflows/deploy.yml`: builds from `main` and publishes runtime files to `deploy`.

### GitHub flow

1. Push code to `main`.
2. GitHub Action builds the app.
3. Built files are pushed automatically to `deploy`.

### cPanel setup steps

1. In cPanel, open **Setup Node.js App**.
2. Create the app with:
   - **Application mode**: `Production`
   - **Startup file**: `server.js`
   - **Node.js version**: `20+` (recommended)
3. Point your Git deployment to branch `deploy`.
4. In the app terminal (or SSH), run once (or after dependency changes):

```bash
npm install
```

5. Click **Restart App** in cPanel after each deployment.

### Notes

- cPanel injects `PORT`, and `server.js` listens automatically on it.
- If you use SMTP (nodemailer), configure your env vars in cPanel before restarting.
- Build memory pressure now happens on GitHub Actions, not on your cPanel server.
