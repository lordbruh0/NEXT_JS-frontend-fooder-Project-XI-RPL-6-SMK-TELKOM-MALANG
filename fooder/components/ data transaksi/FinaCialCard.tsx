import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Pastikan untuk menginstal chart.js dan react-chartjs-2 jika belum
// npm install chart.js react-chartjs-2

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FinancialCard = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Income',
        data: [1000, 2200, 3000, 2500, 4200, 5000, 4500],
        borderColor: '#48BB78',
        backgroundColor: 'rgba(72, 187, 120, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Expense',
        data: [0, 1200, 2000, 1500, 3200, 5000, 5500],
        borderColor: '#F45846',
        backgroundColor: 'rgba(244, 88, 70, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="rounded-lg p-6">
      {/* Financial Overview */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-black text-gray-700">$21.3k</h1>
          <p className="text-sm text-gray-400">Financial Overview</p>
        </div>
        <div>
          <p className="text-xs text-green-600">+ $40,000 Income</p>
          <p className="text-xs text-[#F45846]">- $2,000 Expense</p>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className="mt-6">
        <Line data={data} options={{ responsive: true }} />
      </div>

      {/* Date Label */}
      <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#48BB78] rounded-full mr-2"></div>
          <span>Income</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#F45846] rounded-full mr-2"></div>
          <span>Expense</span>
        </div>
      </div>
      <p className="text-xs text-gray-500 text-right">Thu 12</p>
    </div>
  );
};

export default FinancialCard;
