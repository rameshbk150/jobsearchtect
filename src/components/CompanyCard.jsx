import Image from "next/image";
import Link from "next/link";
import { Building2, MapPin, Users, Briefcase } from "lucide-react";

export default function CompanyCard({ company }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:shadow-lg">
      <div className="flex items-start gap-4">
        <div className="relative h-16 w-16 overflow-hidden rounded-xl border">
          <Image
            src={company.logo}
            alt={company.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold text-zinc-900">
            {company.name}
          </h3>

          <div className="mt-2 flex flex-wrap gap-4 text-sm text-zinc-600">
            <span className="flex items-center gap-1">
              <Building2 size={16} />
              {company.industry}
            </span>

            <span className="flex items-center gap-1">
              <MapPin size={16} />
              {company.location}
            </span>
          </div>
        </div>
      </div>

      <p className="mt-5 text-sm leading-6 text-zinc-600">
        {company.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-4 text-sm">
        <span className="flex items-center gap-1 text-zinc-700">
          <Users size={16} />
          {company.employees}
        </span>

        <span className="flex items-center gap-1 text-zinc-700">
          <Briefcase size={16} />
          {company.jobs} Open Jobs
        </span>
      </div>

      <div className="mt-6">
        <Link
          href={`/companies/${company.id}`}
          className="inline-flex rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
        >
          View Company
        </Link>
      </div>
    </div>
  );
}