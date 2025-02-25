import React from "react";

export const metadata = {
  title: "Project Bin | Tech Stack",
};

const TechStack = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-center my-5 font-extrabold  underline">
        Tech Stack 
      </h1>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">1. Frameworks & Libraries</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Next.js (15.1.7):</span> The framework
            for React that enables SSR (Server-Side Rendering), ISR (Incremental
            Static Regeneration), and API routes.
          </li>
          <li>
            <span className="font-bold">React (19.0.0):</span> The core
            JavaScript library for building UI components in a modular way.
          </li>
          <li>
            <span className="font-bold">React DOM (19.0.0):</span> Used for
            managing the rendering of React components in the DOM.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">2. Styling</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Tailwind CSS (4.0.0):</span> A
            utility-first CSS framework used for styling components efficiently.
          </li>
          <li>
            <span className="font-bold">Tailwind Merge (3.0.1):</span> Helps
            merge Tailwind classes dynamically without conflicts.
          </li>
          <li>
            <span className="font-bold">Tailwind Typography (0.5.16):</span>{" "}
            Provides better typography support for markdown and text-based
            content.
          </li>
          <li>
            <span className="font-bold">Bootstrap (5.3.3):</span> A CSS
            framework used for responsive layouts and UI components.
          </li>
          <li>
            <span className="font-bold">Styled Components (6.1.15):</span> A
            CSS-in-JS library for styling React components dynamically.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          3. State Management & Queries
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">React Redux (9.2.0):</span> Used for
            state management and global state handling.
          </li>
          <li>
            <span className="font-bold">TanStack React Query (5.66.6):</span>{" "}
            Handles server state and caching, making API calls efficient.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">4. Backend & Database</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Sanity (3.76.1):</span> A headless CMS
            used for managing content dynamically.
          </li>
          <li>
            <span className="font-bold">Next-Sanity (9.8.58):</span> A wrapper
            for Sanity that integrates it smoothly with Next.js.
          </li>
          <li>
            <span className="font-bold">Sanity Plugin Markdown (5.0.0):</span>{" "}
            Provides markdown support for content stored in Sanity.
          </li>
          <li>
            <span className="font-bold">Sanity Image URL (1.1.0):</span> Helps
            generate optimized image URLs from Sanity CMS.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">5. Authentication</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">NextAuth.js (5.0.0-beta.25):</span> A
            flexible authentication library for Next.js, supporting multiple
            providers like Google, GitHub, etc.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">6. UI & Icons</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Lucide React (0.475.0):</span> A modern
            and lightweight icon library for React.
          </li>
          <li>
            <span className="font-bold">Framer Motion (12.4.3):</span> A
            powerful animation library for React.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">7. Email & Loading</h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">emailjs-com (3.2.0):</span> A library
            used for sending emails directly from the frontend without needing a
            backend.
          </li>
          <li>
            <span className="font-bold">nprogress (0.2.0):</span> A lightweight
            progress bar used for page loading indicators.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          8. Error Handling & Monitoring
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Sentry (9.1.0):</span> A real-time error
            tracking and performance monitoring tool used for debugging and
            catching exceptions.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          9. Markdown & Content Editing
        </h2>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-bold">Markdown-It (14.1.0):</span> A fast
            markdown parser for handling markdown content.
          </li>
          <li>
            <span className="font-bold">UIW React MD Editor (4.0.5):</span> A
            markdown editor with live preview.
          </li>
          <li>
            <span className="font-bold">MD Editor V3 (5.2.3):</span> Another
            markdown editor with advanced features.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">Why This Tech Stack?</h2>
        <p className="text-lg">
          The technologies used in Project Bin were carefully selected to ensure
          performance, scalability, and developer experience. Whether it&apos;s
          Next.js for SSR, Sanity for CMS, or Tailwind CSS for styling, each
          tool plays a crucial role in making Project Bin a powerful platform.
        </p>
      </section>
    </div>
  );
};

export default TechStack;
