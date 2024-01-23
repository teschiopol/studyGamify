import { Inter } from "next/font/google";
import DayLeft from "@/components/DayLeft";
import LineChart from "@/components/LineChart";
import AreaChart from "@/components/AreaChart";
import BarChart from "@/components/BarChart";

const inter = Inter({ subsets: ["latin"] });

const divStyle = {
  backgroundColor: 'white',
};

export default function Home() {
  return (
    <main
      className={`min-h-screen flex-col items-center grid grid-cols-1 grid-rows-2 gap-4 md:grid-cols-2  p-5 ${inter.className}`}
      style={divStyle}
    >
        <div><LineChart/></div>
        <div><BarChart/></div>
        <div><AreaChart/></div>
        <div><DayLeft/></div>
    </main>
  );
}
