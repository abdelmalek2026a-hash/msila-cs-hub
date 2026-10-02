import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--bg)] p-6">
      <section className="w-full max-w-md rounded-[28px] border border-[var(--border)] bg-white p-7 text-center shadow-[0_18px_50px_rgba(16,38,56,.08)]">
        <p className="text-xs font-bold tracking-[0.2em] text-[var(--accent)]">404</p>
        <h1 className="mt-3 text-2xl font-bold text-[var(--primary)]">هذه الصفحة غير موجودة</h1>
        <p className="mt-2 text-sm leading-7 text-[var(--text-muted)]">
          تحقق من الرابط أو ارجع إلى مساحة الطالب.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
        >
          العودة للرئيسية
        </Link>
      </section>
    </main>
  );
}
