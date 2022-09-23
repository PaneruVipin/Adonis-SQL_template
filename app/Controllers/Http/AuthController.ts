import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import SignUpValidator from 'App/Validators/SignUpValidator'
import  Hash from '@ioc:Adonis/Core/Hash'
import LoginValidator from 'App/Validators/LoginValidator'
import UnauthecatedException from 'App/Exceptions/UnauthecatedException'
import { appKey } from 'Config/app'
import jwt from 'jsonwebtoken'

export default class AuthController {
      public async signUp({request}:HttpContextContract){
             const data= await request.validate(SignUpValidator)
             const hashedPassword= await Hash.make(data.password)
             return User.create({...data, password:hashedPassword})
          
           }
      public async login({request}:HttpContextContract){
              const data= await request.validate(LoginValidator)
              const user=await User.query().where('email',data.email).first()
              if(!user){
                  new UnauthecatedException('login credentals are not valid')
              }
              const isVerified=await Hash.verify(user!.password,data.password)
             if(!isVerified){
                  throw new UnauthecatedException('login details are not valid')
               }
             const token=jwt.sign({sub:user!.id},appKey,{expiresIn:24*60*60,jwtid:'hello'})
             return {token,user}
}
    
}
