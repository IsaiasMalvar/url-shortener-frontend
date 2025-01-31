import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useFetchClicksPerUrl, useFetchTotalClicks } from "../hooks/useQuery";
import {
  chartOptions,
  getDataset,
  getLabels,
  getTotalClicksAmount,
} from "../utils/chartConfig";
import toast from "react-hot-toast";

interface URLChart {
  slug?: string;
  token: string;
}

const UrlChart = ({ slug, token }: URLChart) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  );

  const { data: totalData, isError } = useFetchTotalClicks(token!);
  const { data: urlData } = useFetchClicksPerUrl(token!, slug!);

  const [labels, setLabels] = useState<string[]>([]);
  const [dataset, setDataset] = useState<number[]>([]);
  const [totalClicks, setTotalClicks] = useState<number>(0);

  const dataSet = {
    labels,
    datasets: [
      {
        label: slug
          ? `${slug} Clicks: ${totalClicks}`
          : "Total Clicks: " + totalClicks,
        data: dataset,
        backgroundColor: "white",
        color: "white",
        barThickness: 10,
      },
    ],
  };

  useEffect(() => {
    if (slug && urlData) {
      setLabels(getLabels(urlData));
      setDataset(getDataset(urlData));
      setTotalClicks(getTotalClicksAmount(urlData));
    } else if (totalData) {
      setLabels(getLabels(totalData));
      setDataset(getDataset(totalData));
      setTotalClicks(getTotalClicksAmount(totalData));
    }
    if (isError) {
      toast.error("Data could not be properly loaded.");
    }
  }, [urlData, totalData, slug, isError]);

  return totalData || urlData ? (
    <Bar
      options={chartOptions}
      data={dataSet}
      className="text-white w-[20rem]"
    />
  ) : (
    <div className="text-5xl text-white p-5 text-center font-mono">
      NO DATA TO SHOW YET
    </div>
  );
};

export default UrlChart;
