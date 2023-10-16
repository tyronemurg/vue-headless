<template>
  <div id="app">
    <PostList v-if="posts.length"  :posts="posts" />
    <div v-else>Loading...</div>
    <SinglePostPage v-if="selectedPostId" :post-id="selectedPostId" @hide-post="hidePost" />
  </div>
</template>

<script>
import PostList from './components/PostList.vue';
import SinglePostPage from './views/SinglePostPage.vue'; // Import SinglePostPage
import wordpressService from './services/wordpressService';


export default {
  name: 'App',
  components: {
    PostList,
    SinglePostPage,
  },
  data() {
    return {
      posts: [],
      selectedPost: null // Track selected post
    };
  },
  async created() {
    this.posts = await wordpressService.getPosts();
  },
  methods: {
    showPost(post) {
      this.selectedPost = post;
    },
    hidePost() {
      this.selectedPost = null;
    }
  }
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
