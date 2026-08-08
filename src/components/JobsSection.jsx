"use client";

import Link from "next/link";
import {
  MapPin,
  BriefcaseBusiness,
  IndianRupee,
  ArrowUpRight,
  Building2,
  BadgeCheck,
} from "lucide-react";

export default function JobsSection({ jobs = [] }) {
  if (!jobs.length) {
    return null;
  }

  return (
    <div className="grid gap-0 md:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <article
          key={job.id}
          className="
            group
            relative
            flex
            min-h-[330px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-slate-200
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-200
            hover:shadow-xl
            hover:shadow-slate-200/60
          "
        >
          {/* Top */}
          <div className="flex items-start justify-between gap-4">
            {/* Company Icon */}
            <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
              <Building2 size={24} />
            </div>

            {/* Featured */}
            {job.featured && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1.5 text-xs font-semibold text-amber-700">
                <BadgeCheck size={14} />
                Featured
              </span>
            )}
          </div>

          {/* Content */}
          <div className="mt-6">
            <h3 className="text-xl font-bold leading-snug text-slate-950 transition group-hover:text-blue-600 sm:text-2xl">
              {job.title}
            </h3>

            <p className="mt-2 text-sm font-medium text-slate-500">
              {job.company}
            </p>

            {/* Job Info */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <MapPin size={16} />
                </div>

                <span>{job.location}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-50 text-slate-500">
                  <BriefcaseBusiness size={16} />
                </div>

                <span>{job.type}</span>
              </div>

              <div className="flex items-center gap-3 text-sm text-slate-600">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                  <IndianRupee size={16} />
                </div>

                <span className="font-semibold text-slate-800">
                  {job.salary}
                </span>
              </div>
            </div>
          </div>

          <Link
            href={`/viewjobdetails?id=${job.id}`}
            className="
    flex
    h-12
    w-full
    items-center
    justify-center
    gap-2
    rounded-xl
    bg-slate-950
    text-sm
    font-semibold
    text-white
    transition-all
    hover:bg-blue-600
  "
          >
            View Job
            <ArrowUpRight size={17} />
          </Link>
        </article>
      ))}
    </div>
  );
}