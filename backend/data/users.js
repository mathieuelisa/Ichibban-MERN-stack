import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin",
    email: "admin@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
    isAdmin: true,
  },
  {
    name: "Johnny",
    email: "johnny@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
  {
    name: "Jeannot",
    email: "jeannot@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
];

export default users;
