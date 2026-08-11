import JobCard from "@/components/JobCard";
import { jobsData } from "@/data/DataSite";

export default function JobsPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Latest Jobs
          </h1>

          <p className="mt-2 text-gray-500">
            Find the latest job opportunities from top companies.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobsData.map((job) => (
            <JobCard
              key={job.id}
              job={job}
            />
          ))}
        </div>

      </section>
    </main>
  );
}