import HeroSection from "@/components/heroSection";
import AboutSection from "@/components/aboutSection";
import HistorySection from "@/components/historySection";
export default function Home() {
  return (
    <main className={"mx-auto max-w-3xl px-4 sn:px-6 md:max-w-5xl"}>
        <HeroSection/>
        <AboutSection/>
        <HistorySection/>
    </main>
  )
}
