<template>
  <div>
    <h1>My blog posts:</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.slug">
        {{ post.slug }}
        <nuxt-link :to="post.slug" append>{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </div>
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
