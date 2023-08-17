<template>
  <div class="wrapper">
    <nav id="sidebar" :class="{ active: sidebarOpen }">
      <div class="sidebar-header">
        <img
          alt="Nemo_Sidebar"
          class="logo"
          src="../assets/Ebe.png"
          width="220"
        />
      </div>

      <ul class="styled component">
        <li>
          <router-link
            :to="{ name: 'home' }"
            style="
              top: 5px;
              font-family: 'JetBrains Mono ExtraLight';
              color: #fda401;
            "
            >{{ $t("sidebar.login") }}</router-link
          >
        </li>
        <li>
          <button style="top: 10px" @click="logout" class="logout-button">
            <i class="bi bi-box-arrow-right logout-icon"></i>
          </button>
        </li>
        <li>
          <router-link
            :to="{ name: 'patientenliste' }"
            style="
              top: 100px;
              font-family: 'JetBrains Mono ExtraLight';
              color: #fda401;
            "
            >{{ $t("sidebar.patientList") }}</router-link
          >
        </li>
        <li>
          <router-link
            :to="{ name: 'patienthinzufuegen' }"
            style="
              top: 140px;
              font-family: 'JetBrains Mono ExtraLight';
              color: #fda401;
            "
            >{{ $t("sidebar.addPatient") }}</router-link
          >
        </li>
      </ul>
      <button type="button" id="sidebarCollapse" class="btn btn-info">
        <i class="fas fa-align-left"></i>
      </button>
    </nav>

    <!-- Page Content -->
    <div id="content">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid"></div>
      </nav>
      <div class="container"></div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Sidebar",

  data() {
    return {
      sidebarOpen: false, // Sidebar ist standardmäßig geschlossen
    };
  },
  mounted() {
    // Funktion zum Öffnen der Sidebar
    document
      .querySelector("#sidebarCollapse")
      .addEventListener("click", this.toggleSidebar);
  },
  methods: {
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    logout() {
      sessionStorage.removeItem("token");
      alert(this.$t("sidebar.logoutAlert"));
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#sidebar {
  height: 100%;
  position: fixed;
  z-index: 1;
  top: 0;
  left: -200px;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  background-color: #111828;
}

#sidebar.active {
  left: 0;
}

.sidebar-header {
  padding: 20px;
}

.sidebar-header h3 {
  color: #283e56;
  font-family: "JetBrains Mono ExtraLight";
  font-size: 20px;
  font-weight: bold;
}

.components li a {
  color: #fff;
}

/* Page Content */
#content {
  width: 100%;
  padding: 15px;
}

/* Button */
#sidebarCollapse {
  background-color: #fda401;
  border: none;
  color: white;
  padding: 5px 500px;
  margin-right: 15px;
  border-radius: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;
  position: absolute;
  top: 10px;
  right: 5px;
}

#sidebarCollapse:hover {
  background-color: #1f2c41;
  cursor: pointer;
}

#sidebarCollapse.active i {
  transform: rotate(90deg);
}

#sidebarCollapse i {
  margin-right: 10px;
}

.list-unstyled.components a {
  font-size: 1.2rem;
}

.list-unstyled.components a:hover {
  color: #ffc107;
}

span {
  left: 200px;
}
</style>
