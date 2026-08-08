import JobsSection from "@/components/JobsSection";
import { jobsData } from "@/data/DataSite";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-slate-50">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12 text-center">
            <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
              Featured Opportunities
            </span>

            <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              Find Your Next Career Move
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Explore opportunities from growing businesses and leading
              companies.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">
                {jobsData.length}+
              </h2>

              <p className="mt-2 text-slate-600">
                Active Jobs
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">
                1,200+
              </h2>

              <p className="mt-2 text-slate-600">
                Companies Hiring
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <h2 className="text-3xl font-bold text-slate-950">
                50K+
              </h2>

              <p className="mt-2 text-slate-600">
                Job Seekers
              </p>
            </div>
          </div>

          <JobsSection jobs={jobsData} />
        </div>
      </section>
    </main>
  );
}