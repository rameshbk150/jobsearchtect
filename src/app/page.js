import HeroSection from "@/components/HeroSection";


import { jobsData } from "@/data/DataSite";
import { companiesData } from "@/data/Companies";
import JobCard from "@/components/JobCard";
import CompanyCard from "@/components/CompanyCard";
import Link from "next/link";


export default function Home() {
  
  return (
    <main>
      <HeroSection />

      {/* jobs section */}

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">   
        <div className="mb-8">

          <h1 className="px-10 font-semibold  text-2xl my-10 text-center text-blue-500">Latest opening jobs </h1>

          <Link href="/jobs" className="text-blue-600 text-2xl  text-left"> View all jobs </Link>

        </div>


        <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-3">

          {
            jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))
          }
        </div>

      </section>


      <section className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="mb-10">
          <h1 className="px-10 font-semibold  text-2xl my-10 text-center text-blue-500">Top Companies</h1>
          

        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6">
          {
            companiesData.map((company)=>(
              <CompanyCard
              key={company.id}
              company={company}

              />
            ))
          }
</div>


      </section>




    </main>
  );
}