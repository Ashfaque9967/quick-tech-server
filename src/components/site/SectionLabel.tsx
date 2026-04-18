export function SectionLabel({ children }: { index?: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 text-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
      <span className="h-px w-8 bg-border-strong" aria-hidden />
      <span className="text-foreground">{children}</span>
    </div>
  );
}
