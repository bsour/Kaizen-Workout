import { Line, Bar, Pie, Doughnut, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

ChartJS.defaults.color = "#d4d4d8";
ChartJS.defaults.borderColor = "#d4d4d8";

const chartOptions = {
  scales: {
    y: {
      ticks: {
        color: "#ffffff",
        font: {
          family: "Orbitron, Arial, sans-serif",
          size: 14,
        },
      },
      grid: {
        color: "rgba(0, 0, 0, 0.2)",
      },
    },
    x: {
      ticks: {
        color: "#ffffff",
        font: {
          family: "Orbitron, Arial, sans-serif",
          size: 14,
        },
      },
      grid: {
        color: "rgba(0, 0, 0, 0.2)",
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: "#ffffff",
        font: {
          family: "Orbitron, Arial, sans-serif",
          size: 14,
        },
      },
    },
  },
  animation: {
    duration: 1000,
    easing: "easeInOutQuart",
  },
  elements: {
    point: {
      borderWidth: 3,
      hoverBorderWidth: 5,
      hoverBackgroundColor: "#d4d4d8",
      hoverBorderColor: "#B0FC04",
      borderColor: "#B0FC04",
      backgroundColor: "#d4d4d8",
    },
    line: {
      borderWidth: 4,
      borderColor: "#B0FC04",
      backgroundColor: "rgba(176, 252, 4, 0.2)",
      tension: 0.4,
    },
    bar: {
      borderWidth: 0,
      backgroundColor: "#d4d4d8",
      borderRadius: 5,
    },
    arc: {
      borderWidth: 3,
      borderColor: "#ffffff",
      backgroundColor: ["#d4d4d8", "#B0FC04", "#d4d4d8"],
    },
  },
};

const Features = () => {
  const features = [
    {
      chart: (
        <Line
          data={{
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
              {
                label: "Weight",
                data: [65, 67, 68, 70, 72, 74],
                fill: true,
                backgroundColor: "rgba(176, 252, 4, 0.2)",
                borderColor: "#B0FC04",
                tension: 0.4,
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: "#B0FC04",
                pointBorderColor: "#ffffff",
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "Weight Tracker",
      desc: "Track your weight progress over time with detailed charts and graphs.",
    },
    {
      chart: (
        <Bar
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                label: "Calories",
                data: [1800, 1900, 2000, 1950, 1800, 2100, 2200],
                backgroundColor: "#B0FC04",
                borderColor: "#d4d4d8",
                borderWidth: 2,
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "Calorie Tracker",
      desc: "Monitor your daily caloric intake and expenditure with detailed visualizations.",
    },
    {
      chart: (
        <Radar
          data={{
            labels: ["Squat", "Bench", "Deadlift", "OHP", "Row"],
            datasets: [
              {
                label: "One Rep Max",
                data: [250, 180, 300, 120, 160],
                backgroundColor: "rgba(212, 212, 216, 0.2)",
                borderColor: "#B0FC04",
                borderWidth: 2,
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "One Rep Max Tracker",
      desc: "Track your progress on various lifts with detailed one-rep max charts.",
      squareChart: true,
    },
    {
      chart: (
        <Doughnut
          data={{
            labels: ["Body Fat", "Lean Mass"],
            datasets: [
              {
                data: [20, 80],
                backgroundColor: ["#d4d4d8", "#B0FC04"],
                borderColor: ["#d4d4d8", "#B0FC04"],
                borderWidth: 2,
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "Body Composition",
      desc: "Track your body fat percentage and lean muscle mass with detailed visualizations.",
      squareChart: true,
    },
    {
      chart: (
        <Pie
          data={{
            labels: ["Cardio", "Strength", "Flexibility"],
            datasets: [
              {
                data: [30, 50, 20],
                backgroundColor: ["#d4d4d8", "#B0FC04", "#ffffff"],
                borderColor: ["#d4d4d8", "#B0FC04", "#ffffff"],
                borderWidth: 2,
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "Workout Planner",
      desc: "Plan and track your workouts with detailed schedules and metrics",
      squareChart: true,
    },
    {
      chart: (
        <Line
          data={{
            labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
            datasets: [
              {
                label: "Squat",
                data: [200, 210, 220, 230],
                fill: true,
                backgroundColor: "rgba(212, 212, 216, 0.2)",
                borderColor: "#d4d4d8",
                tension: 0.4,
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: "#d4d4d8",
                pointBorderColor: "#ffffff",
              },
              {
                label: "Bench",
                data: [160, 165, 170, 175],
                fill: true,
                backgroundColor: "rgba(176, 252, 4, 0.2)",
                borderColor: "#B0FC04",
                tension: 0.4,
                borderWidth: 4,
                pointRadius: 6,
                pointBackgroundColor: "#B0FC04",
                pointBorderColor: "#ffffff",
              },
            ],
          }}
          options={chartOptions}
        />
      ),
      title: "Workout Progress",
      desc: "Track your progress on various lifts over time with detailed graphs.",
    },
  ];
  return (
    <section className="bg-white dark:bg-gray-900 py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div className="max-w-screen-md mb-8 lg:mb-16 mx-auto text-center">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-black dark:text-white md:text-5xl lg:text-6xl">
          Track Your Fitness Journey
        </h2>
        <p className="mt-3 text-lg text-gray-500 dark:text-gray-300">
          Stay motivated and reach your fitness goals with our comprehensive
          tracking tools.
        </p>
      </div>
      <div className="grid gap-8 md:gap-6 md:grid-cols-2 lg:grid-cols-3 md:space-y-0">
        {features.map((item, idx) => (
          <div key={idx} className="space-y-3 w-full mx-auto">
            <div
              className="w-full h-72 bg-black dark:bg-black rounded-lg p-6 flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-700 shadow-lg transition-all duration-300 transform hover:scale-105"
              style={{ padding: "0 20px" }} // Added padding here
            >
              {item.squareChart ? (
                <div className="w-64 h-64">{item.chart}</div>
              ) : (
                item.chart
              )}
            </div>
            <h3 className="text-lg font-bold text-black dark:text-white">
              {item.title}
            </h3>
            <p className="text-gray-500 dark:text-gray-300">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
