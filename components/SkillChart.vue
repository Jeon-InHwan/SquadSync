<template>
  <client-only>
    <ApexCharts
      width="810"
      type="radar"
      :options="chartOptions"
      :series="series"
    ></ApexCharts>
  </client-only>
</template>

<script>
export default {
  components: {
    ApexCharts: async () => await import('vue-apexcharts'),
  },
  data() {
    return {
      chartOptions: {
        chart: {
          height: 400,
          type: 'radar',
        },
        colors: ['#FF4560'],
        markers: {
          size: 4,
          colors: ['#fff'],
          strokeColor: '#FF4560',
          strokeWidth: 2,
        },
        dataLabels: {
          enabled: true,
        },
        plotOptions: {
          radar: {
            size: 140,
            polygons: {
              strokeColors: '#e9e9e9',
              fill: {
                colors: ['#f8f8f8', '#fff'],
              },
            },
          },
        },
        yaxis: {
          stepSize: 20,
          labels: {
            style: {
              fontSize: '12px',
            },
          },
        },
        xaxis: {
          categories: [
            'Tech',
            'Communications',
            'Teamwork',
            'Experiences',
            'Leadership',
            'Adaptability',
          ],
          labels: {
            style: {
              fontSize: '18px',
            },
          },
        },
      },
      series: [
        {
          name: 'points',
          data: [80, 60, 90, 90, 40, 70],
        },
      ],
    }
  },
}
</script>

<style></style>
