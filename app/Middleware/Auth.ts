import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { users } from 'App/dummyData'
import UnauthecatedException from 'App/Exceptions/UnauthecatedException'  
import { appKey } from 'Config/app'

import jwt from 'jsonwebtoken'

export default class Auth {
  public async handle({request}: HttpContextContract, next: () => Promise<void>) {
const token=request.headers().authorization
 if(!token){
  throw new UnauthecatedException('no token found')
  }
  try{
    const data=jwt.verify(token,appKey)
    request.loggedInUser=users.find((u:any)=>u.id===data.sub)
    console.log(data)
  }catch(e){
  throw new UnauthecatedException('token is not valid')
  }
 await next()
  }
}
