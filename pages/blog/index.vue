<template>
  <div>
    <h1>My blog posts:</h1>
    <ul>
      <li v-for="post in blogPosts" :key="post.slug">
        <nuxt-link :to="'blog/' + post.slug">{{ post.slug }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  computed: {
    blogPosts() {
      return this.$store.state.blogPosts;
    }
  },
  mounted() {
    console.log(this.$store.state.blogPosts);
   }
  // async asyncData() {
  //   const resolve = await require.context('~/content/', true, /\.md$/);
  //   const imports = resolve.keys().map((key) => {
  //     return resolve(key);
  //   });
  //   return { posts: imports };
  // },
}
</script>
