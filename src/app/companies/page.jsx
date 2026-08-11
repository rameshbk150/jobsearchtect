import CompanyCard from "@/components/CompanyCard";
import { companiesData } from "@/data/Companies";

export default function CompaniesPage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex rounded-full border border-zinc-200 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-zinc-600">
              Explore Employers
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Top Companies
            </h1>

            <p className="mt-4 text-base leading-7 text-zinc-600 sm:text-lg">
              Explore leading companies, discover their work culture, and
              find your next career opportunity.
            </p>

            <div className="mt-5 text-sm font-medium text-zinc-500">
              {companiesData.length} Companies Available
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {companiesData.map((company) => (
              <CompanyCard
                key={company.id}
                company={company}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}