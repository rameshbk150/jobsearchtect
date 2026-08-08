import { notFound } from "next/navigation";

import ViewJobs from "@/components/Viewjobs";
import { jobsDetails } from "@/data/DataSite";

export default async function ViewJobDetailsPage({ searchParams }) {
  const params = await searchParams;

  const id = params?.id;

  if (!id) {
    notFound();
  }

  const job = jobsDetails.find(
    (item) => String(item.id) === String(id)
  );

  if (!job) {
    notFound();
  }

  return <ViewJobs job={job} />;
}