<template>
  <div id="app">
    <div class="navbar">
      <div class="rechts">
        <router-link to="/dienste">Entertainment</router-link>
        <router-link to="/oeffnungszeiten">Öffnungszeiten</router-link>
        <router-link to="/events">Events</router-link>
        <div class="logoLink">
          <router-link to="/">
            <img
              class="EbeLogo"
              alt="'Ebe Logo'"
              src="./../assets/Images/LogoZumEbeAktuelZ.png"
              width="250"
              height="100"
            />
          </router-link>
        </div>
        <router-link to="/speisekarte">Speisekarte</router-link>
        <router-link to="/getraenkekarte">Getränkekarte</router-link>
        <button class="insta" @click="insta">
          <img
            class="EbeLogo"
            alt="'Ebe Logo'"
            src="./../assets/Images/instagram-logo-cdce305708e9ff1f2f9c8fb68dc78a53.png"
            width="154"
            height="40"
          />
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    insta() {
      window.open("https://www.instagram.com/v.m.r16/?next=%2F", "_blank");
    },
  },
};
</script>
<style scoped>
/* Fügen Sie hier Ihren CSS-Code hinzu */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  color: white;
  padding: 10px;
}

.logo {
  display: flex;
  align-items: center;
  height: 50px;
}

.logo img {
  width: 30px;
  height: auto;
  margin-right: 10px;
}
.rechts {
  display: flex;
  align-items: center;
}
.rechts a {
  font-size: x-large;
  color: black;
  text-decoration: none;
  background-color: white;
  margin: 0 30px;
}
.links {
  display: flex;
  align-items: center;
}
.links a {
  font-size: larger;
  color: black;
  text-decoration: none;
  background-color: white;
  margin: 0 20px;
}
.insta {
  background: inherit;
  border: inherit;
}
</style>
