import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Another {
  public async handle({}: HttpContextContract, next: () => Promise<void>) {
    console.log("run another 1")
    await next()
    console.log("run another 2")
  }
}
