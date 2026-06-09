"use client";

import { Suspense, useEffect } from "react";
import useSWR from "swr";
import { client, fetcher } from "@/sanity/client";
import { allResourcesPaginatedQuery } from "@/sanity/groq";
import Loader from "@/components/Loader";
import LawsAndRegulationsList from "@/components/Resources/LawsAndRegulationsList";
import { DocumentItem } from "@/types/Resources";
import { useTranslations } from "next-intl";
import { formatFileSize } from "@/lib/formatFileSize";

const LawsAndRegulationsPage = () => {
  const CATEGORY = "laws-and-regulations";
  const t = useTranslations("lawsAndRegulations");

  // Fetch laws & regulations
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
    data?.resources.map((resource) => {
      return {
        title: resource.title,
        size: formatFileSize(resource.size),
        dateAdded: new Date(resource.date).toLocaleDateString(),
        dateModified: resource.modifiedAt
          ? new Date(resource.modifiedAt).toLocaleDateString()
          : "—",
        thumbnailUrl: resource.previewImageUrl,
        downloadUrl: resource.pdfUrl || "",
        previewUrl: resource.pdfUrl,
      };
    }) || [];

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
            <LawsAndRegulationsList documents={documents} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default LawsAndRegulationsPage;
