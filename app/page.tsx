"use client";

import { useMemo, useState } from "react";

type Module = {
  title: string;
  code: string;
  progress: number;
  resources: number;
};

type News = {
  title: string;
  meta: string;
  tone: "academic" | "schedule" | "resource";
};

const quickActions = [
  { label: "جدولي", description: "حصصك القادمة", icon: "◫" },
  { label: "موادي", description: "الوحدات والسداسيات", icon: "▦" },
  { label: "الامتحانات", description: "البنك الأكاديمي", icon: "□" },
  { label: "المحفوظات", description: "ما حفظته لاحقًا", icon: "◇" },
];

const modules: Module[] = [
  { title: "Algorithmique 2", code: "S3 · L2", progress: 72, resources: 14 },
  { title: "Base de données", code: "S3 · L2", progress: 58, resources: 11 },
  { title: "Systèmes d'exploitation", code: "S3 · L2", progress: 43, resources: 9 },
];

const news: News[] = [
  { title: "مساحة الامتحانات جاهزة للتصفح", meta: "قسم الامتحانات · V1", tone: "academic" },
  { title: "التوقيت الشخصي سيكون مرتبطًا بالفوج", meta: "الجداول · قادم", tone: "schedule" },
  { title: "رفع الموارد يمر عبر مراجعة قبل النشر", meta: "المصادر · موثوقية", tone: "resource" },
];

export default function HomePage() {
  const [query, setQuery] = useState("");
  const filteredModules = useMemo(
    () =>
      modules.filter((item) =>
        `${item.title} ${item.code}`.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-[1320px] px-4 py-5 sm:px-6 lg:px-8">
        <header className="glass-line soft-shadow sticky top-4 z-20 rounded-[24px] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[var(--primary)] text-white shadow-lg shadow-slate-900/10">
              <span className="text-lg font-bold tracking-tight">CS</span>
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[var(--primary)]">M&apos;Sila CS Hub</p>
              <p className="hidden text-xs text-[var(--text-muted)] sm:block">Academic platform · independent</p>
            </div>
            <nav className="mr-auto hidden items-center gap-1 md:flex">
              {["استكشاف", "الموارد", "الامتحانات", "المشاريع", "البحث"].map((item) => (
                <button
                  key={item}
                  className="rounded-xl px-3 py-2 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-muted)] hover:text-[var(--text)]"
                >
                  {item}
                </button>
              ))}
            </nav>
            <button className="rounded-xl border border-[var(--border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--primary)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              تسجيل الدخول
            </button>
          </div>
        </header>

        <section className="grid gap-6 pb-10 pt-8 lg:grid-cols-[1.35fr_.65fr] lg:pt-10">
          <div className="rounded-[32px] bg-[var(--primary)] p-6 text-white shadow-[0_24px_70px_rgba(16,38,56,.16)] sm:p-9">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-slate-200">نسخة العرض الأولى</span>
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">بيانات تجريبية</span>
            </div>
            <div className="mt-8 max-w-2xl">
              <p className="text-sm font-semibold tracking-wide text-slate-300">السلام عليكم 👋</p>
              <h1 className="mt-2 text-3xl font-bold leading-tight sm:text-5xl">
                فضاء واحد لكل ما تحتاجه في الإعلام الآلي.
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                نرتب المواد، الموارد، الامتحانات والجدول حول الطالب بدل إجباره على البحث بين صفحات وروابط متفرقة.
              </p>
            </div>

            <div className="mt-7 rounded-2xl border border-white/10 bg-white/8 p-2">
              <div className="flex items-center gap-2 rounded-xl bg-white p-2 text-[var(--text)]">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--surface-muted)] text-sm text-[var(--accent)]">⌕</span>
                <input
                  aria-label="البحث في المنصة"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="ابحث عن مادة، امتحان، درس، مشروع..."
                  className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-slate-400"
                />
                <button className="rounded-xl bg-[var(--accent)] px-4 py-2.5 text-sm font-semibold text-white transition hover:brightness-110">
                  بحث
                </button>
              </div>
              <p className="px-3 pt-2 text-xs text-slate-400">V1 يبدأ ببحث نصي موثوق، ثم نضيف البحث الدلالي بعد استقرار البيانات.</p>
            </div>
          </div>

          <aside className="rounded-[32px] border border-[var(--border)] bg-white p-6 soft-shadow sm:p-7">
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--accent)]">STUDENT CONTEXT</p>
            <h2 className="mt-3 text-xl font-bold text-[var(--primary)]">ملفك الأكاديمي</h2>
            <p className="mt-2 text-sm leading-6 text-[var(--text-muted)]">
              عند تسجيل الدخول سيحفظ الموقع السياق الأكاديمي ليخصص الجداول والإعلانات والمحتوى.
            </p>

            <div className="mt-6 space-y-2">
              {[
                ["المستوى", "L2 · Licence"],
                ["التخصص", "Informatique"],
                ["السداسي", "S3"],
                ["المجموعة", "A3 · Demo"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between rounded-2xl bg-[var(--surface-muted)] px-4 py-3">
                  <span className="text-xs text-[var(--text-muted)]">{label}</span>
                  <span className="text-sm font-semibold text-[var(--primary)]">{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((action) => (
            <button
              key={action.label}
              className="group rounded-2xl border border-[var(--border)] bg-white p-4 text-right transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_14px_34px_rgba(16,38,56,.08)]"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-lg text-[var(--accent)]">{action.icon}</span>
              <span className="mt-4 block text-sm font-bold text-[var(--primary)]">{action.label}</span>
              <span className="mt-1 block text-xs text-[var(--text-muted)]">{action.description}</span>
            </button>
          ))}
        </section>

        <section className="grid gap-5 py-8 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-[28px] bg-white p-5 soft-shadow sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">UP NEXT</p>
                <h2 className="mt-2 text-xl font-bold text-[var(--primary)]">الحصة القادمة</h2>
              </div>
              <span className="rounded-full bg-[var(--green)] px-3 py-1 text-xs font-semibold text-[var(--success)]">Demo</span>
            </div>
            <div className="mt-5 rounded-2xl bg-[var(--primary)] p-5 text-white">
              <p className="text-xs text-slate-300">10:00 → 11:30 · TD · Salle 14</p>
              <h3 className="mt-2 text-2xl font-bold">Algorithmique 2</h3>
              <p className="mt-2 text-sm text-slate-300">ستتحدد هذه البطاقة تلقائيًا من الفوج المختار بعد ربط قاعدة البيانات.</p>
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-white p-5 sm:p-6">
            <div className="flex items-end justify-between gap-3">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">MY MODULES</p>
                <h2 className="mt-2 text-xl font-bold text-[var(--primary)]">موادي الحالية</h2>
              </div>
              <span className="text-xs text-[var(--text-muted)]">{filteredModules.length} نتائج</span>
            </div>
            <div className="mt-5 space-y-3">
              {filteredModules.length ? (
                filteredModules.map((item) => (
                  <div key={item.code + item.title} className="rounded-2xl border border-[var(--border)] p-4">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-bold text-[var(--primary)]">{item.title}</p>
                        <p className="mt-1 text-xs text-[var(--text-muted)]">{item.code} · {item.resources} موارد تجريبية</p>
                      </div>
                      <span className="text-sm font-bold text-[var(--accent)]">{item.progress}%</span>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--surface-muted)]">
                      <div className="h-full rounded-full bg-[var(--accent)]" style={{ width: `${item.progress}%` }} />
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-[var(--border)] p-6 text-center text-sm text-[var(--text-muted)]">
                  لا توجد مادة مطابقة لبحثك.
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="grid gap-5 pb-24 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-[28px] border border-[var(--border)] bg-white p-5 sm:p-6">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">WHAT&apos;S NEW</p>
                <h2 className="mt-2 text-xl font-bold text-[var(--primary)]">آخر المستجدات</h2>
              </div>
              <button className="text-xs font-semibold text-[var(--accent)]">عرض الكل</button>
            </div>
            <div className="mt-5 space-y-2">
              {news.map((item) => (
                <article key={item.title} className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-[var(--surface-muted)]">
                  <span className={`size-2 shrink-0 rounded-full ${item.tone === "academic" ? "bg-[var(--accent)]" : item.tone === "schedule" ? "bg-[var(--warning)]" : "bg-[var(--success)]"}`} />
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold text-[var(--primary)]">{item.title}</h3>
                    <p className="mt-1 text-xs text-[var(--text-muted)]">{item.meta}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[var(--border)] bg-[var(--accent-soft)] p-5 sm:p-6">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--accent)]">TRUST LAYER</p>
            <h2 className="mt-2 text-xl font-bold text-[var(--primary)]">المعلومة لها مصدر.</h2>
            <p className="mt-3 text-sm leading-7 text-[var(--text)]">
              كل مورد مستقبلي سيحمل حالة واضحة: رسمي، موثق، مساهمة مجتمعية أو غير موثوق. هذا الأساس ضروري للبحث والـAI لاحقًا.
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {["Official", "Verified", "Community", "Archived"].map((status) => (
                <span key={status} className="rounded-xl bg-white/80 px-3 py-2 text-center text-xs font-semibold text-[var(--primary)]">{status}</span>
              ))}
            </div>
          </div>
        </section>
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-30 rounded-2xl border border-[var(--border)] bg-white/95 p-2 shadow-[0_18px_45px_rgba(16,38,56,.16)] backdrop-blur md:hidden">
        <div className="grid grid-cols-4 gap-1">
          {["الرئيسية", "الموارد", "الجدول", "الحساب"].map((item, index) => (
            <button key={item} className={`rounded-xl px-2 py-2 text-[11px] font-semibold ${index === 0 ? "bg-[var(--primary)] text-white" : "text-[var(--text-muted)]"}`}>
              {item}
            </button>
          ))}
        </div>
      </nav>
    </main>
  );
}