import { capabilities, principles, timeline, work } from "../content";

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Home() {
  return (
    <main>
      <nav className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f6f5f1]/85 backdrop-blur-md">
        <div className="container-page flex h-20 items-center justify-between">
          <a href="#home" className="font-semibold tracking-[-.04em]">ASADHAYE</a>
          <div className="hidden gap-7 text-[12px] font-medium uppercase tracking-[.12em] md:flex">
            <a href="#work" className="hover:opacity-50">Work</a><a href="#journey" className="hover:opacity-50">About</a><a href="#building" className="hover:opacity-50">Building</a><a href="#thinking" className="hover:opacity-50">Thinking</a><a href="#contact" className="hover:opacity-50">Contact</a>
          </div>
          <a href="#contact" className="text-[12px] uppercase tracking-[.12em] md:hidden">Menu</a>
        </div>
      </nav>

      <section id="home" className="grid-lines flex min-h-[92vh] items-end pt-28 pb-16 md:min-h-screen md:pb-20">
        <div className="container-page w-full">
          <div className="eyebrow mb-8 reveal">Muhammad Asad Haye</div>
          <h1 className="display max-w-[1100px] reveal">Digital Growth Strategist <span className="serif">&</span><br className="hidden md:block" /> Product Builder.</h1>
          <div className="mt-10 grid gap-8 md:grid-cols-12">
            <p className="max-w-xl text-[18px] leading-8 text-[#5f5d58] md:col-span-6 md:text-[21px]">I've spent nearly two decades working across people, business, marketing, commerce and technology—building, teaching, operating and growing along the way.</p>
            <div className="flex items-end gap-6 text-sm md:col-span-6 md:justify-end"><a className="border-b border-black pb-1" href="#work">Explore my work <Arrow /></a><a className="border-b border-black/25 pb-1 text-black/60" href="#contact">Let's talk <Arrow /></a></div>
          </div>
          <div className="mt-24 flex justify-between border-t border-black/10 pt-4 text-[10px] uppercase tracking-[.16em] text-[#77746e]"><span>Marketing · Commerce · Technology · AI</span><span>Pakistan · Working globally</span></div>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="eyebrow md:col-span-3">01 / Introduction</div>
          <div className="md:col-span-8"><h2 className="text-4xl font-medium leading-[1.03] tracking-[-.05em] md:text-7xl">My career didn't follow a <span className="serif">straight line.</span></h2><p className="mt-8 max-w-2xl text-lg leading-8 text-[#66645f]">It moved through community development, operations, sales, research, entrepreneurship, marketing and e-commerce before arriving at where I am today: building at the intersection of business, technology and AI.</p><p className="mt-5 max-w-2xl text-lg leading-8 text-[#66645f]">Each chapter taught me something different about people, systems and how businesses work. Together, they shaped the way I approach digital growth and product development today.</p></div>
        </div>
      </section>

      <section id="journey" className="section bg-[#111] text-[#f6f5f1]">
        <div className="container-page"><div className="eyebrow text-white/45">02 / How I got here</div><h2 className="mt-6 max-w-3xl text-5xl font-medium leading-none tracking-[-.055em] md:text-8xl">Almost two decades.<br /><span className="serif">Many disciplines.</span></h2><div className="mt-20">{timeline.map((item, i) => <div key={item.period + item.title} className="grid gap-4 border-t border-white/15 py-8 md:grid-cols-12"><div className="text-sm text-white/45 md:col-span-2">{item.period}</div><h3 className="text-2xl tracking-[-.03em] md:col-span-3">{item.title}</h3><p className="max-w-2xl leading-7 text-white/55 md:col-span-6">{item.text}</p><div className="text-right text-white/20 md:col-span-1">{String(i + 1).padStart(2, "0")}</div></div>)}</div></div>
      </section>

      <section className="section">
        <div className="container-page"><div className="eyebrow">03 / Everything connects</div><div className="mt-8 grid gap-12 md:grid-cols-12"><h2 className="text-5xl font-medium leading-none tracking-[-.05em] md:col-span-7 md:text-8xl">People → Systems → Business → <span className="serif">Technology.</span></h2><div className="md:col-span-4 md:col-start-9 md:pt-10"><p className="text-lg leading-8 text-[#66645f]">Every chapter added another layer. Community taught me people. Operations taught me systems. Commerce taught me business. Technology gives me leverage. AI is the next layer.</p></div></div></div>
      </section>

      <section id="work" className="section border-t border-black/10">
        <div className="container-page"><div className="flex items-end justify-between"><div><div className="eyebrow">04 / Work</div><h2 className="mt-5 text-5xl font-medium tracking-[-.055em] md:text-7xl">Built for <span className="serif">businesses.</span></h2></div><span className="hidden text-xs text-black/40 md:block">Selected work / 2011—now</span></div><div className="mt-16">{work.map((project) => <article key={project.title} className="group grid gap-6 border-t border-black/10 py-8 md:grid-cols-12 md:items-start"><div className="text-xs text-black/35 md:col-span-1">{project.number}</div><div className="md:col-span-5"><h3 className="text-3xl font-medium tracking-[-.04em] group-hover:translate-x-1 transition-transform">{project.title} <Arrow /></h3><div className="mt-3 text-xs uppercase tracking-[.12em] text-black/45">{project.type}</div></div><p className="max-w-lg leading-7 text-[#66645f] md:col-span-5">{project.description}</p></article>)}</div></div>
      </section>

      <section className="section bg-[#e9e7e0]">
        <div className="container-page"><div className="eyebrow">05 / Built with brands</div><h2 className="mt-6 max-w-3xl text-5xl font-medium tracking-[-.055em] md:text-7xl">A decade of <span className="serif">commerce.</span></h2><p className="mt-7 max-w-2xl text-lg leading-8 text-[#66645f]">From fashion and retail to digital commerce, these businesses form the practical foundation behind my growth and technology work.</p><div className="mt-16 grid grid-cols-2 border-l border-t border-black/10 sm:grid-cols-3">{["Saleem Fabrics","Tradition Stores","Ghani Cloth House","Roop Singhar","Heer Pret","The Dressmaker Studio"].map((brand) => <div key={brand} className="flex min-h-32 items-center border-b border-r border-black/10 p-6 text-lg font-medium tracking-[-.03em]">{brand}</div>)}</div></div>
      </section>

      <section className="section bg-[#111] text-white">
        <div className="container-page grid gap-12 md:grid-cols-12"><div className="eyebrow text-white/45 md:col-span-3">06 / Venture</div><div className="md:col-span-8"><div className="text-xs uppercase tracking-[.15em] text-white/40">Shahana Collection</div><h2 className="mt-5 text-6xl font-medium leading-none tracking-[-.06em] md:text-9xl">From building commerce for others to building <span className="serif">my own.</span></h2><p className="mt-9 max-w-2xl text-lg leading-8 text-white/55">Shahana Collection is my own experiment in building international digital commerce—bringing together Pakistani fashion, premium positioning, e-commerce, technology and cross-border growth.</p><a className="mt-9 inline-block border-b border-white pb-1" href="https://shahanacollection.pk" target="_blank" rel="noreferrer">Explore the venture <Arrow /></a></div></div>
      </section>

      <section id="building" className="section">
        <div className="container-page"><div className="eyebrow">07 / Building what's next</div><h2 className="mt-6 max-w-4xl text-5xl font-medium tracking-[-.055em] md:text-8xl">What happens when marketing, commerce and technology meet <span className="serif">AI?</span></h2><div className="mt-14 grid gap-0 border-t border-black/10 md:grid-cols-3">{[["AI","Practical AI applications, LLM products and automation."],["PRODUCT","SaaS, web applications and digital product concepts."],["TECHNOLOGY","Modern full-stack development and systems thinking."]].map(([title,text]) => <div key={title} className="border-b border-black/10 py-8 md:border-r md:px-8 md:first:pl-0"><div className="text-xs uppercase tracking-[.15em] text-black/40">{title}</div><p className="mt-5 text-xl leading-8">{text}</p></div>)}</div></div>
      </section>

      <section className="section border-t border-black/10">
        <div className="container-page"><div className="eyebrow">08 / Capabilities</div><h2 className="mt-6 max-w-3xl text-5xl font-medium tracking-[-.055em] md:text-7xl">Different disciplines. <span className="serif">One operating system.</span></h2><div className="mt-16">{capabilities.map((cap, i) => <div key={cap.title} className="grid gap-4 border-t border-black/10 py-7 md:grid-cols-12"><span className="text-xs text-black/30 md:col-span-1">0{i + 1}</span><h3 className="text-2xl md:col-span-3">{cap.title}</h3><p className="max-w-3xl leading-7 text-[#66645f] md:col-span-7">{cap.items.join(" · ")}</p></div>)}</div></div>
      </section>

      <section id="thinking" className="section bg-[#315cff] text-white">
        <div className="container-page"><div className="eyebrow text-white/55">09 / What the journey taught me</div><h2 className="mt-6 text-5xl font-medium tracking-[-.055em] md:text-7xl">The lessons that <span className="serif">compound.</span></h2><div className="mt-14 grid gap-0 md:grid-cols-2">{principles.map(([title,text]) => <div key={title} className="border-t border-white/20 py-7 md:pr-12"><h3 className="text-2xl">{title}</h3><p className="mt-2 text-white/65">{text}</p></div>)}</div></div>
      </section>

      <section id="contact" className="section bg-[#111] text-white">
        <div className="container-page"><div className="eyebrow text-white/40">10 / Contact</div><h2 className="mt-7 max-w-5xl text-6xl font-medium leading-[.94] tracking-[-.065em] md:text-9xl">Have something worth <span className="serif">building?</span></h2><p className="mt-9 max-w-xl text-lg leading-8 text-white/55">I'm interested in ambitious ideas, challenging problems and digital businesses with room to grow.</p><a className="mt-10 inline-block border-b border-white pb-2 text-lg" href="mailto:hello@asadhaye.com">Start a conversation <Arrow /></a><div className="mt-28 flex flex-col gap-4 border-t border-white/15 pt-5 text-xs uppercase tracking-[.14em] text-white/45 md:flex-row md:justify-between"><span>ASADHAYE.COM</span><span>Pakistan · Working globally</span><span>© 2026 Muhammad Asad Haye</span></div></div>
      </section>
    </main>
  );
}
