"use client";

import { FormEvent } from "react";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const socialLinks = [
  { label: "Twitter", href: "https://twitter.com", icon: FaTwitter },
  { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  { label: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", icon: FaInstagram },
  { label: "Discord", href: "https://discord.com", icon: FaDiscord },
];

export default function ContactPage() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Replace this with your API request or form service integration.
    const formData = new FormData(event.currentTarget);
    console.log(Object.fromEntries(formData.entries()));
  }

  return (
    <main className="min-h-screen bg-white px-6 py-16 text-slate-950 sm:px-10 lg:px-16 lg:py-24">
      <section className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-slate-800 sm:text-6xl">
              Contact Us
            </h1>

            <p className="mt-16 max-w-xl text-2xl leading-[1.5] text-slate-900 sm:text-3xl">
              Got a suggestion, concern, or just want to chat? Feel free to
              reach out to us by the following means.
            </p>

            <div className="mt-10 space-y-8 text-xl leading-relaxed sm:text-2xl">
              <p>
                <a
                  href="mailto:yourclub@ualberta.ca"
                  className="underline decoration-1 underline-offset-4 transition hover:text-slate-600"
                >
                  ctc.events.nait@gmail.com
                </a>{" "}
                <span className="font-bold">(email for urgent concerns)</span>
              </p>

              <address className="not-italic">
                <p>W202, NAIT W-Centre</p>
                <p>Main Campus</p>
                <p>Edmonton, Alberta T5G 3A5</p>
              </address>
            </div>
          </div>

          <nav aria-label="Social media" className="mt-14 flex items-center gap-8">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="text-3xl transition hover:-translate-y-1 hover:text-slate-500"
              >
                <Icon aria-hidden="true" />
              </a>
            ))}
          </nav>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label htmlFor="firstName" className="mb-3 block text-2xl">
              First Name <span className="text-slate-500">(required)</span>
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              required
              autoComplete="given-name"
              className="h-16 w-full border-2 border-slate-950 bg-white px-5 text-2xl outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="mb-3 block text-2xl">
              Last Name <span className="text-slate-500">(required)</span>
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              required
              autoComplete="family-name"
              className="h-16 w-full border-2 border-slate-950 bg-white px-5 text-2xl outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-3 block text-2xl">
              Email <span className="text-slate-500">(required)</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="h-16 w-full border-2 border-slate-950 bg-white px-5 text-2xl outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-3 block text-2xl">
              Message <span className="text-slate-500">(required)</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={3}
              className="w-full resize-y border-2 border-slate-950 bg-white px-5 py-4 text-2xl outline-none transition focus:border-slate-500 focus:ring-2 focus:ring-slate-300"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#253754] px-12 py-5 text-2xl font-semibold text-white transition hover:bg-[#1b2940] focus:outline-none focus:ring-4 focus:ring-slate-300"
            >
              Send
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}