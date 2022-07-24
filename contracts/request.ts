declare module '@ioc:Adonis/Core/Request' {
    interface RequestContract{
        loggedInUser?:{
            id:number,
            password:string,
            email:string,
            name:string
        }
    }
  }