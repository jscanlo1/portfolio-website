import { NextResponse } from "next/server";

type DailyAggregate = {
  date: string;
  aggregate_score: number;
  sp500: number;
};

export async function GET() {

  const dailyAggregates: DailyAggregate[] = [
    { date: "2026-01-01", aggregate_score: 0.71, sp500: 100 },
    { date: "2026-01-02", aggregate_score: -0.10, sp500:120 },
    { date: "2026-01-03", aggregate_score: 0.54, sp500: 123 },
    { date: "2026-01-04", aggregate_score: -0.22, sp500: 125 },
    { date: "2026-01-05", aggregate_score: 0.33, sp500: 125  },
  ];

  return NextResponse.json(
    dailyAggregates,
  );
}
