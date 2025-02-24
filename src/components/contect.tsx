/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import React, { useState } from "react";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      user_email: email,
      message: message,
      to_name: "Suraj Jaiswal",
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
      )
      .then(
        (response) => {
          toast({
            title: "Success",
            description: "Email sent successfully",
          });
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast({
            title: "Success",
            description: "Failed to send email.",
          });
          console.error(error);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="mb-2">
        <input
          type="email"
          name="mail"
          id="mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full form-control rounded-none"
          required
          placeholder="Your Email"
        />
      </div>

      <div className="mb-2">
        <textarea
          placeholder="Your Message:"
          name="message"
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full form-control rounded-none resize-none overflow-y-scroll scrollbar-hide"
          required
        />
      </div>
      <button
        type="submit"
        className="btn btn-dark rounded-none w-full"
        disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
};

export default ContactForm;
