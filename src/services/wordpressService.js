// wordpressService.js

import axios from 'axios';

const BASE_URL = 'http://localhost/webwarrior/wp-json/wp/v2';

async function getFeaturedImage(postId) {
  const response = await axios.get(`${BASE_URL}/media?parent=${postId}`);
  if (response.data.length > 0) {
    return response.data[0].source_url;
  }
  return null;
}

export default {
  async getPosts() {
    const response = await axios.get(`${BASE_URL}/posts`);
    const posts = await Promise.all(
      response.data.map(async (post) => {
        const featured_media_src = await getFeaturedImage(post.id);
        return {
          id: post.id,
          title: post.title,
          content: post.content,
          featured_media_src,
        };
      })
    );
    return posts;
  },

  async getPostById(postId) {
    const response = await axios.get(`${BASE_URL}/posts/${postId}`);
    const featured_media_src = await getFeaturedImage(response.data.id);
    console.log(response);

    return {
      id: response.data.id,
      title: response.data.title,
      content: response.data.content,
      featured_media_src,
    };
  },
};
