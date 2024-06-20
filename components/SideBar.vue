<template>
  <div class="sidebar">
    <h2>Contents</h2>
    <ul>
      <li><NuxtLink to="/projects">▸ Projects on process</NuxtLink></li>
      <li><NuxtLink to="/resources">▸ Human resources available</NuxtLink></li>
      <li><NuxtLink to="/starter">▸ Start a new project</NuxtLink></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'SideBar',
}
</script>

<style>
.sidebar {
  grid-column: 1;
  grid-row: 2 / 3;
  width: 250px;
  padding: 20px;
  height: 180vh;
  background: #abbaab;
  background: -webkit-linear-gradient(to right, #ffffff, #abbaab);
  background: linear-gradient(to right, #ffffff, #abbaab);
}

.sidebar h2 {
  margin: 15px 0px 30px 0px;
  font-weight: 700;
  font-size: 30px;
}

.sidebar li {
  padding: 14px 0px;
}

.sidebar li a:hover {
  font-weight: 600;
}
</style>
