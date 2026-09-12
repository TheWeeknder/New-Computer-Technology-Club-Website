import Image from "next/image";

const events = [
  "Industry Connections",
  "Networking Events",
  "Studying With Peers",
  "Speaker Events",
  "LAN Parties",
  "And more!",
];

export default function AwardEventsSection() {
  return (
    <section className="w-full px-6 py-16 sm:py-20 md:py-24 bg-[#f3f5f9]">
      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Image
          src="/club-of-the-year-award-pic.png"
          alt="Computer Technology Club award for Club of the Year"
          width={420}
          height={560}
          className="h-auto w-[14rem] object-contain sm:w-[16rem] md:w-[18rem] lg:w-[28rem] pb-10"
          priority
        />

        <div className="mt-7 max-w-5xl text-[#1a2d4a]">
          <h3 className="text-4xl font-bold md:text-5xl">
                Check out our events!
        </h3>

          <p className="mt-5 text-base leading-relaxed font-medium md:text-2xl pb-5">
            The Computer Technology Club holds a variety of events throughout
            the year as well as opportunities to just socialise with peers.
            Some of the many events we hold are:
          </p>

          <ul className="mx-auto mt-2 w-fit list-disc space-y-1 text-left text-base leading-relaxed font-medium md:text-2xl">
            {events.map((event) => (
                <li key={event}>{event}</li>
            ))}
            </ul>
        </div>
      </div>
    </section>
  );
}