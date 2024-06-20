<template>
  <div class="background">
    <nav class="nav">
      <div class="logo">
        <NuxtLink to="/">
          <img class="logoSvg" src="../static/company.svg" alt="Logo SVG" />
        </NuxtLink>
      </div>
      <span class="subheader">Build the best team with best schedule</span>
      <ul>
        <li class="login_btn"><NuxtLink to="/main">SIGN IN</NuxtLink></li>
      </ul>
    </nav>

    <template v-if="shouldDisplaySidebar">
      <Sidebar />
    </template>
    <nuxt />
  </div>
</template>

<script>
import Sidebar from '../components/SideBar.vue'
export default {
  components: {
    Sidebar,
  },
  computed: {
    shouldDisplaySidebar() {
      return this.$route.path !== '/'
    },
  },
}
</script>

<style>
/*  For initializing CSS to zero  */
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}

body {
  padding-bottom: 100px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  color: #3c3c3c;
  font-size: 18px;
}

a {
  color: inherit;
  text-decoration: none;
}

/*  CSS for navigation  */

body {
  background-image: url('../static/backImg.png');
  background-repeat: no-repeat;
  background-attachment: fixed;
}

body::before {
  content: '';
  z-index: -1;
  background: inherit;
  background-size: cover;
  background-position: center;
}

.background {
  display: grid;
  grid-template-columns: 290px 1fr;
  grid-template-rows: 75px 1fr;
  height: 100vh;
}

.nav {
  grid-column: 1 / 3;
  grid-row: 1;
  background-color: #272727;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0px;
  width: 100%;
  height: 75px;
}

.logo {
  padding: 1px 12px;
  height: 100%;
  width: 300px;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo a {
  white-space: nowrap;
  width: 280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logoSvg {
  width: 220px;
  vertical-align: middle;
}

.subheader {
  position: absolute;
  right: 14%;
  width: max-content;
  color: #ccc;
  font-size: 22px;
}

a {
  text-decoration: none;
  cursor: pointer;
}

.login_btn {
  padding-right: 455px;
  padding: 12px 25px;
  border: 1px solid transparent;
  border-radius: 4px;
  background-color: transparent;
  outline: none;
  font-family: inherit;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.15384615;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  margin: 40px;
  background-color: whitesmoke;
}
.login_btn:hover {
  opacity: 0.7;
}
</style>
