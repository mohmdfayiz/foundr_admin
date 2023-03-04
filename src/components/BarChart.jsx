import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJs } from "chart.js/auto";

function BarChart({ chartData }) {
  return ChartJs && <Bar data={chartData} />;
}

export default BarChart;
