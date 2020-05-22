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
import { store, mutations } from '@/store/store.ts';
export default {

  computed: {
    blogPosts() {
      return store.blogPosts;
    }
  },
  async asyncData() {
    const resolve = await require.context('~/content/', true, /\.md$/);
    const imports = resolve.keys().map((key) => {
      return resolve(key);
    });
    return { posts: imports };
  },
}
</script>
