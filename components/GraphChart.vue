<template>
  <client-only>
    <div id="test">
      <ApexCharts
        width="850"
        type="line"
        :options="chartOptions"
        :series="series"
      ></ApexCharts>
    </div>
  </client-only>
</template>

<script>
export default {
  components: {
    ApexCharts: () => import('vue-apexcharts'),
  },
  data() {
    return {
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        },
        yaxis: {
          max: 100,
        },
        forcastDataPoints: {
          count: 11,
        },
        stroke: {
          width: 5,
          curve: 'smooth',
        },
        xaxis: {
          tickAmount: 10,

          categories: [
            '5月',
            '6月',
            '7月',
            '8月',
            '9月',
            '10月',
            '11月',
            '12月',
            '1月',
            '2月',
            '3月',
          ],
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'dark',
            gradientToColors: ['#FDD835'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100, 100, 100],
          },
        },
      },
      series: [
        {
          name: '進捗率',
          data: [10, 13, 26, 28, 45, 63, 75, 87],
        },
      ],
    }
  },
}
</script>

<style>
#test {
  margin-top: 80px;
  margin-left: 380px;
}
</style>
