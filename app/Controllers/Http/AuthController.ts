import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { users } from 'App/dummyData'
import UnauthecatedException from 'App/Exceptions/UnauthecatedException'
import LoginValidator from 'App/Validators/LoginValidator'
import SignUpValidator from 'App/Validators/SignUpValidator'
import { appKey } from 'Config/app'
import jwt from 'jsonwebtoken'


export default class AuthController {
    public async login({request}:HttpContextContract){
      const data= await request.validate(LoginValidator)
      const user=users.find(u=>u.email===data.email && u.password===data.password)
      if(!user){
        throw new UnauthecatedException('login details are not valid')
      }
      const token=jwt.sign({sub:user.id},appKey,{expiresIn:60,jwtid:'hello'})
      return {token,data}
    }
    public async signUp({request}:HttpContextContract){
        const data= await request.validate(SignUpValidator)
        return data
    }
}
