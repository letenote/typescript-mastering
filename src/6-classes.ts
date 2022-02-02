/* eslint-disable prefer-const, @typescript-eslint/no-unused-vars */

/**
 * Object User :
 * - User have personal like such id, firstName, lastName
 * - User have method such as login(), register()
 * - Max Failed login = 5
 */

// class --> OOP ( Object Oriented Programming)
// class --> Object Instance

/**
 * class basic : constructor, properties, method
 */
interface UserBasicInterface {
  id: number
  firstName: string 
  lastName: string
}

class User_Basic {
  // properties
  id: number
  firstName: string 
  lastName: string

  constructor(props: UserBasicInterface){
      this.id = props.id
      this.firstName = props.firstName
      this.lastName = props.lastName
  }

  // method
  login(){
    return `hey, ${this.firstName} youre login`
  }
  register(){
    return `hello, ${this.firstName}`
  }
}

let donald = new User_Basic({ id: 1, firstName: "donald", lastName: "duck"});
console.log( donald )
console.log( donald.register() )
console.log( donald.login() )

/**
 * inheritance / sub-class
 * access modifiers (private, public, protected)
 * inheritance / sub-class
 * static member
 * abstract classes
 */

type UserLoginValue = {
  status: string,
  user?: string,
  token?: string,
  message?: string
}

abstract class Root {
  abstract done: boolean
  
}

class User extends Root {
  // properties
  id: number
  firstName: string 
  lastName: string
  protected save: boolean // protected accessable in class and sub-class
  private _token: string // private accessable only in class
  static MAX_FAILED_LOGIN = 2
  private _retryLogin: number
  done: boolean //abstract

  constructor( id: number, firstName: string, lastName: string ){
    super() // abstract
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.save = false
    this._token = ''
    this._retryLogin = 0
    this.done = false // abstract
  }

  login( username: string, password: string): UserLoginValue {
    this._retryLogin++
    if( username === this.firstName && password === 'admin' ){
      this._token = (Math.random() + 1).toString(36).substring(2)
      return {
        status: 'SUCCESS',
        user: this.firstName,
        token: this._token,
      }
    }
    
    if( this._retryLogin > User.MAX_FAILED_LOGIN ){
      return {
        status: "FAILED",
        user: this.firstName,
        message: 'max loggin attemp'
      }
    }

    return {
      status: "FAILED",
      message: 'error: wrong password !!!'
    }
  }
}
User.MAX_FAILED_LOGIN = 5
// let kwek = new Root(1, 'kwek', 'kwek') // => is error cannot create instance on abstract class
let minnie = new User(1, 'minnie', 'mouse');
// // minnie.save // protected not accessable in instance
console.log(minnie.done)
console.log(minnie.login('minnie', 'random'))
console.log(minnie.login('minnie', 'admin'))
console.log(minnie.login('minnie', 'random'))
console.log(minnie.login('minnie', 'random'))
console.log(minnie.login('minnie', 'random'))
console.log(minnie.login('minnie', 'random'))

class Admin extends User {
  role: string
  location: string

  constructor( location: string, id: number, firstName: string, lastName: string ){
    super( id, firstName, lastName )
    this.role = "ADMIN"
    this.location = location
    this.save // protected accessable in sub-class
  }
}

User.MAX_FAILED_LOGIN = 3
let mickey = new Admin('Sumatra', 1, 'mickey', 'mouse')
// mickey.save // protected not accessable in instance

console.log(mickey.login('mickey', 'random'))
console.log(mickey.login('mickey', 'admin'))
console.log(mickey.login('mickey', 'random'))
console.log(mickey.login('mickey', 'random'))
console.log(mickey.login('mickey', 'random'))
console.log(mickey.login('mickey', 'random'))
