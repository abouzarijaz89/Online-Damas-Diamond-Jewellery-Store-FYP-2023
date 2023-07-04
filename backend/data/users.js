import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Khaleel Noro',
    email: 'noro@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Awais sandhu',
    email: 'sandhu@example.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
