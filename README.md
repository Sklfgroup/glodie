## Development

```bash
npm install
npm run dev
```

## Deployment on cPanel (Node.js App)

This project is configured with GitHub Actions on a dedicated `deploy` branch.
The workflow builds on GitHub, then pushes full source code and the generated `.next` build to `deploy`.

### What was added

- `server.js`: production HTTP server compatible with cPanel ports.
- `npm start`: now runs `node server.js` in production mode.
- `.github/workflows/deploy.yml`: builds from `main` and publishes source + `.next` to `deploy`.

### GitHub flow

1. Push code to `main`.
2. GitHub Action builds the app.
3. Full source code and `.next` output are pushed automatically to `deploy`.

### cPanel setup steps

1. In cPanel, open **Setup Node.js App**.
2. Create the app with:
   - **Application mode**: `Production`
   - **Startup file**: `server.js`
   - **Node.js version**: `20+` (recommended)
3. Point your Git deployment to branch `deploy`.
4. In the app terminal (or SSH), run after each deployment:

```bash
npm install
```

5. Click **Restart App** in cPanel after each deployment.

### Notes

- cPanel injects `PORT`, and `server.js` listens automatically on it.
- If you use SMTP (nodemailer), configure your env vars in cPanel before restarting.
- Build is done on GitHub Actions. cPanel only installs dependencies and starts the app.
