import Link from "next/link";
import { notFound } from "next/navigation";
import { jobsData } from "@/data/DataSite";

import {
  FaArrowLeft,
  FaBuilding,
  FaLocationDot,
  FaBriefcase,
  FaLaptop,
  FaGraduationCap,
  FaIndianRupeeSign,
  FaClock,
  FaUserGroup,
} from "react-icons/fa6";

export default async function JobDetailsPage({ params }) {
  const { id } = await params;

  const job = jobsData.find(
    (item) => item.id === Number(id)
    
  );

 

  if (!job) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          href="/jobs"
          className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          <FaArrowLeft />
          Back to Jobs
        </Link>

        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:p-8">

          {/* Header */}
          <div className="border-b border-gray-100 pb-6">

            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600">
                {job.category}
              </span>

              {job.featured && (
                <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-semibold text-yellow-700">
                  Featured
                </span>
              )}
            </div>

            <h1 className="mt-4 text-3xl font-bold text-gray-900">
              {job.title}
            </h1>

            <div className="mt-3 flex items-center gap-2 text-gray-600">
              <FaBuilding className="text-blue-600" />
              <span className="font-medium">
                {job.company}
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
              <FaLocationDot />
              {job.location}
            </div>
          </div>

          {/* Job Information */}
          <div className="grid gap-4 border-b border-gray-100 py-6 sm:grid-cols-2 lg:grid-cols-3">

            <DetailItem
              icon={<FaIndianRupeeSign />}
              label="Salary"
              value={job.salary}
            />

            <DetailItem
              icon={<FaBriefcase />}
              label="Job Type"
              value={job.type}
            />

            <DetailItem
              icon={<FaLaptop />}
              label="Work Mode"
              value={job.workMode}
            />

            <DetailItem
              icon={<FaClock />}
              label="Experience"
              value={job.experience}
            />

            <DetailItem
              icon={<FaGraduationCap />}
              label="Qualification"
              value={job.qualification}
            />

            <DetailItem
              icon={<FaUserGroup />}
              label="Openings"
              value={`${job.openings} Openings`}
            />

          </div>

          {/* Description */}
          <div className="py-6">
            <h2 className="text-xl font-bold text-gray-900">
              Job Description
            </h2>

            <p className="mt-3 leading-7 text-gray-600">
              {job.description}
            </p>
          </div>

          {/* Skills */}
          <div className="border-t border-gray-100 py-6">
            <h2 className="text-xl font-bold text-gray-900">
              Required Skills
            </h2>

            <div className="mt-4 flex flex-wrap gap-2">
              {job.skills?.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="border-t border-gray-100 py-6">
            <h2 className="text-xl font-bold text-gray-900">
              Responsibilities
            </h2>

            <ul className="mt-4 space-y-3">
              {job.responsibilities?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-600"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Dates */}
          <div className="grid gap-4 border-t border-gray-100 py-6 sm:grid-cols-2">

            <div>
              <p className="text-sm text-gray-500">
                Posted Date
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {job.postedDate}
              </p>
            </div>

            <div>
              <p className="text-sm text-gray-500">
                Application Deadline
              </p>

              <p className="mt-1 font-semibold text-gray-800">
                {job.deadline}
              </p>
            </div>

          </div>

          {/* Apply Button */}
          <button className="mt-4 w-full rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white transition hover:bg-blue-700 sm:w-auto">
            Apply Now
          </button>

        </div>
      </section>
    </main>
  );
}

function DetailItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">

      <div className="mt-1 text-blue-600">
        {icon}
      </div>

      <div>
        <p className="text-xs text-gray-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-gray-800">
          {value}
        </p>
      </div>

    </div>
  );
}