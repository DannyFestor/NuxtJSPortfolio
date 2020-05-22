import Vue from 'vue';

export const store = Vue.observable({
  isNavOpen: false,
  blogPosts: []
});

export const mutations = {
  toggleNav() {
    store.isNavOpen = !store.isNavOpen;
  },
  setBlogPosts(state: any, list: any) {
    state.blogPosts = list;
  }
};

export const actions = {
  async nuxtServerInit({ commit }: { commit: any }) {
    const files = await require.context(
      '~/assets/content/blog/',
      false,
      /\.json$/
    );
    const blogPosts = files.keys().map((key: any) => {
      const res = files(key);
      res.slug = key.slice(2, -5);
      return res;
    });
    await commit('setBlogPosts', blogPosts);
  }
};
