import  Hero  from '@/components/Hero';
import { AboutSection } from "@/components/About-section";
import AwardSection from "@/components/award-section";
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
