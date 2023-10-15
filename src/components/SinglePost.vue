<template>
    <div class="bg-white p-6 rounded-lg shadow-lg">
      <h2 class="text-2xl font-bold mb-4">{{ post.title.rendered }}</h2>
      <img :src="post.featured_media_src" :alt="post.title.rendered" class="mb-4">
      <div v-html="post.content.rendered"></div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['post'],
  };
  </script>
  