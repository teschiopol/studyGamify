"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    BarElement,
    LineElement,
    ArcElement,
    Title
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    BarElement,
    ArcElement,
    LineElement,
    Title
);

const AreaChart = () => {
    return (
      <div>
        <Doughnut
          data={{
            labels: [
              "Done",
              "Left",
            ],
            datasets: [
              {
                data: [47, 53],
                backgroundColor: ["green", "orange"]
              },
            ],
          }}
          options={{
              plugins: {
                  title: {
                      display: true,
                      text: 'Percentage Chapters',
                  }
              }
          }}
        />
      </div>
    );
  };
export default AreaChart;
