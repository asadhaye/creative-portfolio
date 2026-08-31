import { notFound } from "next/navigation";
import { work } from "../../../content";

export function generateStaticParams() { return work.map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = work.find((p) => p.slug === slug); return project ? { title: `${project.name} — Muhammad Asad Haye`, description: project.description } : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = work.find((p) => p.slug === slug); if (!project) notFound();
  return <main className="pt-32"><section className="container-page pb-20 md:pb-28"><p className="eyebrow">{project.category}</p><h1 className="display mt-7 max-w-5xl">{project.name}</h1><p className="lede mt-8 max-w-3xl">{project.description}</p><div className="mt-12 flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}</div></section><section className="container-page pb-32"><div className="project-placeholder aspect-[16/9]"><span>PROJECT VISUAL / ASSET SLOT</span></div><div className="mt-20 grid gap-12 md:grid-cols-[240px_1fr]"><p className="eyebrow">Context</p><div className="max-w-3xl"><h2 className="text-3xl tracking-[-.03em]">Real work, documented honestly.</h2><p className="mt-5 text-lg leading-8 text-black/60">This case-study framework is ready for verified project history, screenshots, outcomes and the exact scope of Asad's contribution. No unverified metrics or invented claims are inserted.</p></div></div></section></main>;
}
