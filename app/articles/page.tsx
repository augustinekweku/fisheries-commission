import { Suspense } from "react";
import ArticleList from "@/components/NewsAndEvents/ArticleList";

// Loading component for the suspense fallback
const LoadingFallback = () => (
  <div className="container-fluid pt-10">
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "400px" }}
    >
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  </div>
);

const PressRelease = () => {
  return (
    <div className="container-fluid">
      <Suspense fallback={<LoadingFallback />}>
        <ArticleList />
      </Suspense>
    </div>
  );
};

export default PressRelease;
