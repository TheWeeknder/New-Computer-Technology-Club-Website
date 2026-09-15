import Image from "next/image";

export default function InvolvementSection() {
  return (
    <section
      aria-labelledby="involvement-heading"
      className="flex min-h-screen w-full flex-col bg-white px-6 py-10 sm:px-10 lg:px-16 pb-20"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-14">
        {/* How to get involved */}
        <div className="relative w-full max-w-2xl rounded-[2.5rem] rounded-bl-none bg-slate-300 px-7 py-8 text-slate-950 sm:px-10 sm:py-10 lg:ml-8">
          <h1
            id="involvement-heading"
            className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl"
          >
            How Do I Get Involved?
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-xl">
            Want to join the team? We are always looking for new executives,
            especially for next year. Apply by filling out the{" "}
            <a
              href="YOUR_GOOGLE_FORM_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-slate-700"
            >
              Google Form
            </a>{" "}
            and we will contact you soon.
          </p>

          <span
            aria-hidden="true"
            className="absolute -bottom-11 left-0 h-0 w-0 border-r-[6rem] border-t-[3rem] border-r-transparent border-t-slate-300"
          />
        </div>

        {/* Discord information */}
        <div className="relative w-full max-w-sm self-end rounded-[2.5rem] rounded-br-none bg-slate-300 px-6 py-8 text-slate-950 sm:px-10 sm:py-10 lg:mr-8">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl">
                Join our Discord!
              </h2>

              <a
                href="https://discord.gg/wug6AHgH7K"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 block break-all text-base underline underline-offset-4 hover:text-slate-700 sm:text-xl"
              >
                https://discord.gg/wug6AHgH7K
              </a>
            </div>

            <Image
            src="/discord-logo-transparent.png"
            alt="Discord"
            width={64}
            height={64}
            className="h-12 w-12 shrink-0 object-contain sm:h-16 sm:w-16"
            />
          </div>

          <span
            aria-hidden="true"
            className="absolute -bottom-9 right-0 h-0 w-0 border-l-[5rem] border-t-[3rem] border-l-transparent border-t-slate-300"
          />
        </div>

        <div className="relative w-full max-w-2xl rounded-[2.5rem] rounded-bl-none bg-slate-300 px-7 py-20 text-slate-950 sm:px-10 sm:py-10 lg:ml-8">
          <h1
            id="involvement-heading"
            className="font-serif text-4xl font-bold leading-[1.05] tracking-tight text-black sm:text-5xl"
          >
            Placeholder
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed sm:text-xl">
            Placeholder, Apply by filling out the{" "}
            <a
              href="YOUR_GOOGLE_FORM_URL"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-4 hover:text-slate-700"
            >
              Google Form
            </a>{" "}
            and we will contact you soon.
          </p>

          <span
            aria-hidden="true"
            className="absolute -bottom-11 left-0 h-0 w-0 border-r-[6rem] border-t-[3rem] border-r-transparent border-t-slate-300"
          />
        </div>
      </div>
    </section>
  );
}