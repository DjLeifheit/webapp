<template>
  <div id="app">
    <div class="navbar">
      <div class="logo">
        <img
          :src="'src/assets/images/Ebe Sponsor Ohne Sonntag Klein PNG.png'"
          :width="250"
          :height="141"
        />
        <span>Restaurant</span>
      </div>
      <div class="links">
        <a href="/">Startseite</a>
        <a href="/speisekarte">Speisekarte</a>
        <a href="/getraenkekarte">Getränkekarte</a>
        <a href="/">Dienste</a>
        <a href="/oeffnungszeiten">Öffnungszeiten</a>
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
