import CompanyCard from "./CompanyCard";

export default function CompaniesSection({ companies }) {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-black md:text-5xl">
            Top Companies
          </h1>

          <p className="mt-3 text-zinc-600">
            Explore companies hiring talented professionals.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {companies.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}