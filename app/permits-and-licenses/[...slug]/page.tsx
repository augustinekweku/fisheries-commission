"use client";

import { Suspense, useEffect } from "react";
import { useParams } from "next/navigation";
import useSWR from "swr";
import { client, fetcher } from "@/sanity/client";
import { permitsByCategoryQuery } from "@/sanity/groq";
import Loader from "@/components/Loader";
import { DocumentItem } from "@/types/Resources";
import PermitsList from "@/components/Permits/PermitsList";
import { useTranslations } from "next-intl";
import { formatFileSize } from "@/lib/formatFileSize";

const SLUG_TO_KEY: Record<string, string> = {
  fishing: "fishing",
  "import-and-export": "importAndExport",
  aquaculture: "aquaculture",
  "cold-storage-facility": "coldStorageFacility",
  industrial: "industrial",
  "semi-industrial": "semiIndustrial",
  artisanal: "artisanal",
  authorization: "authorization",
  "recreational-fishing": "recreationalFishing",
};

const PermitCategoryPage = () => {
  const tCategory = useTranslations("permitsCategory");
  const params = useParams();
  const slug = params.slug as string[];

  const category = slug[0] ?? "";
  const subcategory = slug[1] ?? null;

  const swrKey = ["permits", category, subcategory].filter(Boolean).join("/");

  const fetchPermits = async () => {
    return await fetcher([
      permitsByCategoryQuery,
      { pageIndex: 0, limit: 1000, category, subcategory: subcategory ?? null },
    ]);
  };

  const { data, isLoading, mutate } = useSWR<{
    permits: any[];
    totalCount: number;
  }>(swrKey, fetchPermits, {
    revalidateOnFocus: false,
    fallbackData: { permits: [], totalCount: 0 },
  });

  const documents: DocumentItem[] =
    data?.permits.map((permit) => ({
      title: permit.title,
      size: formatFileSize(permit.size),
      dateAdded: new Date(permit.date).toLocaleDateString(),
      dateModified: permit.modifiedAt
        ? new Date(permit.modifiedAt).toLocaleDateString()
        : "—",
      thumbnailUrl: permit.previewImageUrl ?? "",
      downloadUrl: permit.pdfUrl
        ? `${permit.pdfUrl}?dl=${encodeURIComponent(permit.title)}.pdf`
        : "",
      previewUrl: permit.pdfUrl || "",
    })) || [];

  useEffect(() => {
    const filter = subcategory
      ? `*[_type == "permitsAndLicences" && category == "${category}" && subcategory == "${subcategory}"]`
      : `*[_type == "permitsAndLicences" && category == "${category}"]`;

    const subscription = client.listen(filter).subscribe(() => mutate());
    return () => subscription.unsubscribe();
  }, [mutate, category, subcategory]);

  const pageSlugKey = subcategory || category;
  const translationKey = SLUG_TO_KEY[pageSlugKey] ?? pageSlugKey;
  const pageTitle = tCategory(
    translationKey as Parameters<typeof tCategory>[0],
  );
  const pageDescription = tCategory(
    `${translationKey}Desc` as Parameters<typeof tCategory>[0],
  );

  return (
    <div className="container-fluid pt-5">
      <div className="container section-title" data-aos="fade-up">
        <h2>{pageTitle}</h2>
        <p className="mt-1">{pageDescription}</p>

        {isLoading ? (
          <Loader />
        ) : (
          <Suspense fallback={<Loader />}>
            <PermitsList documents={documents} />
          </Suspense>
        )}
      </div>
    </div>
  );
};

export default PermitCategoryPage;
