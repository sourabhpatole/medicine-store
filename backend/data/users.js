import bcrypt from "bcryptjs";
const users = [
  {
    name: "Admin User",
    email: "admin@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Sourabh Patole",
    email: "sourabh@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Papu Don",
    email: "papu@gmail.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
