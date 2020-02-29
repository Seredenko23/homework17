import { BASE_URL } from "../config/config";

export async function getUsers() {
  const users = await fetch(`${BASE_URL}/users`)

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function createUser(user) {
  const users = await fetch(`${BASE_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function deleteUser(userId) {
  const users = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function changeUser(userId) {
  const users = await fetch(`${BASE_URL}/users/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}
