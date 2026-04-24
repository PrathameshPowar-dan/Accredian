# Accredian Enterprise - Landing Page Clone

A fully responsive, high-performance partial clone of the Accredian Enterprise landing page. Built as a technical assignment within a 48-hour deadline, focusing on modern web development practices, clean UI architecture, and robust component design.

**Live Demo:** [Insert Vercel Link Here]  
**Repository:** [Insert GitHub Link Here]

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons & Assets:** Lucide React, Custom SVGs
- **Deployment:** Vercel
- **Language:** TypeScript

---

## 🚀 Setup Instructions

To run this project locally on your machine:

1. **Clone the repository:**
   Open VSCODE Terminal
   git clone https://github.com/PrathameshPowar-dan/Accredian.git
   cd Accredian

2. **Install dependencies:**
    npm install

3. **Run the development server:**
    npm run dev

4. **Open the application:**
    Navigate to http://localhost:3000 in your browser.

---

## 🧠 Approach Taken

Given the tight deadline, my primary goal was to balance development speed with a high-quality, maintainable codebase.

1. I modularized the UI into distinct functional components within the `app/(home)/_components/` directory. This kept the main page.tsx clean and allowed for isolated styling and testing of sections like the Hero, TrackRecord, and Testimonials.

2. I utilized Tailwind CSS breakpoints to ensure the layout degrades gracefully from complex desktop grids to accessible mobile views.

3. To prevent Next.js hydration mismatches on complex interactive elements, I carefully managed component state and avoided relying strictly on generic window resize listeners.

4. I implemented a reusable `EnquiryModal` component connected to a Next.js API Route Handler (/api/contact/route.ts). This successfully handles state (loading, success, error) and simulates a real-world form submission.

---

## 🤖 AI Usage Explanation

As per the assignment requirements, AI tools were utilized to accelerate the development process. Here is a transparent breakdown of how they were applied:

1. Generating boilerplate structures for Next.js components and TypeScript interfaces.

2. Helping formulate complex CSS calculations (e.g., calculating w-[calc(50%-8px)] to perfectly center orphan items in grid layouts) and Repeatative Section Tasks.

3. Quickly writing extensive JSON arrays for the Course, FAQ, and Testimonials sections, saving hours of manual data entry.

4. Identifying a Next.js App Router specific routing issue (correcting routes.ts to route.ts for the API endpoint).

---

## 🔮 Improvements (With More Time)

If I had more time beyond the tight deadline, I would implement the following enhancements:

1. Swap the mock API route with a real PostgreSQL or MongoDB database connection to permanently store lead captures.

2. Introduce `framer-motion` for complex scroll-triggered animations and smoother page transitions.

3. Integrate an email service provider (like Resend or SendGrid) to immediately trigger personalized confirmation emails to users upon form submission, while simultaneously routing notifications to the internal team.

4. Integrate tools like PostHog or Vercel Web Analytics to monitor user engagement metrics, specifically tracking the drop-off rates and the conversion success of the various "Enquire Now" call-to-action buttons placed throughout the scroll journey.