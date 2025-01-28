import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { useAppContext } from "../context/contextUtility";

import { useNavigate } from "react-router-dom";
import UrlChart from "../components/UrlChart";
import UrlList from "../components/UrlList";
import URLCreator from "../components/URLCreator";

const DashboardPage = (): React.ReactElement => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const navigate = useNavigate();
  const { token } = useAppContext();
  const [guaranteedToken, setGuaranteedToken] = useState("");
  const [slug, setSlug] = useState<string>("");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    } else {
      setGuaranteedToken(token);
    }
  }, [token, navigate]);

  return (
    <div className="bg-black h-screen flex  flex-col mobile:justify-center mobile:items-center">
      <div className="w-full h-[50%] flex">
        <div className="w-[50%] mobile:w-full h-full p-3">
          {guaranteedToken && <UrlChart token={guaranteedToken} slug={slug} />}
        </div>
      </div>
      <div className="w-full h-1/2 flex justify-between">
        {guaranteedToken && (
          <UrlList token={guaranteedToken} setSlug={setSlug} />
        )}
        <URLCreator token={guaranteedToken} setEmptySlug={setSlug} />
      </div>
    </div>
  );
};

export default DashboardPage;
