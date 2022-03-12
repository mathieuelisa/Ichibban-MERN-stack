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
    name: "Mathieu",
    email: "mathieu@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
    isAdmin: true,
  },
  {
    name: "Vina",
    email: "Vina@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
  {
    name: "Shit",
    email: "shit@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
  {
    name: "Parisak",
    email: "parisak@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
  {
    name: "Jeannot",
    email: "jeannot@exemple.fr",
    password: bcrypt.hashSync("abcdef", 10),
  },
];

export default users;
