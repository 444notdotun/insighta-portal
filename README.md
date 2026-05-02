# insighta-portal

A React web portal for the [Insighta Labs+](https://insighta-labs.netlify.app) Intelligence Query Platform.

**Live:** https://insighta-labs.netlify.app
 
---

## Stack

- React + Vite
- Axios
- React Router
---

## Features

- GitHub OAuth 2.0 + PKCE authentication
- Role-based UI — ADMIN and ANALYST views
- Profile filtering by gender, age group, and country
- CSV export
- JWT + refresh token with auto-refresh on 401
---

## Running Locally

```bash
git clone https://github.com/444notdotun/insighta-portal.git
cd insighta-portal
npm install
npm run dev
```

Create a `.env` file:

```
VITE_API_URL=https://insighta-labs-183135031185.us-central1.run.app
```
 
---

## Auth Flow

1. User clicks "Continue with GitHub"
2. Browser generates PKCE `code_verifier` and `code_challenge`
3. Frontend POSTs to backend → receives GitHub OAuth URL
4. Browser redirects to GitHub for authorization
5. GitHub redirects to backend callback
6. Backend issues JWT + refresh token, redirects to `/callback` with tokens in URL params
7. Frontend stores tokens in localStorage, navigates to dashboard
---

## Backend

https://insighta-labs-183135031185.us-central1.run.app
 
---

## Author

Adedotun (Dotman) Adewole Stephen  
GitHub: [444notdotun](https://github.com/444notdotun)
