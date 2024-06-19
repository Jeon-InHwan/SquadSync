<template>
  <div>
    <Sidebar />
    <div class="card-container">
      <div class="card">
        <img src="../static/OpenAI.png" alt="Placeholder Image" />
        <div class="card-content">
          <h3>Open AI</h3>
          <p>OpenAI is an AI research and deployment company.</p>
          <button @click="goForOpenAI">Read More</button>
        </div>
      </div>
      <div class="card2">
        <img src="../static/LangChain.png" alt="Placeholder Image" />
        <div class="card-content">
          <h3>LangChain</h3>
          <p>LangChain is the platform of building AI apps.</p>
          <button @click="goForLangChain">Read More</button>
        </div>
      </div>
      <!--
      <div class="card3">
        <img src="../static/chatgpt.svg" alt="Placeholder Image" />
        <div class="card-content">
          <h3>ChatGPT</h3>
          <p>Description of the card content goes here.</p>
          <button @click="goForSpider">Read More</button>
        </div>
      </div>
      <div class="card4">
        <img src="../static/dataSpider.webp" alt="Placeholder Image" />
        <div class="card-content">
          <h3>HULFT Data Spider</h3>
          <p>Description of the card content goes here.</p>
          <button @click="goForSpider">Read More</button>
        </div>
      </div>
       -->
    </div>
  </div>
</template>

<script>
import Sidebar from '../components/SideBar.vue'

export default {
  components: {
    Sidebar,
  },
  methods: {
    goForOpenAI() {
      const url = 'https://openai.com/'

      window.open(url, '_blank')
    },
    goForLangChain() {
      const url = 'https://www.langchain.com/'

      window.open(url, '_blank')
    },
  },
}
</script>

<style>
/* 본문 영역 스타일 */
.content {
  position: absolute;
  top: 75px;
  left: 290px;
  padding: 20px;
}

.card {
  position: absolute;
  top: 130px;
  left: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* 카드의 너비 */
}

.card2 {
  position: absolute;
  top: 130px;
  left: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* 카드의 너비 */
}

.card3 {
  position: absolute;
  top: 700px;
  left: 400px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* 카드의 너비 */
  overflow: hidden;
}

.card4 {
  position: absolute;
  top: 700px;
  left: 800px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  width: 300px; /* 카드의 너비 */
}

.card img {
  width: 100%;
  height: 310px;
  background-color: white;
}

.card2 img {
  width: 100%;
  height: 310px;
  background-color: white;
}

.card3 img {
  width: 100%;
  height: 310px;
}

.card4 img {
  width: 100%;
  height: 310px;
}

.card-content {
  padding: 20px;
  height: 169px;
}

.card-content h3 {
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: 600;
}

.card-content p {
  padding-top: 10px;
  height: 70px;
  margin-bottom: 5px;
}

.card-content button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card-content button:hover {
  background-color: #0056b3;
}
</style>
