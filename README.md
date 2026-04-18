# Portfolio Website

A modern, responsive portfolio website showcasing my profile as a DevOps Engineer. Built with React, Vite, and Tailwind CSS to demonstrate my technical skills and hands-on experience.

Link to website: https://aayushmadan.github.io/portfolio-website/

## 🚀 Features

- **Sections**: Profile, Education, Technical Skills, Experience, Projects, and Contact
- **Contact Integration**: Functional contact form powered by EmailJS
- **Resume Download**: Easy access to downloadable resume

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- TailwindCSS

### Libraries & Tools
- Lucide React
- React Icons
- EmailJS

## 🔄 CI/CD Pipeline & Automated Deployment

This portfolio is deployed on **GitHub Pages** with a fully automated CI/CD pipeline using **GitHub Actions**.

### Deployment Overview
- **Hosting**: GitHub Pages
- **Automation**: GitHub Actions
- **Trigger**: Automatic deployment on every push to `main` branch
- **Live Site**: https://aayushmadan.github.io/portfolio-website/

### Automated Workflow
The `.github/workflows/deploy.yml` orchestrates a two-stage pipeline:

**Build Stage**
- Checkout repository code
- Setup Node.js environment (v22)
- Install dependencies via npm
- Compile React app with Vite
- Generate optimized production bundle
- Upload dist folder as GitHub Pages artifact

**Deployment Stage**
- Configure GitHub Pages environment
- Deploy artifact to GitHub Pages hosting
- Generate and output live URL

### Security & Configuration
- EmailJS credentials stored as GitHub Secrets
- Resume link managed as GitHub Variables
- Minimal permissions scope (read contents, write pages, id-token)

## �📋 Sections

- Profile
- Education
- Technical Skills
- Experience
- Projects
- Contact

**Aayush Madan**
- **Email**: aayush.madan4611@gmail.com
- **LinkedIn**: [http://www.linkedin.com/in/aayush-madan-878a68226](http://www.linkedin.com/in/aayush-madan-878a68226)