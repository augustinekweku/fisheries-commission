import ReportsAndPlansList from "@/components/Resources/ReportsAndPlansList";
import { reportsAndPlansDocs } from "@/data/reportsAndPlansDocs";

const ReportsAndPlansPage = () => {
  return (
    <div>
      <div className="container-fluid pt-5">
        <div className="container section-title" data-aos="fade-up">
          <h2>Reports & Plans</h2>
          <p className="mt-1">Latest updates and strategies</p>

          <ReportsAndPlansList
            documents={Object.values(reportsAndPlansDocs).flat()}
          />
        </div>
      </div>
    </div>
  );
};

export default ReportsAndPlansPage;
