<template>
  <main id="container">
    <div class="post-head">
      <h1>{{ post.attributes.title }}</h1>
      <img v-if="post.attributes.image" :src="post.attributes.image">
      <div>
        <div class="date">{{ post.attributes.date }}</div>
        <div class="tags">
          <span v-for="tag in post.attributes.tags">
            <nuxt-link :to="'/tag/'+tag">\#{{tag}}</nuxt-link>
          </span>
        </div>
      </div>
    </div>
    // eslint-disable-next-line vue/no-v-html
    <div class="content" v-html="post.html"></div>
  </main>
</template>
<script>
  export default {
    async asyncData({ params }) {
      let post = await import(`~/content/${params.slug}.md`);
      return { post }
    },
    head() {
      return {
        title: this.post.attributes.title,
        meta: [{
          hid: 'description',
          name: 'description',
          content: this.post.attributes.short
        }],
        link: [{
          rel: 'canonical',
          href: 'https://derkinzi.de' + this.post.attributes.slug
        }]
      }
    }
  }
</script>