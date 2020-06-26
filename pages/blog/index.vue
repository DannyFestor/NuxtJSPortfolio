<template>
  <section id="blog">
    <h1>My blog posts:</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.slug">
        <nuxt-link :to="post.slug" append>{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.getters.blogSlugs;
    }
  },
  mounted() {
  }
};
</script>
