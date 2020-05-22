<template>
  <main id="container">
    <article>
      <h1>{{ blogPost.title }}</h1>
      <div v-html="$md.render(blogPost.body)"></div>
    </article>
  </main>
</template>
<script>
export default {
  async asyncData({ params, payload }) {
    if (payload) return { blogPost: payload };
    else
      return {
        blogPost: await require(`~/assets/content/blog/${params.blog}.json`),
      };
  }
};
</script>
