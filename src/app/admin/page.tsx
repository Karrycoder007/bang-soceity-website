"use client";

import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function Dashboard() {
  // Dummy user categories data
  const userData = {
    labels: ["Paid Members", "Free Members", "Pending Payment"],
    datasets: [
      {
        label: "Users",
        data: [45, 30, 15], // example numbers
        backgroundColor: [
          "rgba(34, 197, 94, 0.7)", // green-500
          "rgba(59, 130, 246, 0.7)", // blue-500
          "rgba(234, 179, 8, 0.7)",  // yellow-500
        ],
        borderColor: [
          "rgba(34, 197, 94, 1)",
          "rgba(59, 130, 246, 1)",
          "rgba(234, 179, 8, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="p-20 bg-gray-900 rounded-md min-h-full text-gray-100 flex gap-8 items-center">
      <div style={{ width: 250, height: 250 }}>
        <Pie data={userData} />
      </div>

      <table className="table-auto border-collapse border border-gray-600 text-gray-200 w-64">
        <thead>
          <tr>
            <th className="border border-gray-600 px-4 py-2 text-left">Category</th>
            <th className="border border-gray-600 px-4 py-2 text-right">Users</th>
          </tr>
        </thead>
        <tbody>
          {userData.labels.map((label, idx) => (
            <tr key={label} className="even:bg-gray-700">
              <td className="border border-gray-600 px-4 py-2">{label}</td>
              <td className="border border-gray-600 px-4 py-2 text-right">{userData.datasets[0].data[idx]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
