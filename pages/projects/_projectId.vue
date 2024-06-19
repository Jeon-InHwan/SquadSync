<template>
  <div>
    <div class="container">
      <Sidebar />
      <div class="project_summary_container">
        <p id="project_name_p">{{ $route.query.projectName }}</p>
        <pre>
PROJECT ID            :    {{ $route.params.projectId }}
PROJECT Manager :    {{ $route.query.projectManager }}
</pre
        >
        <div id="forStatusChange" class="status_div">
          <p>{{ $route.query.status }}</p>
        </div>
      </div>
    </div>
    <GraphChart />
  </div>
</template>

<script>
import Sidebar from '../../components/SideBar.vue'
import GraphChart from '../../components/GraphChart.vue'

export default {
  components: {
    Sidebar,
    GraphChart,
  },
  asyncData({ params, query }) {
    return {
      projectId: params.projectId,
      additionalInfo: query,
    }
  },
  mounted() {
    const status = this.$route.query.status
    if (status === 'Suspended') {
      const statusDiv = document.getElementById('forStatusChange')
      statusDiv.style.backgroundColor = '#F44336'
      statusDiv.style.border = '4px solid #D43A2F'
    }
  },

  methods: {},
}
</script>

<style>
.project_summary_container {
  background-color: aliceblue;
  border-radius: 15px;
  padding: 30px;
  width: 400px;
  height: 90px;
  margin-top: 90px;
  margin-left: 400px;
  vertical-align: middle;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

#project_name_p {
  font-size: 22px;
  font-weight: 700;
  padding: 0px 0px 20px 0px;
  white-space: pre;
}

.project_summary_container p {
  white-space: pre;
}

.status_div {
  position: relative;
  border-radius: 5px;
  border: 4px solid #17b75e;
  padding: 6px 10px 6px 10px;
  text-align: center;
  vertical-align: middle;
  width: fit-content;
  height: 24px;
  top: -135px;
  right: -300px;
  background-color: #03c75a;
  color: white;
  text-transform: uppercase;
}

.status_div p {
  padding-top: 2px;
}

.graphContainer {
  background-color: aliceblue;
  border-radius: 15px;
  padding: 30px;
  width: 400px;
  height: 190px;
  margin-top: 200px;
  margin-left: 400px;
  vertical-align: middle;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}
</style>
