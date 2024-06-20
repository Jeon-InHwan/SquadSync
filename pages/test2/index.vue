<template>
  <div class="container">
    <div class="navbar">Navigation Bar</div>
    <div class="sidebar">Sidebar</div>
    <div class="main-content">
      <div class="onetwo">
        <ul>
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
          <li>test4</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.container {
  display: grid;
  grid-template-columns: 250px 1fr; /* side bar와 main content 영역 설정 */
  grid-template-rows: 75px 1fr; /* navigation bar와 main content 영역 설정 */
  height: 100vh; /* 화면 전체 높이 */
  background-color: aqua;
}

.navbar {
  grid-column: 1 / 3; /* navigation bar가 전체 너비를 차지하도록 설정 */
  grid-row: 1; /* 첫 번째 row에 위치 */
  background-color: #333; /* 예시로 navigation bar의 배경색 설정 */
  color: white; /* 예시로 navigation bar의 텍스트 색상 설정 */
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  background-color: bisque;
}

.sidebar {
  grid-column: 1; /* 첫 번째 column에 위치 */
  grid-row: 2 / 3; /* 두 번째 row에 위치 */
  background-color: lightblue; /* 예시로 sidebar의 배경색 설정 */
  height: 100%; /* 화면 전체 높이 차지 */
  /* 기타 스타일링 */
  background-color: chocolate;
}

.main-content {
  grid-column: 2; /* 두 번째 column에 위치 */
  grid-row: 2; /* 두 번째 row에 위치 */
  background-color: lightgray; /* 예시로 main content의 배경색 설정 */
  /* 기타 스타일링 */

  background-color: crimson;
}

.onetwo {
  margin: 0 auto;
  width: 400px;
  height: 500px;
  background-color: darkturquoise;
}
</style>
