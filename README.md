# 💸 Split AI

> A smarter way to split bills, settle expenses, and stay financially in sync with your friends and groups — in real time.
---
## 📌 Overview

**Split AI** is a full-stack Splitwise-style application that leverages modern web technologies to make shared expense tracking seamless, smart, and automated.

🔐 Built with secure authentication via [Clerk.dev](https://clerk.dev/)  
⚡ Real-time backend powered by [Convex](https://convex.dev/)  
🧠 Automated reminders, smart split logic & settlements using [Inngest](https://inngest.com/)  
✉️ Real-time email alerts via [Resend](https://resend.com/)
---
## 🧠 Key Features

- 🔐 Secure Sign-Up/Login with Clerk
- 💵 Add shared/group expenses with custom split options
- 🤝 Smart debt settlement suggestions
- 📈 Real-time updates for all users in a group
- 🕒 Inngest cron jobs to remind users of pending payments
- ✉️ Resend API for instant & scheduled email notifications
- 📊 Group dashboard with complete transaction history

---

## 🛠 Tech Stack

| Technology    | Purpose                                  |
|---------------|------------------------------------------|
| **React.js**  | Frontend framework                       |
| **Convex**    | Backend-as-a-Service (real-time DB, API) |
| **Clerk**     | Authentication and user sessions         |
| **Inngest**   | Scheduled workflows and reminders        |
| **Resend**    | Transactional email delivery             |
| **Tailwind CSS** | UI styling with utility-first approach |


---

## ⚙️ Getting Started

### 🔧 1. Clone the Repo

```bash
git clone https://github.com/Ashutoshgola/SplitAI.git
cd SplitAI
```

### 📦 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 🔑 3. Setup Environment Variables

Create a `.env` file with:

```env
CLERK_PUBLISHABLE_KEY=your_key
CLERK_SECRET_KEY=your_key
CONVEX_DEPLOY_KEY=your_key
CONVEX_URL=https://your-instance.convex.cloud
RESEND_API_KEY=your_key
INNGEST_EVENT_KEY=your_key
```

### 🧪 4. Run Locally

```bash
npm run dev
```
