import {useContext} from "react";
import {GroupsContext, ItemContext, RateContext} from "../../App";
import BestFeature from "./files/BestFeature";
import Card from "./files/Card";
import Fixit from "./files/Fixit";
import HeroBanner from "./files/HeroBanner";
import HowWorks from "./files/HowWorks";
import MobileRepair from "./files/MobileRepair";
import MostDisCounted from "./files/MostDisCounted";
import ProfessionalRepair from "./files/ProfessionalRepair";
import Tab1 from "./files/Tab1";
import VedioPart from "./files/VedioPart";
import WhycChoose from "./files/WhycChoose";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const grpData = useContext(GroupsContext);
  const itmData = useContext(ItemContext);
  const rateData = useContext(RateContext);

  return (
    <div>

      <Helmet>
        <title>Ifixit | Home</title>
        <link rel="canonical" href="https://i.ibb.co/GQcCJRP/logo.png" />
      </Helmet>


      <HeroBanner />
      <Card grpData={grpData} />
      <Fixit />
      <ProfessionalRepair />
      <VedioPart />
      <MobileRepair />
      <Tab1 grpData={grpData} itmData={itmData} rateData={rateData} />
      <MostDisCounted grpData={grpData} itmData={itmData} rateData={rateData} />
      <BestFeature />
      <HowWorks />
      <WhycChoose />
    </div>
  );
};

export default Home;
