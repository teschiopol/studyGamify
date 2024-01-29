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

function calculateTotal() {
    let total = 23;
    let done = 13;

    let c = Math.round(done * 100 / total);

    return [c , 100-c];
}

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
                data: calculateTotal(),
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
