import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async me({}: HttpContextContract) {
   
  }

  public async index({}: HttpContextContract) {
   
  }

  public async store({}: HttpContextContract) {

  }

  public async show({request}: HttpContextContract) {
    return request.loggedInUser
  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {
    
  }
}
