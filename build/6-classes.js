"use strict";
class User_Basic {
    constructor(props) {
        this.id = props.id;
        this.firstName = props.firstName;
        this.lastName = props.lastName;
    }
    login() {
        return `hey, ${this.firstName} youre login`;
    }
    register() {
        return `hello, ${this.firstName}`;
    }
}
let donald = new User_Basic({ id: 1, firstName: "donald", lastName: "duck" });
console.log(donald);
console.log(donald.register());
console.log(donald.login());
class Root {
}
let User = (() => {
    class User extends Root {
        constructor(id, firstName, lastName) {
            super();
            this.id = id;
            this.firstName = firstName;
            this.lastName = lastName;
            this.save = false;
            this._token = '';
            this._retryLogin = 0;
            this.done = false;
        }
        login(username, password) {
            this._retryLogin++;
            if (username === this.firstName && password === 'admin') {
                this._token = (Math.random() + 1).toString(36).substring(2);
                return {
                    status: 'SUCCESS',
                    user: this.firstName,
                    token: this._token,
                };
            }
            if (this._retryLogin > User.MAX_FAILED_LOGIN) {
                return {
                    status: "FAILED",
                    user: this.firstName,
                    message: 'max loggin attemp'
                };
            }
            return {
                status: "FAILED",
                message: 'error: wrong password !!!'
            };
        }
    }
    User.MAX_FAILED_LOGIN = 2;
    return User;
})();
User.MAX_FAILED_LOGIN = 5;
let minnie = new User(1, 'minnie', 'mouse');
console.log(minnie.done);
console.log(minnie.login('minnie', 'random'));
console.log(minnie.login('minnie', 'admin'));
console.log(minnie.login('minnie', 'random'));
console.log(minnie.login('minnie', 'random'));
console.log(minnie.login('minnie', 'random'));
console.log(minnie.login('minnie', 'random'));
class Admin extends User {
    constructor(location, id, firstName, lastName) {
        super(id, firstName, lastName);
        this.role = "ADMIN";
        this.location = location;
        this.save;
    }
}
User.MAX_FAILED_LOGIN = 3;
let mickey = new Admin('Sumatra', 1, 'mickey', 'mouse');
console.log(mickey.login('mickey', 'random'));
console.log(mickey.login('mickey', 'admin'));
console.log(mickey.login('mickey', 'random'));
console.log(mickey.login('mickey', 'random'));
console.log(mickey.login('mickey', 'random'));
console.log(mickey.login('mickey', 'random'));
