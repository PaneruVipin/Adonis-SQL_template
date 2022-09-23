/*
|--------------------------------------------------------------------------
| Preloaded File
|--------------------------------------------------------------------------
|
| Any code written inside this file will be executed during the application
| boot.
|
*/
import Mail from '@ioc:Adonis/Addons/Mail'

Mail.monitorQueue((error, result) => {
  if (error) {
    console.log('Unable to send email')
    console.log(error.mail)
    return
  }

  console.log('Email sent')
  console.log(result?.mail)
  console.log(result?.response)
})