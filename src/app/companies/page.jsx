import CompaniesSection from "@/components/CompaniesSection";
import { companiesData } from "@/data/Companies";

export default function CompaniesPage() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4">

        <div className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-black">
            Top Companies
          </h1>

          <p className="mt-4 text-zinc-600">
            Explore companies hiring right now.
          </p>
        </div>

        <CompaniesSection companies={companiesData} />

      </div>
    </section>
  );
}