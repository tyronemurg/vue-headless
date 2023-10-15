<!-- PostList.vue -->

<template>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <router-link
      v-for="post in posts"
      :key="post.id"
      :to="{ name: 'SinglePostPage', params: { id: post.id } }"
      class="no-underline"
    >
      <div class="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300">
        <img :src="post.featured_media_src" :alt="post.title.rendered" class="w-full h-48 object-cover">
        <div class="p-6">
          <h2 class="text-xl font-bold mb-4">{{ post.title.rendered }}</h2>
          <div v-html="post.content.rendered"></div>
          <a :href="'/post/' + post.id" class="mt-4 block text-blue-600 hover:underline">Read More</a>
        </div>
      </div>
    </router-link>
  </div>
</template>
  
  <script>
  export default {
    props: ['posts'],
  };
  </script>
  
  <style scoped>
  .post {
    margin-bottom: 20px;
  }
  
  img {
    max-width: 100%;
  }
  </style>
  