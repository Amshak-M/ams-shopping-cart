import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true,
    },
    {
        name: 'Matt Smith',
        email: 'matt@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Bennedict Cumberbatch',
        email: 'bcumber@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users