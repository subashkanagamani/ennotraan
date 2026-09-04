export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 top-[-10%] h-[46rem] w-[46rem] rounded-full bg-primary/15 blur-[110px] drift-slow" />
      <div className="absolute -right-52 top-[18%] h-[40rem] w-[40rem] rounded-full bg-leaf/15 blur-[120px] drift-slower" />
      <div className="absolute bottom-[-15%] left-[25%] h-[38rem] w-[38rem] rounded-full bg-gold/15 blur-[130px] drift-slow" />
      <div className="absolute inset-0 opacity-[0.35] [background-image:radial-gradient(oklch(0.271_0.032_268/0.12)_0.6px,transparent_0.6px)] [background-size:22px_22px]" />
    </div>
  );
}
