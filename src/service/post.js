import { BASE_URL } from "../config/config";

export async function getPosts() {
  const posts = await fetch(`${BASE_URL}/post`)

  if(posts.status >= 400 && posts.status <= 600) throw Error('Bad response');

  return await posts.json()
}

export async function getPostsByUserId(userId) {
  const posts = await fetch(`${BASE_URL}/post/${userId}`)

  if(posts.status >= 400 && posts.status <= 600) throw Error('Bad response');

  return await posts.json()
}

export async function createPost(post) {
  const posts = await fetch(`${BASE_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  if(posts.status >= 400 && posts.status <= 600) throw Error('Bad response');

  return await posts.json()
}

export async function deletePost(postId) {
  const posts = await fetch(`${BASE_URL}/post/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(posts.status >= 400 && posts.status <= 600) throw Error('Bad response');

  return await posts.json()
}

export async function changePost(postId, changes) {
  const posts = await fetch(`${BASE_URL}/post/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(changes)
  });

  if(posts.status >= 400 && posts.status <= 600) throw Error('Bad response');

  return await posts.json()
}
