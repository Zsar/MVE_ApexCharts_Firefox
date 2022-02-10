import ApexCharts from "apexcharts";

class SeriesEntry {
  constructor(public name: string, public color: string, public data: number[]) {}
}

const options: ApexCharts.ApexOptions = {
  chart: {
    background: "#777777",
    type: 'area',
    stacked: true,
  },
  series: [
    new SeriesEntry("Black", "#000000", [2, 1, 2]),
    new SeriesEntry("White", "#ffffff", [2, 3, 2])
  ],
  dataLabels: {
    enabled: false
  },
  fill: {
    type: 'solid',
    opacity: 1,
  },
}
const chart = new ApexCharts(document.querySelector("#chart"), options)
chart.render().then(undefined)
