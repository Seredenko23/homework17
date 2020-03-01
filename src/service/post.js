import { BASE_URL } from "../config/config";

export async function getPosts() {
  const users = await fetch(`${BASE_URL}/post`)

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function getPostsByUserId(userId) {
  const users = await fetch(`${BASE_URL}/post/${userId}`)

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function createPost(post) {
  const users = await fetch(`${BASE_URL}/post`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function deletePost(postId) {
  const users = await fetch(`${BASE_URL}/post/${postId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function changePost(postId) {
  const users = await fetch(`${BASE_URL}/post/${postId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}
