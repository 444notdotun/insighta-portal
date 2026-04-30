Insighta Portal
A React web portal for the Insighta Labs+ Intelligence Query Platform.
Live: https://insighta-labs.netlify.app

Stack
React, Vite, Axios, React Router

Features

GitHub OAuth 2.0 + PKCE authentication
Role-based UI — ADMIN and ANALYST
Profile filtering by gender, age group, and country
CSV export
JWT + refresh token with auto-refresh on 401


Running Locally
git clone https://github.com/444notdotun/insighta-portal.git
cd insighta-portal
npm install
npm run dev
Create a .env file:
Auth Flow

User clicks "Continue with GitHub"
Browser generates PKCE code_verifier and code_challenge
Redirects to backend → GitHub OAuth
GitHub redirects back to /callback
Frontend exchanges code + verifier for JWT + refresh token


Backend
https://insighta-labs-183135031185.us-central1.run.app
Author
Adedotun (Dotman) Adewole Stephen
GitHub: 444notdotun