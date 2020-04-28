<template>
  <div>
    <h1>My blog posts:</h1>
    <ul>
      <li v-for="post in posts" :key="post.attributes.title">
        <nuxt-link to="#">{{post.attributes.title}}</nuxt-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  async asyncData({ params }) {
    const resolve = await require.context('~/content/', true, /\.md$/);
    let imports = resolve.keys().map((post) => resolve(post));
    console.log("IMPORTS:" + imports)
    imports = imports.filter((post) => {
      return post.attributes.tags;
    })
    console.log("FILTERED:" + imports)
    imports = imports.filter((post) => {
      return post.attributes.tags.filter((tag) => {
        return tag === params.slug;
      }).length;
    });
    console.log("MORE FILTERED: " + imports);
    return { posts: imports };
  }
}
</script>
