<template>
  <div class="outerOuterWrapper">
    <div class="grid-container">
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Alexander.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Alexander Johnson</p>
        <ul>
          <li>🌟 32 years old</li>
          <li>✨ 7 years of experiences</li>
          <li>🏆 professional Network engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Sophia.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Sophia Williams</p>
        <ul>
          <li>🌟 29 years old</li>
          <li>✨ 5 years of experiences</li>
          <li>🏆 professional Java engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Liam.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Liam Thompson</p>
        <ul>
          <li>🌟 24 years old</li>
          <li>✨ 3 years of experiences</li>
          <li>🏆 professional NextJS engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Olivia.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Olivia Roberts</p>
        <ul>
          <li>🌟 25 years old</li>
          <li>✨ 5 years of experiences</li>
          <li>🏆 professional NextJS engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Ethan.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Ethan Davis</p>
        <ul>
          <li>🌟 32 years old</li>
          <li>✨ 9 years of experiences</li>
          <li>🏆 professional Python engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
      <div class="resources">
        <img
          class="id-photo"
          src="../../static/Isabella.jpeg"
          alt="Placeholder Image"
        />
        <p class="full-name">Isabella Wilson</p>
        <ul>
          <li>🌟 22 years old</li>
          <li>✨ 1 years of experiences</li>
          <li>🏆 Junior Java engineer</li>
        </ul>
        <p class="details-click" @click="forSkillDetails($event)">
          ▸ More details for skills
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    forSkillDetails(event) {
      const fullName = event.target.parentElement.children[1].innerText
      this.$router.push({
        path: `/resources/${fullName}`,
        query: {},
      })
    },
  },
}
</script>

<style>
.outerOuterWrapper {
  grid-column: 2;
  grid-row: 2;
  padding-top: 5%;
  margin: 0 auto;
}
.grid-container {
  background-color: #cdd9c8;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 60px;
  gap: 35px;
  width: 800px;
  height: 1450px;
  justify-content: center;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
  margin-bottom: 50px;
}

.resources {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  height: 410px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
}

.full-name {
  padding-left: 20px;
  font-size: 22px;
  font-weight: 500;
}

.resources ul {
  margin-top: 28px;
}

.resources li {
  padding: 14px;
}

.grid-container .details-click {
  margin-top: 50px;
  font-weight: 500;
  font-size: 18px;
  text-decoration: underline !important;
  padding-left: 20px;
}

.grid-container .details-click:hover {
  cursor: pointer;
}

.id-photo {
  margin-top: 12px;
  border-radius: 9px;
  margin-bottom: 25px;
  margin-left: 20px;
  width: 90px;
  height: 110px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 7px 4px rgba(0, 0, 0, 0.22);
}
</style>
