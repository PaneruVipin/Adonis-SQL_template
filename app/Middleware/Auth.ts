import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UnauthecatedException from 'App/Exceptions/UnauthecatedException'  
import User from 'App/Models/User'
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
    request.loggedInUser=await User.findOrFail(data.sub)
  }catch(e){
    if(e.message==="jwt expired")
     throw new UnauthecatedException('this token is expired')
     else
     throw new UnauthecatedException('token are not valid')
  }
 await next()
  }
}
