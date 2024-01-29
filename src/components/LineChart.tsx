"use client";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    BarElement,
    LineElement,
    ArcElement
} from "chart.js";
import { Line } from "react-chartjs-2";

// Register ChartJS components using ChartJS.register
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    Tooltip,
    BarElement,
    ArcElement,
    LineElement
);

const LineChart = () => {
    return (
      <div>
        <Line
          data={{
            labels: [
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
              "1",
              "2",
              "3",
              "4",
              "5"
            ],
            datasets: [
              {
                data: [5, 3, 0, 0, 0, 4, 1, 2, 0, 0, 0, 0, 0, 0, 0],
                  fill: false,
                  borderColor: 'rgb(75, 192, 192)',
                  tension: 0.1
              },
            ],
          }}
          options={{
              plugins: {
                  title: {
                      display: true,
                      text: 'Progress Chapters',
                      padding: {
                          top: 10,
                          bottom: 30
                      }
                  }
              }
          }}
        />
      </div>
    );
  };

export default LineChart;
