## Development

```bash
npm install
npm run dev
```

## Deployment on cPanel (Node.js App)

This project is now configured to run on cPanel using a Node.js application.

### What was added

- `server.js`: production HTTP server compatible with cPanel ports.
- `npm start`: now runs `node server.js` in production mode.

### cPanel setup steps

1. In cPanel, open **Setup Node.js App**.
2. Create the app with:
   - **Application mode**: `Production`
   - **Startup file**: `server.js`
   - **Node.js version**: `20+` (recommended)
3. In the app terminal (or SSH), run:

```bash
npm install
npm run build:cpanel
```

4. Click **Restart App** in cPanel.

### Notes

- cPanel injects `PORT`, and `server.js` listens automatically on it.
- If you use SMTP (nodemailer), configure your env vars in cPanel before restarting.
- If you hit CloudLinux memory limits during build, `build:cpanel` uses Webpack and a reduced Node heap to avoid OOM in many shared-hosting environments.
