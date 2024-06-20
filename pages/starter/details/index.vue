<template>
  <div class="skills-outer-wrapper">
    <div class="skills-container">
      <h2>{{ starterProject }}</h2>
      <h4>-&nbsp;Skills going to be needed</h4>
      <ul class="detail-skills">
        <li>{{ jsonData.techs.tech1 }}</li>
        <li>{{ jsonData.techs.tech2 }}</li>
        <li>{{ jsonData.techs.tech3 }}</li>
        <li>{{ jsonData.techs.tech4 }}</li>
        <li>{{ jsonData.techs.tech5 }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jsonData() {
      return this.$store.state.jsonData
    },
    starterProject() {
      return this.$store.state.starterProject
    },
  },
}
</script>

<style>
.skills-outer-wrapper {
  grid-column: 2;
  grid-row: 2;
  padding-top: 5%;
  margin: 0 auto;
}
.skills-container {
  margin: 0 auto;
  margin-top: 7%;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: left;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
    0 32px 16px rgba(0, 0, 0, 0.09);
}

.skills-container h2 {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 800;
}

.skills-container h4 {
  font-size: 16px;
  margin-bottom: 20px;
}

.detail-skills li {
  padding: 10px;
  list-style-type: square;
  list-style-position: inside;
}
</style>
