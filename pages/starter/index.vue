<template>
  <div>
    <Sidebar />
    <div class="starter-container">
      <h2>Start a new project</h2>
      <input
        v-model="summary"
        type="text"
        placeholder="Plase input the project's summary for AI auto completion..."
        required
      />
      <button @click="goNext">Start with AI auto completion</button>
    </div>
    <div v-if="loading" id="loader" class="loader" ></div>
    <div v-if="data" class="model-response-container">
      <p id="ai-response">
        <ul>
          <li>{{ data.techs.tech1 }}</li>
          <li>{{ data.techs.tech2 }}</li>
          <li>{{ data.techs.tech3 }}</li>
          <li>{{ data.techs.tech4 }}</li>
          <li>{{ data.techs.tech5 }}</li>
        </ul>
      </p>
      <NuxtLink v-if="data" to="/" class="nextPageBtn">Next step</NuxtLink>
    </div>
   
  </div>
</template>

<script>
import Sidebar from '../../components/SideBar.vue'

export default {
  components: {
    Sidebar,
  },
  data() {
    return {
      summary: '',
      loading: false,
      data: null,
    }
  },
  methods: {
    async goNext() {
      this.loading = true
      this.data = null
      await this.$axios
        .$get('http://127.0.0.1:5000', {
          params: {
            project: this.summary,
          },
        })
        .then((res) => {
          const lastIndex = res.lastIndexOf('}')
          let resultString

          if (lastIndex !== -1) {
            resultString = res.substring(0, lastIndex + 1)
          }
          this.data = JSON.parse(resultString)
        })
        .catch((error) => {
          console.log(error)
        })
      this.loading = false
    },
  },
  nextPage(){

  }
}
</script>

<style>
.starter-container {
  margin: 0 auto;
  margin-top: 7%;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
    0 32px 16px rgba(0, 0, 0, 0.09);
}

.starter-container h2 {
  margin-bottom: 35px;
  font-size: 36px;
  font-weight: 800;
}

.starter-container input[type='text'],
.starter-container button {
  width: calc(100% - 20px);
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

.starter-container button {
  background-color: #2d6da9;
  font-size: 21px;
  font-weight: 500;
  color: #fff;
  border: none;
  cursor: pointer;
}

.starter-container button:hover {
  background-color: #024fa7;
}

.model-response-container {
  margin: 0 auto;
  margin-top: 40px;
  background-color: #fff;
  border-radius: 8px;
  padding: 40px 40px 40px 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
    0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
    0 32px 16px rgba(0, 0, 0, 0.09);
}

.loader {
  margin: 0 auto;
  margin-top: 120px;
  border: 12px solid rgba(255, 255, 255, 0.3);
  border-top: 12px solid #2d6da9;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

#ai-response p {
  margin-left: 40px;
}

#ai-response {
  text-align: left;
  font-size: 20px;
}

#ai-response li {
  padding: 10px;
  list-style-type: square;
  list-style-position: inside;
}

.nextPageBtn {
  display: inline-block;
  padding: 10px;
  margin-top: 50px;
  background-color: #44a246;
  font-size: 21px;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  width: 480px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

.nextPageBtn:hover {
  background-color: #428e4E;
}
</style>
