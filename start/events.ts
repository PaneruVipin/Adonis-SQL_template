/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Event from '@ioc:Adonis/Core/Event'

Event.on('mail:sent', ({ message, views, mailer, response }) => {
  console.log(message)
  console.log(views)
  console.log(mailer)
  console.log(response)
})