<template>
  <section id="contact">
    <p class="subtitle">Contact me for your next Project</p>
    <p>(or anything, really)</p>
    <div class="card">
      <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true" id="contact-form">
        <div class="hidden">
          <label>
            Don’t fill this out if you're human:
            <input name="bot-field" />
          </label>
        </div>
        <input type="hidden" name="form-name" value="contact" />
        <div class="form-field">
          <label for="name">Your Name:</label>
          <input type="text" name="name" required />
        </div>
        <div class="form-field">
          <label form="email">
            Email:
          </label>
          <input type="text" name="email" required />
        </div>
        <div class="form-field">
          <label for="message">
            Message:
          </label>
          <textarea name="message" required></textarea>
        </div>
        <div class="form-field button">
          <button type="submit">Send Email</button>
        </div>
      </form>
    </div>
  </section>
</template>

<style>
#contact-form {
  width: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.form-field {
  flex: 0 0 70%;
  min-width: 280px;
}

label {
  margin-top: 10px;
  display: block;
}

input {
  min-width: 250px;
  width: 100%;
}

textarea {
  min-width: 250px;
  width: 100%;
  min-height: 200px;
}

button {
  width: 100px;
  padding: 10px;
}

.button {
  margin-top: 10px;
  text-align: right;
}

.hidden {
  display: none;
}
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  components: {}
});
</script>

<style>
</style>
