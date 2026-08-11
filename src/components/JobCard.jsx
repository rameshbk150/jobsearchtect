import Link from "next/link";
import {
  FaBuilding,
  FaBriefcase,
  FaGraduationCap,
  FaIndianRupeeSign,
  FaLaptop,
} from "react-icons/fa6";

export default function JobCard({ job }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Title & Company */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-900">
          {job.title}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
          <FaBuilding className="text-blue-600" />
          <span>{job.company}</span>
        </div>
      </div>

      {/* Job Details */}
      <div className="space-y-3 text-sm">

        {/* Work Mode */}
        <div className="flex items-center gap-3 text-gray-600">
          <FaLaptop className="text-blue-600" />

          <div>
            <span className="font-medium text-gray-800">
              Work Mode:
            </span>{" "}
            {job.workMode}
          </div>
        </div>

        {/* Job Type */}
        <div className="flex items-center gap-3 text-gray-600">
          <FaBriefcase className="text-blue-600" />

          <div>
            <span className="font-medium text-gray-800">
              Job Type:
            </span>{" "}
            {job.type}
          </div>
        </div>

        {/* Qualification */}
        <div className="flex items-start gap-3 text-gray-600">
          <FaGraduationCap className="mt-1 text-blue-600" />

          <div>
            <span className="font-medium text-gray-800">
              Qualification:
            </span>{" "}
            {job.qualification}
          </div>
        </div>

        {/* Salary */}
        <div className="flex items-center gap-3 text-gray-600">
          <FaIndianRupeeSign className="text-blue-600" />

          <div>
            <span className="font-medium text-gray-800">
              Salary:
            </span>{" "}
            {job.salary}
          </div>
        </div>

      </div>

      {/* Skills */}
      <div className="mt-5">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
          Skills
        </p>

        <div className="flex flex-wrap gap-2">
          {job.skills?.map((skill) => (
            <span
              key={skill}
              className="rounded-lg bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* View Job Button */}
      <Link
        href={`/jobs/${job.id}`}
        className="mt-6 block w-full rounded-xl bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-blue-700"
      >
        View Job
      </Link>

    </div>
  );
}