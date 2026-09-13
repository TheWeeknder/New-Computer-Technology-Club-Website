export default function GoogleCalendar() {
  return (
    <section
      aria-labelledby="calendar-heading"
      className="w-full px-4 py-12 sm:px-6 lg:px-8 bg-[#1a2d4a]"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 text-center py-4">
          <h2
            id="calendar-heading"
            className="text-4xl font-bold md:text-5xl"
          >
            View our Upcoming Events! 📅
          </h2>
          <p className="mt-4 text-md text-[#f3f5f9]">
            Click on an event to view details or add it to your calendar.
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <iframe
            title="CTC Club Google Calendar"
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FEdmonton&showPrint=0&src=Y3RjLmV2ZW50cy5uYWl0QGdtYWlsLmNvbQ&color=%23039be5"
            style={{ border: "solid 1px #777" }}
            width="800"
            height="600"
            frameBorder="0"
            scrolling="no"
            className="h-[700px] w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}