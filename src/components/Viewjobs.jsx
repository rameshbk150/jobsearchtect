import Link from "next/link";
import {
  ArrowLeft,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  GraduationCap,
  IndianRupee,
  Layers3,
  Mail,
  MapPin,
  Share2,
  Sparkles,
  Users,
} from "lucide-react";

export default function ViewJobs({ job }) {
  if (!job) {
    return (
      <main className="min-h-[70vh] bg-slate-50">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-24">
          <div className="max-w-md rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm">
            <BriefcaseBusiness
              size={34}
              className="mx-auto text-slate-400"
            />

            <h1 className="mt-5 text-2xl font-bold text-slate-950">
              Job Not Found
            </h1>

            <p className="mt-3 text-sm leading-7 text-slate-500">
              The job you are looking for may have been removed or is no
              longer available.
            </p>

            <Link
              href="/jobs"
              className="mt-6 inline-flex h-11 items-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              <ArrowLeft size={17} />
              Back to Jobs
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50">
      {/* ================= TOP BAR ================= */}

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <Link
            href="/jobs"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-blue-600"
          >
            <ArrowLeft size={17} />
            Back to all jobs
          </Link>
        </div>
      </section>

      {/* ================= JOB HERO ================= */}

      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="absolute -right-32 -top-40 h-[450px] w-[450px] rounded-full bg-blue-100/80 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-start">
            <div className="flex-1">
              {/* Badges */}

              <div className="flex flex-wrap items-center gap-2">
                {job.featured && (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700">
                    <Sparkles size={14} />
                    Featured Job
                  </span>
                )}

                <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                  Actively Hiring
                </span>
              </div>

              {/* Title */}

              <div className="mt-5 flex items-start gap-4">
                <div className="hidden h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-100 bg-blue-50 text-blue-600 sm:flex">
                  <Building2 size={29} />
                </div>

                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
                    {job.title}
                  </h1>

                  <p className="mt-3 flex items-center gap-2 text-lg font-medium text-slate-600">
                    {job.company}

                    <BadgeCheck
                      size={18}
                      className="text-blue-600"
                    />
                  </p>
                </div>
              </div>

              {/* Main Job Meta */}

              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin
                    size={18}
                    className="text-slate-400"
                  />

                  {job.location}
                </div>

                <div className="flex items-center gap-2">
                  <BriefcaseBusiness
                    size={18}
                    className="text-slate-400"
                  />

                  {job.type}
                </div>

                <div className="flex items-center gap-2">
                  <IndianRupee
                    size={18}
                    className="text-slate-400"
                  />

                  {job.salary}
                </div>

                <div className="flex items-center gap-2">
                  <Clock3
                    size={18}
                    className="text-slate-400"
                  />

                  Posted {job.posted}
                </div>
              </div>
            </div>

            {/* Desktop buttons */}

            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-600"
                aria-label="Share job"
              >
                <Share2 size={19} />
              </button>

              <Link
                href={`/apply/${job.id}`}
                className="inline-flex h-12 items-center justify-center rounded-xl bg-blue-600 px-7 text-sm font-bold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BODY ================= */}

      <section className="py-10 lg:py-14">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:px-8">
          {/* ================= LEFT ================= */}

          <div className="space-y-7">
            {/* Overview Cards */}

            <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="text-xl font-bold text-slate-950">
                Job Overview
              </h2>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <InfoCard
                  icon={IndianRupee}
                  label="Salary"
                  value={job.salary}
                />

                <InfoCard
                  icon={BriefcaseBusiness}
                  label="Experience"
                  value={job.experience}
                />

                <InfoCard
                  icon={Users}
                  label="Openings"
                  value={`${job.openings} Position${
                    job.openings > 1 ? "s" : ""
                  }`}
                />

                <InfoCard
                  icon={MapPin}
                  label="Work Mode"
                  value={job.workplace}
                />

                <InfoCard
                  icon={GraduationCap}
                  label="Education"
                  value={job.education}
                />

                <InfoCard
                  icon={CalendarDays}
                  label="Apply Before"
                  value={job.deadline}
                />
              </div>
            </section>

            {/* Description */}

            <ContentCard title="About the Job">
              <p className="leading-8 text-slate-600">
                {job.description}
              </p>
            </ContentCard>

            {/* Responsibilities */}

            <ContentCard title="Key Responsibilities">
              <BulletList items={job.responsibilities} />
            </ContentCard>

            {/* Requirements */}

            <ContentCard title="Requirements & Qualifications">
              <BulletList items={job.requirements} />
            </ContentCard>

            {/* Skills */}

            <ContentCard title="Skills Required">
              <div className="flex flex-wrap gap-2.5">
                {job.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-xl border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </ContentCard>

            {/* Benefits */}

            <ContentCard title="Benefits & Perks">
              <div className="grid gap-3 sm:grid-cols-2">
                {job.benefits?.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-center gap-3 rounded-xl bg-slate-50 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="shrink-0 text-emerald-500"
                    />

                    <span className="text-sm font-medium text-slate-700">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </ContentCard>

            {/* Additional Details */}

            <ContentCard title="Additional Job Information">
              <div className="divide-y divide-slate-100">
                <DetailRow
                  label="Industry"
                  value={job.industry}
                />

                <DetailRow
                  label="Department"
                  value={job.department}
                />

                <DetailRow
                  label="Role Category"
                  value={job.roleCategory}
                />

                <DetailRow
                  label="Employment Type"
                  value={job.type}
                />

                <DetailRow
                  label="Workplace"
                  value={job.workplace}
                />
              </div>
            </ContentCard>
          </div>

          {/* ================= SIDEBAR ================= */}

          <aside className="space-y-6">
            {/* Apply Card */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:sticky lg:top-28">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BriefcaseBusiness size={23} />
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-950">
                Interested in this job?
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Review the requirements carefully and submit your application
                to {job.company}.
              </p>

              <Link
                href={`/apply/${job.id}`}
                className="mt-6 flex h-12 w-full items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white transition hover:bg-blue-700"
              >
                Apply for this Job
              </Link>

              <p className="mt-4 text-center text-xs text-slate-400">
                Application takes only a few minutes.
              </p>

              <div className="my-6 border-t border-slate-100" />

              <div className="space-y-4">
                <SidebarRow
                  label="Job Type"
                  value={job.type}
                />

                <SidebarRow
                  label="Experience"
                  value={job.experience}
                />

                <SidebarRow
                  label="Location"
                  value={job.location}
                />

                <SidebarRow
                  label="Salary"
                  value={job.salary}
                />

                <SidebarRow
                  label="Deadline"
                  value={job.deadline}
                />
              </div>
            </div>

            {/* Company Card */}

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                About Company
              </p>

              <div className="mt-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <Building2 size={23} />
                </div>

                <div>
                  <h3 className="font-bold text-slate-950">
                    {job.company}
                  </h3>

                  <span className="text-xs text-emerald-600">
                    Verified Employer
                  </span>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {job.companyDescription}
              </p>

              {job.contactEmail && (
                <a
                  href={`mailto:${job.contactEmail}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  <Mail size={16} />
                  {job.contactEmail}
                </a>
              )}
            </div>

            {/* Safety */}

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-bold text-amber-900">
                Job Safety Tip
              </h3>

              <p className="mt-2 text-sm leading-6 text-amber-800/80">
                Never pay money to an employer or recruiter for a job
                application, interview or offer.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

/* =====================================================
   SMALL COMPONENTS
===================================================== */

function InfoCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">
        <Icon size={18} />
      </div>

      <p className="mt-4 text-xs font-medium uppercase tracking-wider text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-bold text-slate-800">
        {value || "Not specified"}
      </p>
    </div>
  );
}

function ContentCard({ title, children }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <h2 className="text-xl font-bold text-slate-950">
        {title}
      </h2>

      <div className="mt-6">
        {children}
      </div>
    </section>
  );
}

function BulletList({ items = [] }) {
  return (
    <div className="space-y-3.5">
      {items.map((item) => (
        <div
          key={item}
          className="flex items-start gap-3"
        >
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <Check size={14} />
          </span>

          <p className="text-sm leading-7 text-slate-600">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function DetailRow({ label, value }) {
  return (
    <div className="grid gap-1 py-4 sm:grid-cols-[190px_1fr] sm:gap-5">
      <span className="text-sm font-medium text-slate-500">
        {label}
      </span>

      <span className="text-sm font-semibold text-slate-800">
        {value || "Not specified"}
      </span>
    </div>
  );
}

function SidebarRow({ label, value }) {
  return (
    <div>
      <p className="text-xs font-medium text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-semibold text-slate-800">
        {value || "Not specified"}
      </p>
    </div>
  );
}