import {PostBusiness} from '../../src/business/PostBusiness'
import { ROLE_USER } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { PostDatabaseMock } from '../mocks/PostDatabaseMock'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { GetPostsInputDTO } from '../../src/dtos/PostDTO'

describe("GetPostById",()=>{

    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
    )

    test("Deve retornar um post pela Id", async()=>{
        const input:GetPostsInputDTO = {token: 'token-mock-normal', id: "p001" }
        const response = await postBusiness.getPostsById(input)
        // expect(response).toHaveLength(1)
    })
})