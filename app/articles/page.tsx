import { Suspense } from "react";
import ArticleList from "@/components/NewsAndEvents/ArticleList";
import LoadingFallback from "@/components/LoadingFallback";

const ArticlePage = () => {
  return (
    <div className="container-fluid">
      <Suspense fallback={<LoadingFallback />}>
        <ArticleList />
      </Suspense>
    </div>
  );
};

export default ArticlePage;
