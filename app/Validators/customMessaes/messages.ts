import { CustomMessages } from '@ioc:Adonis/Core/Validator'

const messages:CustomMessages={
    "name.required":"name is {{rule}} feild",
    "name.string":"name should ba a sting",
    "email":"email should be a valid email",
    "email.string":"email should be a valid email string",
    "email.required":"email is {{rule}} feild",
    "age.required":"age is a required feild",
    "age.number":"age should be a number",
    "range":"{{field}} should be this range {{options.start}},{{options.stop}}"
}

export default messages