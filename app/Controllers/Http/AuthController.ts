// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { HttpContext } from "@adonisjs/core/build/standalone";
import LoginValidator from "App/Validators/LoginValidator";
import SignUpValidator from "App/Validators/SignUpValidator";

export default class AuthController {
    public async login(ctx:HttpContext){
       const data= await ctx.request.validate(LoginValidator)
        return  data
    }
    public async signUp(ctx:HttpContext){
      const data= await ctx.request.validate(SignUpValidator)
       return data
    }
}
