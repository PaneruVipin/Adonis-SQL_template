import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Auth {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    console.log("run middlwere 1 auth")
    await next()
    console.log("run middlwere 2 auth")
  }
}
