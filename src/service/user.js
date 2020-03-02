import { BASE_URL } from "../config/config";

export async function getUsers() {
  const users = await fetch(`${BASE_URL}/user`)

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function createUser(user) {
  const users = await fetch(`${BASE_URL}/user`, {
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
  const users = await fetch(`${BASE_URL}/user/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}

export async function changeUser(userId, user) {
  const users = await fetch(`${BASE_URL}/user/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user)
  });

  if(users.status >= 400 && users.status <= 600) throw Error('Bad response');

  return await users.json()
}
