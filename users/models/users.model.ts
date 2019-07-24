const users = [
    {
        name: "João",
        email: "joao123@gmail.com"
    },
    {
        name: "João",
        email: "joao123@gmail.com"
    }
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }
}