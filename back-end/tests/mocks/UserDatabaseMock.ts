import { BaseDatabase } from "../../src/database/BaseDatabase"
import { UserDB, ROLE_USER } from "../../src/types"

export class UserDatabaseMock extends BaseDatabase {
    public static TABLE_USERS = "users"

    public signUp = async (userDB: UserDB): Promise<void> => {
        // não precisa retornar nada, porque é void
    }

    public getUserByEmail = async (email: string): Promise<UserDB | undefined>  => {
        switch (email) {
            case "normal@email.com":
                return {
                    id: "id-mock",
                    username: "Normal Mock",
                    email: "normal@email.com",
                    password: "hash-bananinha",
                    created_at: new Date().toISOString(),
                    role: ROLE_USER.NORMAL
                }
            case "admin@email.com":
                return {
                    id: "id-mock",
                    username: "Admin Mock",
                    email: "admin@email.com",
                    password: "hash-bananinha",
                    created_at: new Date().toISOString(),
                    role: ROLE_USER.ADMIN
                }
            default:
                return undefined
        }
    }

    public getAllUsers = async (): Promise<UserDB[]>  => {
        return [
            {
                id: "id-mock",
                username: "Normal Mock",
                email: "normal@email.com",
                password: "hash-bananinha",
                created_at: new Date().toISOString(),
                role: ROLE_USER.NORMAL
            },
            {
                id: "id-mock",
                username: "Admin Mock",
                email: "admin@email.com",
                password: "hash-bananinha",
                created_at: new Date().toISOString(),
                role: ROLE_USER.ADMIN
            }
        ]
    }

    // public async login(email: string, password: string):Promise<UserDB | undefined>{
    //     return {
    //             id: "id-mock",
    //             username: "Normal Mock",
    //             email: "normal@email.com",
    //             password: "hash-bananinha",
    //             created_at: new Date().toISOString(),
    //             role: ROLE_USER.NORMAL
    //         }

           
        
    //     // const [userDB]:UserDB[] | undefined = await BaseDatabase
    //     // .connection(UserDatabase.TABLE_USERS)
    //     // .select()
    //     // .where({email} && {password})

    //     // return userDB
    // }

    // public async login(email: string, password: string){
    //     const [userDB]:UserDB[] | undefined = await BaseDatabase
    //     .connection(UserDatabaseMock.TABLE_USERS)
    //     .select()
    //     .where({email} && {password})

    //     return userDB
    // }

    // public getUserById = async (id: string):Promise<UserDB | undefined>=>{
    //     switch (id) {
    //         case "mock001":
    //             return {
    //                 id: "id-mock",
    //                 username: "Normal Mock",
    //                 email: "normal@email.com",
    //                 password: "hash-bananinha",
    //                 created_at: new Date().toISOString(),
    //                 role: ROLE_USER.NORMAL
    //             }
    //         case "mock002":
    //             return {
    //                 id: "id-mock",
    //                 username: "Admin Mock",
    //                 email: "admin@email.com",
    //                 password: "hash-bananinha",
    //                 created_at: new Date().toISOString(),
    //                 role: ROLE_USER.ADMIN
    //             }
    //         default:
    //             return undefined
    //     }
    // }
}