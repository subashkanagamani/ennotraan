export function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(var(--primary)_0.55px,transparent_0.55px)] [background-size:24px_24px]" />
    </div>
  );
}
