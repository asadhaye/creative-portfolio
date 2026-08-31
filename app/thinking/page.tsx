export const metadata = { title: "Thinking — Muhammad Asad Haye", description: "Notes on digital business, e-commerce, technology and AI." };

const notes = [
  ["01", "What happens when a marketer learns to code?", "The shift from recommending digital products to understanding how they are actually built."],
  ["02", "Why e-commerce is becoming a technology problem", "Commerce is no longer just a storefront. Operations, data, experience and systems increasingly determine growth."],
  ["03", "Building with AI when you're not an AI researcher", "Practical AI is often less about inventing models and more about finding useful places to apply them."],
];
export default function ThinkingPage() { return <main className="pt-32"><section className="container-page pb-20 md:pb-28"><p className="eyebrow">Thinking</p><h1 className="display mt-8 max-w-5xl">Thinking out loud.</h1><p className="lede mt-8 max-w-3xl">Notes on digital business, e-commerce, technology, AI and the lessons that come from building things.</p></section><section className="border-y border-black/10"><div className="container-page py-8">{notes.map(([n, title, desc]) => <article key={n} className="grid gap-5 border-b border-black/10 py-10 last:border-0 md:grid-cols-[80px_1fr_1fr] md:items-start"><span className="eyebrow">{n}</span><h2 className="text-3xl tracking-[-.035em]">{title}</h2><p className="text-base leading-7 text-black/55">{desc}</p></article>)}</div></section></main>; }
