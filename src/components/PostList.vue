<!-- PostList.vue -->

<template>
    <div>
      <div v-for="post in posts" :key="post.id" class="post">
        <h2>{{ post.title.rendered }}</h2>
        <img :src="post.featured_media_src" :alt="post.title.rendered" />
        <div v-html="post.content.rendered"></div>
      </div>
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
  