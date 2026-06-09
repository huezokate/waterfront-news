import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base path for GitHub Pages project sites. In CI we derive it from the repo
// name (GITHUB_REPOSITORY="owner/repo") so the same code deploys correctly to
// any Pages repo (waterfront, waterfront-news, timelens, …); local dev uses '/'.
export default defineConfig(({ command }) => {
  const repo = process.env.GITHUB_REPOSITORY?.split('/')[1]
  return {
    base: command === 'build' ? `/${repo || 'waterfront'}/` : '/',
    plugins: [react()],
  }
})
