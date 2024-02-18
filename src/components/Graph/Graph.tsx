import ReactApexChart from "react-apexcharts";

function Graph() {
  const chartOptions = {
    chart: {
      type: "line",
      toolbar: { show: false },
      zoom: { enabled: false },
      dropShadow: {
        enabled: true,
        top: 0,
        left: 0,
        blur: 10,
        opacity: 0.5,
      },
      animations: {
        enabled: false,
      },
    },
    stroke: {
      show: true,
      curve: "smooth",
      lineCap: "round",
      colors: ["#ffffff"],
      width: 5,
      dashArray: 0,
    },
    markers: {
      size: 0,
      colors: ["#fff"],
      strokeColors: "#fff",
      strokeWidth: 2,
      strokeOpacity: 0.9,
      strokeDashArray: 0,
      fillOpacity: 1,
      discrete: [
        {
          seriesIndex: 0,
          dataPointIndex: 2,
          fillColor: "#fff",
          strokeColor: "#fff",
          size: 6,
          shape: "circle",
        },
      ],
      shape: "circle",
      radius: 5,
      offsetX: 0,
      offsetY: 0,
      onClick: null,
      onDblClick: null,
      showNullDataPoints: true,
      hover: {
        size: 20,
        sizeOffset: 3,
      },
    },
    grid: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    legend: { show: false },
    xaxis: {
      type: "numeric",
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      type: "numeric",
      labels: { show: false },
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "light",
        type: "horizontal",
        shadeIntensity: 0,
        colorStops: [
          [
            {
              offset: 0,
              color: "#fff",
              opacity: 0,
            },
            {
              offset: 30,
              color: "#fff",
              opacity: 0.9,
            },
            {
              offset: 70,
              color: "#fff",
              opacity: 0.9,
            },
            {
              offset: 100,
              color: "#fff",
              opacity: 0,
            },
          ],
        ],
      },
    },
    series: [
      {
        name: "Temperature",
        data: [12, 14, 13, 16, 12],
        zIndex: 0,
      },
    ],
  };

  return (
    <>
      <ReactApexChart
        options={chartOptions}
        series={chartOptions.series}
        type="line"
        height={200}
      />
    </>
  );
}

export default Graph;
