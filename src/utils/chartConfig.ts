import { ChartOptions } from "chart.js";
import { Click } from "../types/data";

export const getLabels = (data: Click[]) => {
  const labels = data.map((click) => {
    return click.clickDate;
  });

  const sortedDates = labels
    .map((date) => new Date(date))
    .sort((a, b) => a.getTime() - b.getTime())
    .map((date) => date.toISOString().split("T")[0]);

  return sortedDates;
};

export const getDataset = (data: Click[]) => {
  const dataset = data.map((click) => {
    return click.count;
  });
  return dataset;
};

export const chartOptions: ChartOptions<"bar"> = {
  maintainAspectRatio: false,

  responsive: true,
  plugins: {
    legend: {
      labels: {
        color: "white",
        font: {
          size: 20,
          family: "Oswald",
        },
        textAlign: "center",
        boxHeight: 10,
      },
    },
    title: {
      display: false,
      text: "Sales Data",
      color: "white",
      font: {
        size: 20,
        family: "Oswald",
      },
      align: "center",
    },
  },
  scales: {
    x: {
      ticks: {
        color: "white",
        font: {
          size: 15,
        },
      },
      grid: {
        color: "gray",
      },
      title: {
        text: "Click Date",
        color: "white",
        display: true,
        font: {
          size: 25,
          family: "Oswald",
        },
      },
    },
    y: {
      ticks: {
        color: "white",
        callback: function (value) {
          return Number(value).toFixed(0);
        },
        precision: 0,
        font: {
          size: 15,
        },
      },
      grid: {
        color: "gray",
      },
      title: {
        text: "Number of Clicks",
        color: "white",
        display: true,
        font: {
          size: 15,
          family: "Oswald",
        },
      },
    },
  },
};
