<template>
  <div id="app">
    <div class="navbar">
      <div class="logo">
        <img src="Ebe%20Sponsor%20Ohne%20Sonntag%20PNG.png" alt="Logo" />
        <span>Restaurant</span>
      </div>
      <div class="links">
        <a href="#">Startseite</a>
        <a href="#">Speisekarte</a>
        <a href="#">Reservieren</a>
        <a href="#">Kontakt</a>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
/* Fügen Sie hier Ihren CSS-Code hinzu */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  padding: 10px;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  width: 30px;
  height: auto;
  margin-right: 10px;
}

.links {
  display: flex;
  align-items: center;
}

.links a {
  color: white;
  text-decoration: none;
  margin: 0 10px;
}
</style>
