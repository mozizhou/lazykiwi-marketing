# LazyKiwi Marketing

Official marketing site for [LazyKiwi](https://lazykiwi.ai).

## Routes

- `/` — Homepage
- `/pricing`, `/blog/*`, `/models/*`, `/effects/*`, `/templates/*`, `/tools/*`
- `/auth/callback` — OAuth callback
- `/video-generator`, `/image-generator` — redirect to workbench app

## Local development

```powershell
npm install
copy .env.local.example .env.local
npm run dev -- -p 3000
```

Requires workbench app on `http://localhost:3001` (`NEXT_PUBLIC_APP_URL`).

## Production

- Domain: `https://lazykiwi.ai`
- PM2: `lazykiwi-marketing` on port `3001`
