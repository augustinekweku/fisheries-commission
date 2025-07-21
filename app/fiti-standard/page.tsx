import AboutFiti from "@/components/Fiti/AboutFiti";
import DownloadAndFooter from "@/components/Fiti/DownloadAndFooter";
import FitiVideo from "@/components/Fiti/FitiVideo";
import KeyPrinciples from "@/components/Fiti/KeyPrinciples";
import TransparencyRequirements from "@/components/Fiti/TransparencyRequirements";

const FitiStandardPage = () => {
  return (
    <div className="container-fluid">
      <div className="my-5">
        <AboutFiti />
        <FitiVideo />
        <TransparencyRequirements />
        <KeyPrinciples />
        <DownloadAndFooter />
      </div>
    </div>
  );
};

export default FitiStandardPage;
