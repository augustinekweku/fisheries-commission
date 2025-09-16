import Loader from "@/components/Loader";
import SearchPageContent from "@/components/Search/SearchPageContent";
import React, { Suspense } from "react";

const SearchPage = () => {
  return (
    <Suspense fallback={<Loader />}>
      <SearchPageContent />
    </Suspense>
  );
};

export default SearchPage;
