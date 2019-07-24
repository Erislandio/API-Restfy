const users = [
    {
        id: '1',
        name: "João",
        email: "joao123@gmail.com"
    },
    {
        id: '2',
        name: "Erislandio",
        email: "erislandio.soares@gmail.com"
    }
]

export class User {
    static findAll(): Promise<any[]> {
        return Promise.resolve(users)
    }

    static findById(id: string): Promise<any>{
        return new Promise(resolve => {
            const filtered = users.filter(user => user.id == id)
            let user = undefined;
            if(filtered.length){
                user = filtered[0]
            }
            resolve(user)
        })
    }
}