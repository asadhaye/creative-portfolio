import Link from "next/link";
import { work } from "../../content";

export const metadata = { title: "Work — Muhammad Asad Haye", description: "Selected e-commerce, digital growth and technology work." };

export default function WorkPage() {
  return <main className="pt-32"><section className="container-page pb-20 md:pb-28"><p className="eyebrow">Work</p><h1 className="display mt-8 max-w-5xl">Built for businesses.</h1><p className="lede mt-8 max-w-3xl">A selection of commerce, digital presence and growth work across fashion, retail and e-commerce.</p></section><section className="container-page grid gap-5 pb-32 md:grid-cols-2 md:gap-8">{work.map((project, i) => <Link key={project.name} href={`/work/${project.slug}`} className={`group block ${i % 3 === 0 ? "md:col-span-2" : ""}`}><div className="project-placeholder aspect-[16/9] overflow-hidden"><span>{String(i + 1).padStart(2, "0")}</span></div><div className="mt-5 flex items-start justify-between gap-6"><div><p className="eyebrow">{project.category}</p><h2 className="mt-2 text-3xl tracking-[-.035em]">{project.name}</h2><p className="mt-2 max-w-xl text-black/55">{project.description}</p></div><span className="text-xl transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">↗</span></div></Link>)}</section></main>;
}
