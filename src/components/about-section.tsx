import Image from "next/image";

const leftImages = [
  {
    src: "/cat-exterior.jpg",
    alt: "Modern architectural building beside a pool",
  },
  {
    src: "/main-campus.jpg",
    alt: "Creator working on a laptop at a desk",
  },
];

const rightImages = [
  {
    src: "/1586L_0732_050714.jpg",
    alt: "Team collaborating in a modern office",
  },
  {
    src: "/NAIT_MainCampus_2000x745.jpg",
    alt: "Developer working at a desktop computer",
  },
];

function AboutImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[2/1.5] overflow-hidden rounded-2xl ${className}`}
    >
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}

export function AboutSection() {
  return (
    <section className="w-full px-6 py-20 md:px-8 md:py-28 bg-[#1a2d4a]">
      <div className="mx-auto max-w-5xl">
        {/* <h2 className="mb-12 text-4xl font-medium tracking-tight text-foreground md:text-5xl">
          About Us
        </h2> */}

        <div className="flex flex-col gap-16 md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-20">
          <div className="flex flex-col gap-16">
            <div className="space-y-5">
              {leftImages.map((image) => (
                <AboutImage key={image.src} {...image} />
              ))}
            </div>

            <div className="space-y-7 text-muted-foreground text-shadow-white">
              <h3 className="text-4xl font-bold text-foreground md:text-5xl">
                Our Vision
              </h3>
              <p className="text-lg font-medium text-foreground md:text-xl text-shadow-white">
                We believe that everyone should be able to build their own
                solutions, regardless of their technical background.
              </p>
              {/* <p>
                From LAN parties to networking projects, collaborative study sessions, and industry meetings, we offer a spectrum of activities aimed at not just expanding technical knowledge but also nurturing an inclusive community.
              </p> */}
              <p className="text-lg font-medium text-foreground md:text-xl text-shadow-white">
                Want to join the team? We are always looking for new executives, especially for next year. Apply by filling out the Google Form and we will contact you soon.
              </p>
            </div>
          </div>

          <div className="order-first flex flex-col gap-16 md:order-none">
            <div className="space-y-7 text-muted-foreground">
              <h3 className="text-4xl font-bold text-foreground md:text-5xl text-shadow-white">
                About Us
              </h3>
              <p className="text-lg font-medium text-foreground md:text-xl text-shadow-white">
                The Computer Technology Club at NAIT is a dynamic community focused on fostering a vibrant environment for tech enthusiasts. Our club hosts an array of engaging events that cater to diverse interests within the tech sphere.
              </p>
              <p className="text-lg font-medium text-foreground md:text-xl text-shadow-white">
                From LAN parties to networking projects, collaborative study sessions, and industry meetings, we offer a spectrum of activities aimed at not just expanding technical knowledge but also nurturing an inclusive community.
              </p>
              {/* <p>
                We aim to provide a casual environment for tech enthusiasts to hang out and share in our common interest to help make our time at NAIT a fun and enjoyable experience. Come out to our weekly events! We look forward to seeing you there!
              </p> */}
              {/* <p>
                We believe that everyone should be able to build their own
                solutions, regardless of their technical background.
              </p> */}
            </div>

            <div className="hidden space-y-5 md:block md:translate-y-2">
              {rightImages.map((image) => (
                <AboutImage
                    key={image.src}
                    {...image}
                    className="md:translate-x-0"
                />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;