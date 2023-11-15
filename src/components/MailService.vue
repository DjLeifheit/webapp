<template>
  <h1>Das ist der test zum senden einer Mail</h1>
  <Button @click="sendmail()">Sende Mail Test</Button>
</template>

<script>
export default {
  name: "MailService",
  data: function () {
    return {};
  },
  methods: {
    sendmail() {
      // eslint-disable-next-line no-undef
      Email.send({
        SecureToken: "6bac97a1-086b-49fb-b7e0-a07d71f5c2e9",
        To: "vincent.rieker@gmail.com",
        From: "vincent.rieker123@gmail.com",
        Subject: "This is the subject",
        Body: "Test",
      }).then((message) => alert(message));
    },
  },
};
</script>
""
<style scoped></style>
