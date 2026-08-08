import HeroSection from "@/components/HeroSection";
import JobsSection from "@/components/JobsSection";
import CompaniesSection from "@/components/CompaniesSection";
import AboutPage from "./about/page";
import { aboutData } from "@/data/DataSite";

import { jobsData } from "@/data/DataSite";
import { companiesData } from "@/data/Companies";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutPage data={aboutData} />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-16 text-center">
            <span className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-700">
              Latest Opportunities
            </span>

            <h2 className="mt-6 text-4xl font-bold text-black md:text-5xl">
              Find Your Dream Job
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600">
              Discover top opportunities from leading companies and startups
              hiring talented professionals worldwide.
            </p>
          </div>

          <JobsSection jobs={jobsData} />
        </div>
      </section>

      <CompaniesSection companies={companiesData} />
    </main>
  );
}