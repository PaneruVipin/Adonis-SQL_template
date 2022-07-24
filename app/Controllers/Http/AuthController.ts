import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LoginValidator from "App/Validators/LoginValidator";
import SignUpValidator from "App/Validators/SignUpValidator";

export default class AuthController {
    public async login(ctx:HttpContextContract){
        console.log("run main 1 login")
       const data= await ctx.request.validate(LoginValidator)
       console.log("run main 2 login")
        return  data
    }
    public async signUp(ctx:HttpContextContract){
        console.log("run main 1 signUp")
      const data= await ctx.request.validate(SignUpValidator)
      console.log("run main 2 signUp")
       return data
    }
}
