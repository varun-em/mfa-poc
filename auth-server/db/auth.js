import { db } from "./index.js";

export const addUser = async ({ username, password }) => {
  await db.read();

  db.data = db.data || { users: [] };

  db.data.users.push({ username, password });

  // Save to file
  db.write();
};

export const getUser = async ({ username }) => {
  await db.read();

  db.data = db.data || { users: [] };

  const user = db.data.users.find((x) => x.username === username);

  return user;
};

export const validateUser = async ({ username, password }) => {
  await db.read();

  db.data = db.data || { users: [] };

  const user = db.data.users.find(
    (x) => x.username === username && x.password === password
  );

  return !!user;
};
