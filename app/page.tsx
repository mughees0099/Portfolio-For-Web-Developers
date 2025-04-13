import Hero from "@/components/hero"
import About from "@/components/about"
import Technologies from "@/components/technologies"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Technologies />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
