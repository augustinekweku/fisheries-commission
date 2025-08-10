import { Suspense } from "react";
import PressAndRelease from "@/components/NewsAndEvents/PressAndReleaseList";
import LoadingFallback from "@/components/LoadingFallback";

const PressRelease = () => {
  return (
    <div className="container-fluid">
      <Suspense fallback={<LoadingFallback />}>
        <PressAndRelease />
      </Suspense>
    </div>
  );
};

export default PressRelease;
