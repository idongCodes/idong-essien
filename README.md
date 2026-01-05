# ⚡ Idong Essien | Digital Portfolio

![Project Status](https://img.shields.io/badge/Status-Live-success?style=for-the-badge)
![Framework](https://img.shields.io/badge/Next.js-16.1-black?style=for-the-badge&logo=next.js)
![Language](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Deploy](https://img.shields.io/badge/Deployed_on-Vercel-black?style=for-the-badge&logo=vercel)

> *"I've come to love using code + AI to bring ideas to life."*

## 📖 About Me
**Idongesit (Idong) Essien** is a first-generation Nigerian-American and a Software Developer based in Worcester, MA. 

My journey into tech is "semi-non-traditional," blending an undergraduate technical degree with self-driven mastery of full-stack development. I have experience collaborating within cross-functional teams and coaching others transitioning into technical careers.

**Beyond the Code:**
* 🏎️ Manual transmission enthusiast
* 🎮 Console gamer
* 🐕 Dog lover
* 🍕 Firm believer that **pineapples do NOT belong on pizza**.

---

## 🎯 The Vision: Why This Exists
In a world of generic LinkedIn profiles, I needed a platform that didn't just *tell* people what I can do, but *showed* them. This project serves two key purposes:

1.  **For Employers:** A demonstration of clean code, modern architecture (App Router), and production-grade deployment habits.
2.  **For Clients:** A storefront for my freelance services, proving I can deliver high-performance, responsive web solutions.

Ultimately, this codebase is about **Ownership** and **Credibility**. It transforms me from "someone who knows syntax" to "someone who ships products".

---

## 🛠️ Tech Stack & Tools
This project was "peer-programmed" with AI assistance (Google Gemini), focusing on a stack optimized for velocity and performance.

| Category | Technology | Why? |
| :--- | :--- | :--- |
| **Framework** | **Next.js 16 (App Router)** | For server-side rendering, SEO, and robust routing. |
| **Language** | **TypeScript** | For type safety and catching errors before they hit production. |
| **Styling** | **Tailwind CSS 4** | For "Mobile First" responsive design and rapid UI development. |
| **Deployment** | **Vercel** | For seamless CI/CD and edge network performance. |
| **Email** | **Nodemailer** | Custom SMTP integration for the contact form. |
| **Icons** | **React Icons** | Lightweight SVG icons (Lucide, FontAwesome, Si). |

---

## 🧠 Lessons Learned (The "Battle Scars")
Building this wasn't just about writing code; it was about solving problems.

### 1. The Trap of Scope Creep 📉
Initially, I over-engineered a complex **Admin Dashboard** with SMS authentication (Twilio) and a database (Prisma/PostgreSQL) just to edit text on the fly. I realized I was building features I didn't need.
* **The Pivot:** I applied the **YAGNI** (You Ain't Gonna Need It) principle and ripped out the admin route.
* **Result:** A faster, more secure, and easier-to-maintain static application.

### 2. "It Works on My Machine" 💻
My contact form and initial SMS tests worked perfectly locally but failed in production.
* **The Fix:** Learned the hard way that Vercel environments don't inherit local `.env` variables automatically. Manually configuring production secrets solved the issue.

### 3. Mobile UX is Hard 📱
The "Actions" dropdown on my dashboard was getting clipped on mobile screens.
* **The Fix:** Implemented adaptive positioning logic—anchoring menus to the *left* on mobile and the *right* on desktop to ensure visibility on all devices.

---

## 🚀 Getting Started locally

Want to poke around the code?

1.  **Clone the repo:**
    ```bash
    git clone [https://github.com/idongCodes/portfolio.git](https://github.com/idongCodes/portfolio.git)
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the dev server:**
    ```bash
    npm run dev
    ```

4.  Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

<p align="center">
  Built with 💻 and ☕ by <strong>@idongCodes</strong>
</p>