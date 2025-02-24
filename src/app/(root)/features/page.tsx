import React from "react";

const Features = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-center my-5 font-extrabold text-[2.5rem] underline">
        Features of Project Bin
      </h1>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">1. Add New Project Ideas</h2>
        <p className="text-lg">
          One of the core features of Project Bin is the ability to add
          new project ideas. If you have a unique idea that others might find
          useful, you can submit it to the platform.
        </p>
        <br />
        <p className="text-lg">Each project idea includes:</p>
        <ul className="list-disc pl-5 text-lg">
          <li>
            <span className="font-semibold">Project Title:</span> A clear and
            concise name for the project.
          </li>
          <li>
            <span className="font-semibold">Description:</span> A short
            explanation of what the project does and why it’s useful.
          </li>
          <li>
            <span className="font-semibold">Tech Stack:</span> The technologies
            required to build the project (React.js, Next.js, Node.js, etc.).
          </li>
          <li>
            <span className="font-semibold">Difficulty Level:</span> Beginner,
            Intermediate, or Advanced.
          </li>
          <li>
            <span className="font-semibold">Additional Resources:</span> Any
            GitHub repositories, tutorials, or documentation links that can help
            others.
          </li>
        </ul>
        <p className="mt-4">
          By contributing ideas, you not only help others but also get feedback
          and suggestions from the community.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">2. Explore Project Ideas</h2>
        <p className="text-lg">
          Need inspiration for your next project? Project Bin provides a
          well-organized database of project ideas across various
          categories.
        </p>
        <br />
        <p className="text-lg">You can filter projects based on:</p>
        <ul className="list-disc pl-5 text-lg">
          <li>Technology (React.js, Next.js, Node.js, etc.)</li>
          <li>Difficulty Level (Beginner, Intermediate, Advanced)</li>
          <li>Trending & Popular Projects</li>
          <li>Recently Added Ideas</li>
        </ul>
        <p className="mt-4">
          Whether you are preparing for a coding interview, hackathon, or
          portfolio project, Project Bin makes it easy to find the perfect
          idea for your needs.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">3. Detailed Project Pages</h2>
        <p className="text-lg">
          Each project idea has a dedicated page with in-depth details,
          including:
        </p>
        <ul className="list-disc pl-5 text-lg mt-2">
          <li>Overview of the project</li>
          <li>Key features and challenges</li>
          <li>Suggested tech stack</li>
          <li>Step-by-step implementation guide</li>
          <li>Community discussions and feedback</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          4. Community Collaboration & Feedback
        </h2>
        <p className="text-lg">
          Project Bin is not just about ideas—it’s about collaboration!
        </p>
        <ul className="list-disc pl-5 text-lg mt-2">
          <li>
            Discuss projects: Each project page has a comment section
            where users can discuss ideas, share suggestions, and ask questions.
          </li>
          <li>
            Rate and Upvote Ideas: Users can upvote great project ideas
            to highlight the best ones.
          </li>
          <li>
            Get Expert Feedback: Experienced developers can provide insights
            on how to improve project ideas.
          </li>
          <li>
            Find Contributors: Want to build a project but need teammates?
            Post in the discussion section and find people willing to
            collaborate.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">5. Save & Bookmark Ideas</h2>
        <p className="text-lg">
          If you find an interesting project but aren’t ready to start,
          Project Bin allows you to save and bookmark ideas for later.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          6. Tech-Specific Project Categories
        </h2>
        <p className="text-lg">
          We organize projects into different categories based on technologies:
        </p>
        <ul className="list-disc pl-5 text-lg mt-2">
          <li>Frontend Projects (React.js, Next.js, Vue.js)</li>
          <li>Backend Projects (Node.js, Express.js, Django)</li>
          <li>Full-Stack Projects (MERN Stack, PERN Stack)</li>
          <li>Machine Learning & AI Projects</li>
          <li>Blockchain & Web3 Projects</li>
          <li>API-Based Projects</li>
          <li>Automation & Scripting Projects</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          7. Responsive & User-Friendly Interface
        </h2>
        <p className="text-lg">
          Project Bin is designed with a clean, modern, and
          mobile-friendly UI to ensure a seamless user experience. Whether
          you&apos;re browsing on a desktop or mobile device, the interface is
          intuitive and easy to navigate.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">8. Regularly Updated Content</h2>
        <p className="text-lg">
          Our platform is constantly updated with new project ideas and
          trends in the development world. We stay up to date with the latest
          frameworks and technologies, ensuring that developers always have
          access to the most relevant and in-demand projects.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">
          9. Open-Source & Community Driven
        </h2>
        <p className="text-lg">
          Project Bin is open-source, meaning that anyone can contribute by
          adding new project ideas or improving existing ones. Developers can
          also fork the repository, suggest improvements, or contribute to the
          platform&apos;s development.
        </p>
      </section>
    </div>
  );
};

export default Features;
