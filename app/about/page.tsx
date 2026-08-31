export const metadata = { title: "About — Muhammad Asad Haye", description: "The career journey of Muhammad Asad Haye across marketing, commerce, technology and AI." };

const chapters = [
  ["Community", "Early work with Insan Foundation's Dove Day Peace Club, followed by continued connection with local NGOs including GODH Foundation and Iraj Education & Development Foundation."],
  ["Sales & international markets", "Around 2008, call-centre campaigns for the USA, UK and Canada developed an early grounding in communication, sales and international customers."],
  ["Operations & technology", "At eDrive Technologies, a control-room role grew into Shift In-Charge responsibility. At Tracking World, the next chapter was coordination with the CEO."],
  ["Research", "Worked with a JICA-linked mass survey on Lahore District mass transit, gaining experience in structured field research and large-scale coordination."],
  ["Entrepreneurship in the UAE", "Spent approximately a year in the UAE, venturing into a food cafeteria while working in hospitality marketing, selling HORECA memberships for five-star hotel chains."],
  ["Marketing", "Returned to Pakistan and pursued a Master's in Marketing at the Institute of Administrative Sciences, University of the Punjab."],
  ["Teaching", "While studying, was invited to train IELTS Reading and Writing students and later teach business subjects to B.Tech students. This became nearly four years as a visiting lecturer."],
  ["E-commerce", "Around 2011, built digital presence and automated POS and inventory operations at Roop Singhar, then spent the following decade at Saleem Fabrics and across multiple fashion and retail e-commerce projects."],
  ["Digital growth", "Expanded from building storefronts into multichannel marketing, CRM, analytics, lifecycle campaigns, social, email, advertising, SMS and conversion optimisation."],
  ["Technology & AI", "Today, the work increasingly crosses into software, product development, automation and AI—bringing commercial experience into the systems being built."],
];

export default function AboutPage() {
  return <main className="pt-32">
    <section className="container-page pb-28 md:pb-40">
      <p className="eyebrow">About / The long version</p>
      <h1 className="display mt-8 max-w-5xl">A non-linear career that kept adding another layer.</h1>
      <p className="lede mt-10 max-w-3xl">I've spent nearly two decades working across people, business, marketing, commerce and technology—building, teaching, operating and growing along the way.</p>
    </section>
    <section className="border-y border-black/10">
      <div className="container-page grid gap-14 py-20 md:grid-cols-[240px_1fr] md:py-28">
        <p className="eyebrow">The journey</p>
        <div>{chapters.map(([title, text], i) => <article key={title} className="grid gap-5 border-b border-black/10 py-8 first:pt-0 last:border-0 md:grid-cols-[180px_1fr]">
          <div className="text-sm font-medium uppercase tracking-[.08em] text-black/45">{String(i + 1).padStart(2, "0")}</div>
          <div><h2 className="text-2xl tracking-[-.03em] md:text-3xl">{title}</h2><p className="mt-4 max-w-2xl text-base leading-7 text-black/60 md:text-lg">{text}</p></div>
        </article>)}</div>
      </div>
    </section>
    <section className="container-page py-28 md:py-40">
      <p className="eyebrow">Where this leads</p>
      <h2 className="display mt-7 max-w-4xl">Understand the business. Build the experience. Measure the result. Improve the system. Build what's next.</h2>
    </section>
  </main>;
}
