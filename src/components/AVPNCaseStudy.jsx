// src/components/AVPNCaseStudy.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const brand = {
  blue: "#0A1F44",
  coral: "#E53E3E",
  sand: "#E5DED2",
  charcoal: "#1E293B",
};

export default function AVPNCaseStudy() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".avpn-reveal", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <main ref={root} style={{ background: brand.charcoal, color: "white" }}>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-semibold avpn-reveal">
          West Asia — Visual Communication Portfolio (AVPN)
        </h1>
        <p className="mt-3 text-slate-300 avpn-reveal">
          Private link. This page hosts the carousel, animated visual, and
          short video prepared for the assignment.
        </p>

        {/* ---- PLACEHOLDER: drop your exported images / video here ---- */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <img className="rounded-lg avpn-reveal" src="/avpn/slide1.jpg" alt="Slide 1" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide2.jpg" alt="Slide 2" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide3.jpg" alt="Slide 3" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide4.jpg" alt="Slide 4" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide5.jpg" alt="Slide 5" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide6.jpg" alt="Slide 6" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide7.jpg" alt="Slide 7" />
          <img className="rounded-lg avpn-reveal" src="/avpn/slide8.jpg" alt="Slide 8" />
        </div>

        <div className="mt-12 avpn-reveal">
          <video
            src="/avpn/short-video.mp4"
            className="w-full rounded-lg"
            controls
            poster="/avpn/poster.jpg"
          />
        </div>
      </section>
    </main>
  );
}
