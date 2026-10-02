export default function Loading() {
  return (
    <main className="min-h-screen bg-[var(--bg)] p-4 sm:p-6 lg:p-8" aria-busy="true">
      <div className="mx-auto max-w-[1440px]">
        <div className="h-16 animate-pulse rounded-[22px] border border-[var(--border)] bg-white" />
        <div className="grid gap-5 pt-5 lg:grid-cols-[250px_minmax(0,1fr)]">
          <div className="hidden h-[720px] animate-pulse rounded-[24px] border border-[var(--border)] bg-white lg:block" />
          <section className="space-y-5">
            <div className="h-36 animate-pulse rounded-[28px] border border-[var(--border)] bg-white" />
            <div className="grid gap-5 xl:grid-cols-[1.15fr_.85fr]">
              <div className="h-64 animate-pulse rounded-[24px] border border-[var(--border)] bg-white" />
              <div className="h-64 animate-pulse rounded-[24px] border border-[var(--border)] bg-white" />
            </div>
            <div className="h-52 animate-pulse rounded-[24px] border border-[var(--border)] bg-white" />
          </section>
        </div>
      </div>
    </main>
  );
}
