import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  ArrowLeft,
  Building2,
  MapPin,
  Users,
  Briefcase,
  Globe,
  CalendarDays,
  CheckCircle2,
  ExternalLink,
  Sparkles,
} from "lucide-react";

import { companiesData } from "@/data/Companies";

export default async function CompanyDetailsPage({ params }) {
  const { id } = await params;

  const company = companiesData.find(
    (item) => String(item.id) === String(id)
  );

  if (!company) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-50">
      {/* Hero */}
      <section className="border-b border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/companies"
            className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-black"
          >
            <ArrowLeft size={17} />
            Back to Companies
          </Link>

          {/* Company Header */}
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                {/* Logo */}
                <div className="flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden text-blue-600 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={100}
                    height={100}
                    className="h-full w-full object-contain"
                    priority
                  />
                </div>

                {/* Info */}
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-semibold text-zinc-700">
                    <Building2 size={14} />
                    {company.industry}
                  </span>

                  <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">
                    {company.name}
                  </h1>

                  <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
                    {company.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-zinc-500">
                    <span className="flex items-center gap-2">
                      <MapPin size={16} />
                      {company.location}
                    </span>

                    <span className="flex items-center gap-2">
                      <Users size={16} />
                      {company.employees} employees
                    </span>

                    <span className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {company.jobs} open jobs
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap gap-3">
                {company.website && (
                  <a
                    href={company.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                  >
                    <Globe size={17} />
                    Website
                  </a>
                )}

                <Link
                  href="/jobs"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                >
                  <Briefcase size={17} />
                  View Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_350px] lg:px-8">
        {/* Left Content */}
        <div className="space-y-7">
          {/* About */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl text-blue-600 bg-zinc-100">
                <Building2 size={20} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                  Company
                </p>

                <h2 className="text-2xl font-bold text-zinc-900">
                  About {company.name}
                </h2>
              </div>
            </div>

            <p className="mt-6 leading-8 text-zinc-600">
              {company.about || company.description}
            </p>
          </div>

          {/* Company Details */}
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-2xl font-bold text-zinc-900">
              Company Information
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <InfoCard
                icon={<Building2 size={19} />}
                label="Industry"
                value={company.industry}
              />

              <InfoCard
                icon={<MapPin size={19} />}
                label="Headquarters"
                value={company.headquarters || company.location}
              />

              <InfoCard
                icon={<Users size={19} />}
                label="Company Size"
                value={company.employees}
              />

              <InfoCard
                icon={<Briefcase size={19} />}
                label="Open Jobs"
                value={`${company.jobs} Positions`}
              />

              {company.founded && (
                <InfoCard
                  icon={<CalendarDays size={19} />}
                  label="Founded"
                  value={company.founded}
                />
              )}

              {company.companyType && (
                <InfoCard
                  icon={<Building2 size={19} />}
                  label="Company Type"
                  value={company.companyType}
                />
              )}
            </div>
          </div>

          {/* Specialties */}
          {company.specialties?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 text-blue-600 bg-white p-6 shadow-sm md:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100">
                  <Sparkles size={20} />
                </div>

                <h2 className="text-2xl font-bold text-zinc-900">
                  Specialties
                </h2>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {company.specialties.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Work Culture */}
          {company.workCulture && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Work Culture
              </h2>

              <p className="mt-5 leading-8 text-zinc-600">
                {company.workCulture}
              </p>
            </div>
          )}

          {/* Benefits */}
          {company.benefits?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-zinc-900">
                Employee Benefits
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {company.benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 rounded-xl bg-zinc-50 p-4"
                  >
                    <CheckCircle2
                      size={19}
                      className="mt-0.5 shrink-0 text-green-600"
                    />

                    <p className="text-sm leading-6 text-zinc-600">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Open Roles */}
          {company.openRoles?.length > 0 && (
            <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    Career Opportunities
                  </p>

                  <h2 className="mt-1 text-2xl font-bold text-zinc-900">
                    Popular Roles
                  </h2>
                </div>

                <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700">
                  {company.openRoles.length} Roles
                </span>
              </div>

              <div className="mt-6 space-y-3">
                {company.openRoles.map((role) => (
                  <div
                    key={role}
                    className="flex items-center justify-between rounded-xl border border-zinc-200  p-4 transition hover:border-zinc-300 hover:bg-zinc-50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg text-blue-600 bg-zinc-100">
                        <Briefcase size={18} />
                      </div>

                      <span className="font-semibold text-zinc-800">
                        {role}
                      </span>
                    </div>

                    <Link
                      href="/jobs"
                      className="text-sm font-semibold text-zinc-500 transition hover:text-black"
                    >
                      View
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-6 space-y-6">
            {/* Overview */}
            <div className="rounded-2xl border border-zinc-200  bg-white p-6 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-900">
                Company Overview
              </h3>

              <div className="mt-6  space-y-5">
                <SidebarInfo
                  icon={<Building2 size={17} />}
                  label="Industry"
                  value={company.industry}
                />

                <SidebarInfo
                  icon={<MapPin size={17} />}
                  label="Location"
                  value={company.location}
  
                />

                <SidebarInfo
                  icon={<Users size={17} />}
                  label="Employees"
                  value={company.employees}
                />

                <SidebarInfo
                  icon={<Briefcase size={17} />}
                  label="Open Jobs"
                  value={`${company.jobs} Jobs`}
                />

                {company.founded && (
                  <SidebarInfo
                    icon={<CalendarDays size={17} />}
                    label="Founded"
                    value={company.founded}
                  />
                )}

                {company.companyType && (
                  <SidebarInfo
                    icon={<Building2 size={17} />}
                    label="Type"
                    value={company.companyType}
                  />
                )}
              </div>

              {company.website && (
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-50"
                >
                  <Globe size={17} />
                  Visit Website
                  <ExternalLink size={14} />
                </a>
              )}
            </div>

            {/* Job CTA */}
            <div className="rounded-2xl bg-zinc-950 p-6 text-white shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Briefcase size={21} />
              </div>

              <h3 className="mt-5 text-xl font-bold">
                Work at {company.name}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Explore available job opportunities and find a position
                that matches your skills and experience.
              </p>

              <Link
                href="/jobs"
                className="mt-6 flex w-full items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-zinc-200"
              >
                Browse Open Jobs
              </Link>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-5">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-zinc-800 shadow-sm">
          {icon}
        </div>

        <div className="min-w-0">
          <p className="text-xs font-medium text-zinc-500">
            {label}
          </p>

          <p className="mt-1 font-semibold text-zinc-900">
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}

function SidebarInfo({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-100 text-zinc-700">
        {icon}
      </div>

      <div>
        <p className="text-xs text-zinc-500">
          {label}
        </p>

        <p className="mt-1 text-sm font-semibold text-zinc-800">
          {value}
        </p>
      </div>
    </div>
  );
}