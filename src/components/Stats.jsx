import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = ({ properties }) => {
  // Calculate Check-Ins and Check-Outs
  const checkIns = properties.filter(
    (property) => property.status === "Available"
  ).length;
  const checkOuts = properties.filter(
    (property) => property.status === "Rented"
  ).length;

  // Data for Pie Chart
  const chartData = {
    labels: ["Check-Ins (Available)", "Check-Outs (Rented)"],
    datasets: [
      {
        data: [checkIns, checkOuts], // Correct data as an array of numbers
        backgroundColor: ["#86EFAC", "#FCA5A5"],
        hoverBackgroundColor: ["#66BB6A", "#EF5350"],
      },
    ],
  };

  // Calculate total for percentage calculations in tooltips
  const total = checkIns + checkOuts;

  // Chart options with percentage tooltips
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: ${percentage}%`;
          },
        },
      },
    },
  };

  return (
    <div>
      {/* Stats Display */}
      <div className="grid grid-cols-2 gap-4 text-center my-4">
        <div className="bg-green-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Check-Ins</h2>
          <p className="text-2xl">{checkIns}</p>
        </div>
        <div className="bg-red-200 p-4 rounded shadow">
          <h2 className="text-xl font-bold">Check-Outs</h2>
          <p className="text-2xl">{checkOuts}</p>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-4 rounded shadow-md mt-4">
        <h2 className="text-xl font-bold mb-4">Property Stats</h2>
        <div style={{ width: "300px", height: "300px", margin: "0 auto" }}>
          <Pie data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default Stats;
