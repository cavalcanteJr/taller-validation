# Install dependeces

npm init -y
npm i -D @playwright/test supertest
npx playwright install chromium

# To run web

❯ npx playwright test automation/solution-demoqa.spec.js

# To run api

❯ node automation/solution-demoqa-api.js
