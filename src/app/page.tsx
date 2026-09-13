import  Hero  from '@/components/Hero';
import  AboutSection from "@/components/AboutSection";
import AwardSection from "@/components/AwardSection";
import GoogleCalendar from "@/components/Google-calendar";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <AwardSection />
      <GoogleCalendar />
    </main>
  );
}
