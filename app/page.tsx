"use client";

import { useMemo, useRef, useState } from "react";
import { Icon } from "@/components/icon";

type Module = {
  title: string;
  subtitle: string;
  progress: number;
  resources: number;
  accent: "blue" | "green" | "amber";
};

type ScheduleItem = {
  time: string;
  title: string;
  meta: string;
  active?: boolean;
};

const navigation = [
  { label: "الرئيسية", icon: "graduation" },
  { label: "استكشاف", icon: "search" },
  { label: "موادي", icon: "book" },
  { label: "الموارد", icon: "folder" },
  { label: "الامتحانات", icon: "file" },
  { label: "مشاريعي", icon: "bookmark" },
] as const;

const modules: Module[] = [
  { title: "Algorithmique 2", subtitle: "S3 · Licence 2 · Demo", progress: 72, resources: 14, accent: "blue" },
  { title: "Base de données", subtitle: "S3 · Licence 2 · Demo", progress: 58, resources: 11, accent: "green" },
  { title: "Systèmes d'exploitation", subtitle: "S3 · Licence 2 · Demo", progress: 43, resources: 9, accent: "amber" },
];

const schedule: ScheduleItem[] = [
  { time: "08:00", title: "Algorithmique 2", meta: "مثال تجريبي · TD · Salle 14", active: true },
  { time: "10:00", title: "Base de données", meta: "مثال تجريبي · Cours · Amphithéâtre B" },
  { time: "13:30", title: "Systèmes d'exploitation", meta: "مثال تجريبي · TP · Salle 3" },
];

const updates = [
  { label: "الامتحانات", title: "ستظهر الامتحانات هنا بعد إدخال المصادر المعتمدة.", age: "V1" },
  { label: "الجداول", title: "سيُبنى الجدول الشخصي من السياق الأكاديمي وفوج الطالب.", age: "V1" },
  { label: "الموارد", title: "كل مورد سيمر عبر المصدر والحالة والمراجعة قبل النشر.", age: "Trust" },
];

type QuickAction = {
  label: string;
  icon: "calendar" | "search";
  href?: string;
  action?: "focus-search";
};

const quickActions: readonly QuickAction[] = [
  { label: "افتح جدول الأسبوع", icon: "calendar", href: "#today-schedule" },
  { label: "ابحث في المواد", icon: "search", action: "focus-search" },
];

function SectionHeading({
  eyebrow,
  title,
  action,
  actionHref,
}: {
  eyebrow: string;
  title: string;
  action?: string;
  actionHref?: string;
}) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <p className="text-[10px] font-bold tracking-[0.22em] text-[var(--accent)]">{eyebrow}</p>
        <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[var(--primary)]">{title}</h2>
      </div>
      {action && actionHref ? (
        <a href={actionHref} className="text-xs font-semibold text-[var(--accent)] transition hover:opacity-70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          {action}
        </a>
      ) : action ? (
        <span className="text-xs font-semibold text-[var(--text-muted)]">{action}</span>
      ) : null}
    </div>
  );
}

export default function HomePage() {
  const [query, setQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const focusSearch = () => searchInputRef.current?.focus();

  const filteredModules = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return modules;

    return modules.filter((item) =>
      `${item.title} ${item.subtitle}`.toLowerCase().includes(normalized),
    );
  }, [query]);

  return (
    <main className="min-h-screen bg-[var(--bg)]">
      <div className="mx-auto max-w-[1440px] px-3 py-3 sm:px-5 lg:px-7">
        <header className="sticky top-3 z-30 rounded-[22px] border border-[var(--border)] bg-white/95 px-3 py-3 shadow-[0_12px_34px_rgba(16,38,56,.06)] backdrop-blur sm:px-4">
          <div className="flex items-center gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] text-white">
              <span className="text-xs font-black tracking-tight">CS</span>
            </div>

            <div className="hidden min-w-[150px] sm:block">
              <p className="text-sm font-bold tracking-tight text-[var(--primary)]">M&apos;Sila CS Hub</p>
              <p className="text-[10px] text-[var(--text-muted)]">Student academic workspace</p>
            </div>

            <div className="mx-auto hidden max-w-[540px] flex-1 md:block">
              <label className="flex h-11 items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3 transition focus-within:border-[var(--accent)] focus-within:bg-white">
                <Icon name="search" size={18} className="text-[var(--text-muted)]" />
                <input
                  ref={searchInputRef}
                  aria-label="البحث في المنصة"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="ابحث عن مادة، امتحان، درس أو مشروع..."
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                />
              </label>
            </div>

            <div className="mr-auto flex items-center gap-2">
              <div
                title="الإشعارات — ستتوفر بعد ربط الحساب"
                aria-hidden="true"
                className="hidden size-10 items-center justify-center rounded-xl border border-[var(--border)] text-[var(--text-muted)] sm:flex"
              >
                <Icon name="bell" size={18} />
              </div>
              <div
                title="حساب الطالب — ستتوفر بعد ربط تسجيل الدخول"
                className="flex items-center gap-2 rounded-xl border border-[var(--border)] bg-white px-3 py-2 text-right"
              >
                <span className="flex size-7 items-center justify-center rounded-full bg-[var(--accent-soft)] text-[10px] font-black text-[var(--accent)]">A</span>
                <span className="hidden text-xs font-semibold text-[var(--primary)] lg:block">حساب تجريبي</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex items-center gap-2 overflow-x-auto no-scrollbar md:hidden">
            <label className="flex min-w-[230px] flex-1 items-center gap-2 rounded-xl border border-[var(--border)] bg-[var(--bg)] px-3">
              <Icon name="search" size={16} className="text-[var(--text-muted)]" />
              <input
                aria-label="البحث في المنصة"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="ابحث في المنصة..."
                className="w-full bg-transparent py-2.5 text-xs outline-none"
              />
            </label>
          </div>
        </header>

        <div className="grid gap-5 pt-5 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="hidden lg:block">
            <div className="sticky top-[96px] rounded-[24px] border border-[var(--border)] bg-white p-3 shadow-[0_12px_34px_rgba(16,38,56,.05)]">
              <div className="rounded-[18px] bg-[var(--primary)] p-4 text-white">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[9px] font-semibold text-slate-300">DEMO CONTEXT</span>
                  <Icon name="spark" size={16} className="text-slate-300" />
                </div>
                <p className="mt-5 text-xs text-slate-300">السياق الأكاديمي — مثال</p>
                <p className="mt-1 text-base font-bold">L2 · Informatique</p>
                <p className="mt-1 text-[11px] text-slate-400">S3 · Groupe A3</p>
              </div>

              <nav className="mt-3 space-y-1" aria-label="التنقل الرئيسي">
                {navigation.map((item) => (
                  <div
                    key={item.label}
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-sm font-semibold ${
                      item.label === "الرئيسية"
                        ? "bg-[var(--accent-soft)] text-[var(--accent)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  >
                    <Icon name={item.icon} size={17} />
                    <span>{item.label}</span>
                    {item.label === "الرئيسية" ? (
                      <span className="mr-auto size-1.5 rounded-full bg-[var(--accent)]" />
                    ) : (
                      <span className="mr-auto rounded-full bg-[var(--bg)] px-2 py-0.5 text-[8px] font-bold text-[var(--text-muted)]">قريبًا</span>
                    )}
                  </div>
                ))}
              </nav>

              <div className="my-3 border-t border-[var(--border)]" />

              <a
                href="#today-schedule"
                className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-right text-sm font-semibold text-[var(--text-muted)] transition hover:bg-[var(--bg)] hover:text-[var(--primary)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                <Icon name="calendar" size={17} />
                الجدول الأسبوعي
              </a>

              <div className="mt-4 rounded-xl bg-[var(--bg)] px-3 py-3">
                <p className="text-[10px] font-semibold text-[var(--text-muted)]">حالة البيانات</p>
                <p className="mt-1 text-[11px] leading-5 text-[var(--text)]">هذه الشاشة تستخدم بيانات تجريبية فقط. لن نعرض بيانات أكاديمية غير موثقة على أنها حقيقية.</p>
              </div>
            </div>
          </aside>

          <section className="min-w-0">
            <div className="rounded-[28px] border border-[var(--border)] bg-white p-5 shadow-[0_16px_48px_rgba(16,38,56,.05)] sm:p-6">
              <div className="flex flex-col gap-5 xl:flex-row xl:items-end xl:justify-between">
                <div className="max-w-3xl">
                  <p className="text-xs font-bold tracking-[0.18em] text-[var(--accent)]">YOUR ACADEMIC WORKSPACE</p>
                  <h1 className="mt-2 text-2xl font-bold leading-tight tracking-tight text-[var(--primary)] sm:text-4xl">كل ما تحتاجه للدراسة، مرتب حولك.</h1>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--text-muted)]">منصة مستقلة تجمع المواد والموارد والامتحانات والجدول في تجربة واحدة. هذه نسخة واجهة أولية؛ البيانات الحقيقية ستأتي من مصادر موثوقة ومراجعة.</p>
                </div>

                <div className="grid grid-cols-3 gap-2 xl:min-w-[360px]">
                  {[
                    ["V1", "مرحلة الإطلاق"],
                    ["FTS", "بحث نصي"],
                    ["RLS", "حماية البيانات"],
                  ].map(([value, label]) => (
                    <div key={label} className="rounded-2xl border border-[var(--border)] bg-[var(--bg)] px-3 py-3 text-center">
                      <p className="text-lg font-black tracking-tight text-[var(--primary)]">{value}</p>
                      <p className="mt-1 text-[10px] text-[var(--text-muted)]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 py-5 xl:grid-cols-[1.15fr_.85fr]">
              <section>
                <SectionHeading eyebrow="TODAY · DEMO" title="جدول اليوم" action="الأسبوع كاملًا" actionHref="#today-schedule" />
                <div id="today-schedule" className="overflow-hidden rounded-[24px] border border-[var(--border)] bg-white">
                  {schedule.map((item, index) => (
                    <article
                      key={item.time}
                      className={`grid grid-cols-[68px_1fr_auto] items-center gap-3 px-4 py-4 sm:grid-cols-[72px_1fr_auto] sm:px-5 ${index !== schedule.length - 1 ? "border-b border-[var(--border)]" : ""}`}
                    >
                      <div className={`text-xs font-semibold ${item.active ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>{item.time}</div>
                      <div className="min-w-0 border-r border-[var(--border)] pr-4">
                        <p className="truncate text-sm font-bold text-[var(--primary)]">{item.title}</p>
                        <p className="mt-1 truncate text-[11px] text-[var(--text-muted)]">{item.meta}</p>
                      </div>
                      <div className={`rounded-full px-2.5 py-1 text-[9px] font-bold ${item.active ? "bg-[var(--accent-soft)] text-[var(--accent)]" : "bg-[var(--bg)] text-[var(--text-muted)]"}`}>
                        {item.active ? "مثال" : "Demo"}
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section>
                <SectionHeading eyebrow="QUICK ACCESS" title="اختصاراتك" />
                <div className="grid gap-2.5">
                  {quickActions.map((item) =>
                    item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 text-right transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_12px_26px_rgba(16,38,56,.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                      >
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                          <Icon name={item.icon} size={18} />
                        </span>
                        <span className="flex-1 text-sm font-semibold text-[var(--primary)]">{item.label}</span>
                        <Icon name="chevron" size={16} className="text-[var(--text-muted)]" />
                      </a>
                    ) : (
                      <button
                        key={item.label}
                        type="button"
                        onClick={focusSearch}
                        className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white p-4 text-right transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_12px_26px_rgba(16,38,56,.06)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                      >
                        <span className="flex size-10 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent)]">
                          <Icon name={item.icon} size={18} />
                        </span>
                        <span className="flex-1 text-sm font-semibold text-[var(--primary)]">{item.label}</span>
                        <Icon name="chevron" size={16} className="text-[var(--text-muted)]" />
                      </button>
                    ),
                  )}
                </div>
              </section>
            </div>

            <section>
              <SectionHeading eyebrow="MY MODULES · DEMO" title="المواد الحالية" action="استكشاف المواد" actionHref="#modules" />
              <div id="modules" className="grid gap-3 md:grid-cols-3">
                {filteredModules.map((item) => (
                  <article key={item.title} className="rounded-[22px] border border-[var(--border)] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(16,38,56,.06)]">
                    <div className="flex items-start justify-between gap-3">
                      <div className={`flex size-10 items-center justify-center rounded-xl ${item.accent === "blue" ? "bg-[var(--accent-soft)] text-[var(--accent)]" : item.accent === "green" ? "bg-[var(--success-soft)] text-[var(--success)]" : "bg-[var(--warning-soft)] text-[var(--warning)]"}`}>
                        <Icon name="book" size={18} />
                      </div>
                      <span title="الحفظ سيُفعّل بعد ربط الحساب" aria-hidden="true" className="rounded-lg p-1.5 text-[var(--text-muted)]">
                        <Icon name="bookmark" size={16} />
                      </span>
                    </div>
                    <p className="mt-4 text-sm font-bold text-[var(--primary)]">{item.title}</p>
                    <p className="mt-1 text-[11px] text-[var(--text-muted)]">{item.subtitle} · {item.resources} موارد تجريبية</p>
                    <div className="mt-4">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-[var(--text-muted)]">تقدم تجريبي</span>
                        <span className="font-bold text-[var(--primary)]">{item.progress}%</span>
                      </div>
                      <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-[var(--bg)]">
                        <div className="h-full rounded-full bg-[var(--accent)] transition-all" style={{ width: `${item.progress}%` }} />
                      </div>
                    </div>
                  </article>
                ))}
                {!filteredModules.length ? (
                  <div className="md:col-span-3 rounded-2xl border border-dashed border-[var(--border)] bg-white p-8 text-center text-sm text-[var(--text-muted)]">لا توجد مادة مطابقة لبحثك.</div>
                ) : null}
              </div>
            </section>

            <div className="grid gap-5 py-6 xl:grid-cols-[1.15fr_.85fr]">
              <section>
                <SectionHeading eyebrow="LATEST · DEMO" title="آخر المستجدات" action="عرض الكل" actionHref="#latest" />
                <div id="latest" className="rounded-[24px] border border-[var(--border)] bg-white">
                  {updates.map((item, index) => (
                    <article key={item.title} className={`flex items-start gap-3 px-4 py-4 sm:px-5 ${index !== updates.length - 1 ? "border-b border-[var(--border)]" : ""}`}>
                      <span className="mt-1 flex size-2.5 shrink-0 rounded-full bg-[var(--accent)]" />
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="rounded-full bg-[var(--bg)] px-2 py-1 text-[9px] font-bold text-[var(--text-muted)]">{item.label}</span>
                          <span className="text-[9px] text-[var(--text-muted)]">{item.age}</span>
                        </div>
                        <p className="mt-2 text-sm leading-6 text-[var(--primary)]">{item.title}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </section>

              <section className="rounded-[24px] border border-[var(--border)] bg-[var(--primary)] p-5 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-bold tracking-[0.18em] text-slate-300">TRUST LAYER</p>
                    <h2 className="mt-2 text-xl font-bold">المعلومة لها مصدر.</h2>
                  </div>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-white/10 text-slate-200">
                    <Icon name="check" size={18} />
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-300">كل مورد في المنصة سيُصنّف بوضوح: رسمي، موثق، مساهمة مجتمعية أو مؤرشف. هذا ما سيجعل البحث والـAI قابلين للثقة لاحقًا.</p>
                <div className="mt-5 grid grid-cols-2 gap-2">
                  {["Official", "Verified", "Community", "Archived"].map((status) => (
                    <span key={status} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-center text-[10px] font-semibold text-slate-200">{status}</span>
                  ))}
                </div>
              </section>
            </div>

            <footer className="border-t border-[var(--border)] py-6 text-center text-[10px] leading-5 text-[var(--text-muted)]">M&apos;Sila CS Hub مشروع أكاديمي مستقل. البيانات المعروضة هنا تجريبية إلى حين ربط مصادر موثوقة.</footer>
          </section>
        </div>
      </div>

      <nav className="fixed inset-x-3 bottom-3 z-40 rounded-2xl border border-[var(--border)] bg-white/95 p-1.5 shadow-[0_18px_48px_rgba(16,38,56,.15)] backdrop-blur lg:hidden" aria-label="التنقل السريع">
        <div className="grid grid-cols-3 gap-1">
          <a href="#" className="rounded-xl bg-[var(--primary)] px-2 py-2.5 text-center text-[10px] font-bold text-white">الرئيسية</a>
          <button type="button" onClick={focusSearch} className="rounded-xl px-2 py-2.5 text-[10px] font-bold text-[var(--text-muted)]">استكشاف</button>
          <a href="#today-schedule" className="rounded-xl px-2 py-2.5 text-center text-[10px] font-bold text-[var(--text-muted)]">الجدول</a>
        </div>
      </nav>
    </main>
  );
}
