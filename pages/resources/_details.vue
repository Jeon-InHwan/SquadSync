<template>
  <div>
    <Sidebar />
    <div class="defaultContainer">
      <img class="id-photo-detail" :src="imageUrl" alt="Placeholder Image" />
      <p class="full-name-detail">Olivia Roberts</p>
      <ul>
        <li>🌟 25 years old</li>
        <li>✨ 5 years of experiences</li>
        <li>🏆 professional NextJS engineer</li>
      </ul>
    </div>
    <div class="skillchart-container">
      <SkillChart />
    </div>
  </div>
</template>

<script>
import Sidebar from '../../components/SideBar.vue'
import SkillChart from '../../components/SkillChart.vue'
export default {
  components: {
    Sidebar,
    SkillChart,
  },
  asyncData({ params }) {
    return {
      fullName: params.fullName,
    }
  },
  data() {
    const fullName = this.$route.params
    const firstName = fullName.details.split(' ')[0]
    return {
      imageUrl: `../../_nuxt/static/${firstName}.jpeg`,
    }
  },
  mounted() {},
  methods: {},
}
</script>

<style>
.defaultContainer {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  top: 90px;
  left: 350px;
  width: 810px;
  height: 360px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.id-photo-detail {
  margin-top: 12px;
  border-radius: 9px;
  margin-bottom: 25px;
  margin-left: 20px;
  width: 110px;
  height: 130px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 7px 4px rgba(0, 0, 0, 0.22);
}

.full-name-detail {
  padding-left: 20px;
  font-size: 22px;
  font-weight: 500;
}

.defaultContainer ul {
  margin-top: 28px;
}

.defaultContainer li {
  padding: 14px;
}

.skillchart-container {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  margin-top: 50px;
  width: 810px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  position: relative;
  top: 90px;
  left: 350px;
}
</style>
