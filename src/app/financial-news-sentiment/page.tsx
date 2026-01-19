'use client'

import Typewriter from "@/components/Typewriter";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

type Headline = {
  headline: string;
  score: number;
};

type DailyAggregate = {
  date: string;
  aggregate_score: number;
  sp500: number;
};


export default function FinancialNewsSentimentPage() {
  const [headlines, setHeadlines] = useState<Headline[]>([]);
  const [dailyData, setDailyData] = useState<DailyAggregate[]>([]);


  const today = new Date();
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(today.getMonth() - 1);

  // Fetch data from APIs
  useEffect(() => {
    const fetchData = async () => {
      const dailyRes = await fetch("/api/daily");
      const dailyData: DailyAggregate[] = await dailyRes.json();
      setDailyData(dailyData);
    };

    fetchData();
  }, []);

  // Filter for the last month
  const filteredDailyData = dailyData.filter((d) => {
    const date = new Date(d.date);
    return date >= oneMonthAgo && date <= today;
  });

  console.log({filteredDailyData});

  return (
    <main className="min-h-screen flex flex-col justify-start pt-16 pb-12 px-6 md:px-16 lg:px-16 2xl:px-32 bg-parchment-light bg-[url('/noise.png')]">
      <section className="max-w-8xl text-center space-y-4">
        <h1 className="text-4xl md:text-4xl font-title ">
          <Typewriter text="Financial News Sentiment" />
        </h1>
      </section>

      <div className="flex flex-row justify-center-safe mt-8 gap-12 2xl:gap-24">
        <section className="mb-8 w-92">
          <h2 className="text-xl font-semibold mb-2">Today's Headlines</h2>
          <ul className="max-h-96 overflow-y-auto">
            {headlines.map((h, i) => (
              <li
                key={i}

              className="flex flex-row bg-white/80 border-[#8C3B2A] border-t-1 items-center justify-between px-4 py-1 text-sm">
                <div>
                  <p>
                    {h.headline}
                  </p>

                </div>
                <div className={`min-w-10 text-center ${h.score > 0
                  ? "bg-green-200"
                  : h.score < 0
                    ? "bg-red-200"
                    : "bg-yellow-200"
                  }`}>
                  <strong>{h.score.toFixed(2)}</strong>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">Historical Sentiment vs S&P 500</h2>
          <div className="bg-white p-4 rounded shadow">
            <ResponsiveContainer width="100%" height={500} minWidth={700}>
              <LineChart data={filteredDailyData} margin={{top:30, right: 30, left: 30, bottom: 30}}>
                <CartesianGrid strokeDasharray="3 3" />

                {/* X Axis */}
                <XAxis dataKey="date" label={{value:"Date", angle: 0, position: "insideBottom", dy: 20}}  />

                {/* Left Y Axis — aggregate_score */}
                <YAxis
                  yAxisId="left"
                  label={{ value: "Aggregate Score", angle: -90, position: "insideLeft" }}
                />

                {/* Right Y Axis — sp500 */}
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  label={{ value: "S&P 500", angle: 90, position: "insideRight" }}
                />

                <Tooltip />

                {/* Line using left axis */}
                <Line
                  yAxisId="left"
                  type="monotone"
                  dataKey="aggregate_score"
                  stroke="#8884d8"
                  dot={false}
                />

                {/* Line using right axis */}
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="sp500"
                  stroke="#82ca9d"
                  dot={false}
                />

                <Legend verticalAlign="top" height={36} />
              </LineChart>
              
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </main>
  );
}

