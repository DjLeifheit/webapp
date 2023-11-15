<template>
  <header>
    <div>
      <h1>
        Hier können wir zukünftige Events eintragen wie Weihnachtsspecial,
        Oktoberfest Fasching usw
      </h1>
    </div>
  </header>
  <body>
    <MailService></MailService>
  </body>
</template>
<script>
import MailService from "@/components/MailService.vue";

export default {
  name: "EventsviewEbe",
  components: { MailService },
};
</script>

<style scoped>
h1 {
  color: #222222;
}
</style>
