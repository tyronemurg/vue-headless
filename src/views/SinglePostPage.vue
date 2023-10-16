<template>
    <div v-if="post" class="max-w-3xl mx-auto mt-8">
      <SinglePost :post="post" />
    </div>
  </template>
  
  <script>
  import SinglePost from '@/components/SinglePost.vue';
  import wordpressService from '@/services/wordpressService';
  
  export default {
  components: {
    SinglePost,
  },
  props: ['postId'], // Add a prop to receive the post ID
  data() {
    return {
      post: null,
    };
  },
  async created() {
    // Use the prop to fetch the specific post
    this.post = await wordpressService.getPostById(this.postId);
  },
};
  </script>
  