import React from "react";

export const metadata = {
  title: "Project Bin | Terms & Conditions",
};

const Terms = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-center my-5 font-extrabold text-[2.5rem] underline">
        Terms & Conditions
      </h1>

      <p className="text-lg">
        Welcome to <strong>Project Bin</strong>! By accessing or using our
        platform, you agree to comply with and be bound by the following terms
        and conditions. Please read them carefully before using our services.
      </p>

      {/* 1. Acceptance of Terms */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">1. Acceptance of Terms</h2>
        <p className="text-lg">
          By accessing or using <strong>Project Bin</strong>, you acknowledge
          that you have read, understood, and agreed to be bound by these Terms
          and Conditions. If you do not agree with any part of these terms, you
          must not use our platform.
        </p>
      </section>

      {/* 2. Use of the Platform */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">2. Use of the Platform</h2>
        <p className="text-lg">
          Project Bin is designed to share and explore project ideas related to
          **React.js, Next.js, Node.js**, and other technologies. You agree to
          use the platform responsibly and not engage in any activities that
          violate these terms, including:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>Posting harmful, misleading, or offensive content.</li>
          <li>Plagiarizing or submitting content that you do not own.</li>
          <li>Using automated bots or scripts to scrape data.</li>
          <li>Engaging in any form of harassment or abusive behavior.</li>
        </ul>
      </section>

      {/* 3. User-Generated Content */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">3. User-Generated Content</h2>
        <p className="text-lg">
          Users can submit project ideas and contribute content to the platform.
          By submitting content, you agree that:
        </p>
        <ul className="list-disc pl-5 text-lg">
          <li>You own or have the right to share the content.</li>
          <li>
            Project Bin has the right to display, modify, and share your
            content.
          </li>
          <li>You will not submit copyrighted or illegal content.</li>
        </ul>
      </section>

      {/* 4. Intellectual Property */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">4. Intellectual Property</h2>
        <p className="text-lg">
          All content on <strong>Project Bin</strong>, including text, graphics,
          logos, and design, is owned by Project Bin or its contributors. You
          may not use, modify, or distribute any content without proper
          authorization.
        </p>
      </section>

      {/* 5. Account Security */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">5. Account Security</h2>
        <p className="text-lg">
          If you create an account on Project Bin, you are responsible for
          maintaining the security of your account. You must not share your
          login credentials or use another user&apos;s account without
          permission.
        </p>
      </section>

      {/* 6. Disclaimer of Liability */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">6. Disclaimer of Liability</h2>
        <p className="text-lg">
          Project Bin is a platform for sharing project ideas and resources. We
          do not guarantee the accuracy, reliability, or legality of any
          user-generated content. By using the platform, you agree that we are
          not responsible for any loss or damage resulting from the use of
          content on our website.
        </p>
      </section>

      {/* 7. Termination of Access */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">7. Termination of Access</h2>
        <p className="text-lg">
          We reserve the right to suspend or terminate your access to Project
          Bin if you violate these Terms & Conditions or engage in activities
          that harm the platform or its users.
        </p>
      </section>

      {/* 8. Privacy Policy */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">8. Privacy Policy</h2>
        <p className="text-lg">
          Your privacy is important to us. Please refer to our Privacy Policy to
          understand how we collect, use, and protect your personal information.
        </p>
      </section>

      {/* 9. Changes to Terms */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">9. Changes to Terms</h2>
        <p className="text-lg">
          We may update these Terms & Conditions from time to time. Users will
          be notified of any significant changes, and continued use of the
          platform after modifications constitute acceptance of the new terms.
        </p>
      </section>

      {/* 10. Contact Information */}
      <section className="mb-8">
        <h2 className="my-4 text-xl font-bold">10. Contact Information</h2>
        <p className="text-lg">
          If you have any questions regarding these Terms & Conditions, feel
          free to contact us at <strong>surajjaiswal0963@gmail.com</strong>.
        </p>
      </section>

      {/* Closing Message */}
      <section className="mt-8 text-center">
        <p className="text-lg font-semibold">
          By using Project Bin, you agree to abide by these Terms & Conditions.
          Thank you for being a part of our developer community! 🚀
        </p>
      </section>
    </div>
  );
};

export default Terms;
