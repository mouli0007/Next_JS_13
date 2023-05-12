import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";
import Link from "next/link";
import { Suspense } from "react";
const RepoPage = ({ params }) => {
  return (
    <div className="card">
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={params.name} />
      </Suspense>

      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={params.name} />
      </Suspense>
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
    </div>
  );
};

export default RepoPage;
