import GoogleCalendar from "@/components/Google-calendar";

export default function EventsSection() {
  return (
    <section
      aria-labelledby="events-heading"
      id="events"
      className="w-full bg-white px-6 py-16 sm:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-[0.85fr_1.65fr] lg:gap-20">
        {/* Left content */}
        <div className="max-w-md">
          <h1
            id="events-heading"
            className="font-serif text-5xl font-bold leading-[1.05] tracking-tight text-black sm:text-6xl"
          >
            Upcoming
            <br />
            Events &amp;
            <br />
            Workshops
          </h1>

          <div className="mt-16 space-y-8 text-xl leading-relaxed text-slate-800 sm:text-2xl">
            <p>
              We host a lot of fun, engaging, and educative events throughout
              the year for any student to attend, especially tech enthusiasts.
            </p>

            <p>
              You’re encouraged to attend as many events as you like and we
              promise that you won’t regret going to any!
            </p>
          </div>
        </div>

        {/* Right calendar */}
        <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <iframe
            title="CTC Club events calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FEdmonton&showPrint=0&src=Y3RjLmV2ZW50cy5uYWl0QGdtYWlsLmNvbQ&color=%23039be5"
            className="h-[600px] w-full border-0 sm:h-[700px] lg:h-[720px]"
            loading="lazy"
        />
        </div>
      </div>
    </section>
  );
}