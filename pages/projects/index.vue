<template>
  <div class="tableWrapper">
    <div class="table-title">
      <h3>Projects on process</h3>
    </div>
    <table class="table-fill">
      <thead>
        <tr>
          <th class="-letextft">Project ID</th>
          <th class="text-left">Project Name</th>
          <th class="text-left">Project Manager</th>
          <th class="text-left">Status</th>
        </tr>
      </thead>
      <tbody class="table-hover">
        <tr @click="handleClick($event)">
          <td class="text-left">20240115</td>
          <td class="text-left">Migration to Cloud for Mega-bank</td>
          <td class="text-left">James Miller</td>
          <td class="text-left">On progress</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240228</td>
          <td class="text-left">AI Chatbot Implementation Project</td>
          <td class="text-left">Mark Jukerbug</td>
          <td class="text-left">On progress</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240312</td>
          <td class="text-left">New transition system for postoffice</td>
          <td class="text-left">Joe Biden</td>
          <td class="text-left">Suspended</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240401</td>
          <td class="text-left">Website Redesign Project</td>
          <td class="text-left">Emily Johnson</td>
          <td class="text-left">On progress</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240425</td>
          <td class="text-left">Data Analytics Implementation</td>
          <td class="text-left">Sarah Smith</td>
          <td class="text-left">Suspended</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240505</td>
          <td class="text-left">Mobile App Development Project</td>
          <td class="text-left">David Brown</td>
          <td class="text-left">Suspended</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240512</td>
          <td class="text-left">AI Integration for Healthcare</td>
          <td class="text-left">Lisa Taylor</td>
          <td class="text-left">On progress</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240523</td>
          <td class="text-left">Mobile App Development Project</td>
          <td class="text-left">David Brown</td>
          <td class="text-left">Suspended</td>
        </tr>
        <tr @click="handleClick($event)">
          <td class="text-left">20240611</td>
          <td class="text-left">New transition system for Government</td>
          <td class="text-left">Chris Lee</td>
          <td class="text-left">On progress</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick(event) {
      const projectId =
        event.target.parentElement.children[0].firstChild.textContent

      const projectName =
        event.target.parentElement.children[1].firstChild.textContent

      const projectManager =
        event.target.parentElement.children[2].firstChild.textContent

      const status =
        event.target.parentElement.children[3].firstChild.textContent

      this.$router.push({
        path: `/projects/${projectId}`,
        query: {
          projectName: `${projectName}`,
          projectManager: `${projectManager}`,
          status: `${status}`,
        },
      })
    },
  },
}
</script>

<style>
.tableWrapper {
  grid-column: 2;
  grid-row: 2;
  width: 850px;
  margin: 0 auto;
  padding-top: 5%;
}

.table-title {
  padding: 5px;
}

.table-title h3 {
  color: #272727;
  font-size: 30px;
  font-weight: 500;
  font-style: normal;
  font-family: 'Roboto', helvetica, arial, sans-serif;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  margin-bottom: 18px;
}

/*** Table Styles **/

.table-fill {
  background: white;
  border-radius: 3px;
  border-collapse: collapse;
  height: 600px;
  margin: auto;
  padding: 5px;
  width: 100%;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
  animation: float 5s infinite;
}

th {
  color: #d5dde5;
  background: #1b1e24;
  border-bottom: 4px solid #9ea7af;
  border-right: 1px solid #343a45;
  font-size: 20px;
  font-weight: 400;
  padding: 12px;
  text-align: left;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  vertical-align: middle;
}

th:first-child {
  border-top-left-radius: 3px;
}

th:last-child {
  border-top-right-radius: 3px;
  border-right: none;
}

tr {
  border-top: 1px solid #c1c3d1;
  color: #666b85;
  font-size: 12px;
  font-weight: normal;
  text-shadow: 0 1px 1px rgba(256, 256, 256, 0.1);
}

tr:hover td {
  background: #4e5066;
  color: #ffffff;
  border-top: 1px solid #22262e;
  cursor: pointer;
}

tr:first-child {
  border-top: none;
}

tr:last-child {
  border-bottom: none;
}

tr:nth-child(odd) td {
  background: #ebebeb;
}

tr:nth-child(odd):hover td {
  background: #4e5066;
}

tr:last-child td:first-child {
  border-bottom-left-radius: 3px;
}

tr:last-child td:last-child {
  border-bottom-right-radius: 3px;
}

td {
  background: #ffffff;
  padding: 8px;
  text-align: left;
  vertical-align: middle;
  font-weight: 400;
  font-size: 18px;
  text-shadow: -1px -1px 1px rgba(0, 0, 0, 0.1);
  border-right: 1px solid #c1c3d1;
}

td:last-child {
  border-right: 0px;
}

th.text-left {
  text-align: left;
}

th.text-center {
  text-align: center;
}

th.text-right {
  text-align: right;
}

td.text-left {
  text-align: left;
}

td.text-center {
  text-align: center;
}
</style>
