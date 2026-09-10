export default function EventsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold">Events</h1>
      <p className="mt-2 text-muted-foreground">
        Event listings will appear here (later connected to Google Calendar).
      </p>

      {/* Placeholder for future event cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-4">
          <h2 className="text-lg font-semibold">Sample Event</h2>
          <p className="text-sm text-muted-foreground">
            Date & time placeholder
          </p>
          <p className="mt-2 text-sm">
            Description placeholder – will be replaced with real event data.
          </p>
        </div>
      </div>
    </section>
  );
}