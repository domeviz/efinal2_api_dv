<template>
  <nav class="center-nav">
        <ul>
            <li>
                <router-link to="/token">Token</router-link>
            </li>
            <li>
                <router-link to="/estudiante">Estudiante</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {

}
</script>

<style>
.center-nav {
  display: flex;
  justify-content: center;
  background-color: pink;
  margin-bottom: 50px;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: pink;
}
li {
  float: left;
}
li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}
li a:hover {
  background-color: plum;
}
</style>