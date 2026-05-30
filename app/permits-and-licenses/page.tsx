"use client";

import { Suspense, useEffect } from "react";
import useSWR from "swr";
import { client, fetcher } from "@/sanity/client";
import { allResourcesPaginatedQuery } from "@/sanity/groq";
import Loader from "@/components/Loader";
import { DocumentItem } from "@/types/Resources";
import PermitsAndLicensesList from "@/components/Resources/PermitsAndLicensesList";
import { useTranslations } from "next-intl";

const PermitsAndLicensesPage = () => {
  const t = useTranslations("permitsAndLicenses");
  const CATEGORY = "permits-and-licenses";

  const fetchResources = async () => {
    return await fetcher([
      allResourcesPaginatedQuery,
      { pageIndex: 0, limit: 1000, category: CATEGORY },
    ]);
  };

  const { data, isLoading, mutate } = useSWR<{
    resources: any[];
    totalCount: number;
  }>(["resources", CATEGORY], fetchResources, {
    revalidateOnFocus: false,
    fallbackData: { resources: [], totalCount: 0 },
  });

  const documents: DocumentItem[] =
    data?.resources.map((resource) => ({
      title: resource.title,
      size: resource.size || t("unknownSize"),
      dateAdded: new Date(resource.date).toLocaleDateString(),
      dateModified: resource.modifiedAt
        ? new Date(resource.modifiedAt).toLocaleDateString()
        : "—",
      thumbnailUrl: resource.previewImageUrl,
      downloadUrl: resource.pdfUrl
        ? `${resource.pdfUrl}?dl=${encodeURIComponent(resource.title)}.pdf`
        : "",
      previewUrl: resource.pdfUrl || "",
    })) || [];

  useEffect(() => {
    const subscription = client
      .listen(`*[_type == "resource" && category == "${CATEGORY}"]`)
      .subscribe(() => mutate());

    return () => subscription.unsubscribe();
  }, [mutate]);

  return (
    <div className="container-fluid pt-5">
      <div className="container section-title" data-aos="fade-up">
        <h2>{t("title")}</h2>
        <p className="mt-1">{t("description")}</p>

        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <PermitsAndLicensesList documents={documents} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default PermitsAndLicensesPage;
