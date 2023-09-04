const sync = () => {
    clients.add({ socket, user })

    io.emit("user:connect", user)

    console.log(`new client: ${user.username}`)

    const userList = await prisma.user.list()
    const users = userList.map((user) => {
        if (clients.find(user.id)) {
            console.log(`user ${user.username} is connected`)
            return { ...user, connected: true }
        }

        return user
    })

    socket.emit("client:sync", users)

    const departments = await prisma.department.list()
    socket.emit("departments:sync", departments)

    const roles = await prisma.role.list()
    socket.emit("roles:sync", roles)

    socket.broadcast.emit("user:sync", { ...user, connected: true })
}

export default { sync }
