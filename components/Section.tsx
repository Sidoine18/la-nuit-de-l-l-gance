export default function Section({ title, intro, children }: { title: string; intro?: string; children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-12">
      <h1 className="font-serif text-4xl text-ivory">{title}</h1>
      {intro && <p className="mt-4 text-ivory/80">{intro}</p>}
      <div className="mt-8 space-y-4 text-ivory/80">{children}</div>
    </div>
  );
}
