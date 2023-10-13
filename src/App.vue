<template>
  <div id="app">
    <PostList v-if="posts.length"  :posts="posts" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import wordpressService from './services/wordpressService';

export default {
  name: 'App',
  components: {
    PostList,
  },
  data() {
    return {
      posts: [],
    };
  },
  async created() {
    this.posts = await wordpressService.getPosts();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h2 {
  margin-bottom: 10px;
}

.post {
  margin-bottom: 20px;
}

img {
  max-width: 100%;
}
</style>
