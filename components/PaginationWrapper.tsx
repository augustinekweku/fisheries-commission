"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Pagination from "./Pagination";

interface PaginationWrapperProps {
  totalPages: number;
  basePath: string;
}

function PaginationContent({ totalPages, basePath }: PaginationWrapperProps) {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      basePath={basePath}
    />
  );
}

export default function PaginationWrapper({
  totalPages,
  basePath,
}: PaginationWrapperProps) {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center py-4">Loading...</div>
      }
    >
      <PaginationContent totalPages={totalPages} basePath={basePath} />
    </Suspense>
  );
}
