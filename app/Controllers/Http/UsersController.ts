import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UsersController {
  public async index({request}: HttpContextContract) {
    return request.loggedInUser
  }

  public async store({}: HttpContextContract) {

  }

  public async show({}: HttpContextContract) {
    
  }

  public async update({}: HttpContextContract) {

  }

  public async destroy({}: HttpContextContract) {
    
  }
}
