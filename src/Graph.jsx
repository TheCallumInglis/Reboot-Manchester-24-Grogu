import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useState } from "react";

// Register the necessary components with Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Graph({ data }) {
  const [graphSwitch, setGraphSwitch] = useState(true);

  let preNumbers = [];
  let postNumbers = [];
  let monthlySavings = [];
  let labels = [];

  function handleGraphSwitch() {
    setGraphSwitch(!graphSwitch);
  }

  data.savings.postOverpaymentTable.forEach((d, i) => {
    // --alternative code with remaining balance--
    preNumbers.push(data.savings.preOverpaymentTable[i].remainingBalance);
    postNumbers.push(d.remainingBalance < 0 ? 0 : d.remainingBalance);

    monthlySavings.push(data.savings.savingsCalculated[i].savingsAccumulator);
    labels.push(i);
  });

  return (
    <section onClick={handleGraphSwitch}>
      {graphSwitch ? (
        <Line
          key="monthlySavings"
          datasetIdKey="id"
          data={{
            labels,
            datasets: [
              {
                id: 1,
                label: "Before Overpayment",
                data: preNumbers,
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
              },
              {
                id: 2,
                label: "After Overpayment",
                data: postNumbers,
                borderColor: "rgba(54, 162, 235, 1)",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
              },
            ],
          }}
        />
      ) : (
        <Line
          datasetIdKey="id"
          key="totalSavings"
          data={{
            labels,
            datasets: [
              {
                id: 3,
                label: "Total Savings",
                data: monthlySavings,
                borderColor: "rgba(75, 192, 192, 1)",
                backgroundColor: "rgba(75, 192, 192, 0.2)",
              },
            ],
          }}
        />
      )}
    </section>
  );
}
