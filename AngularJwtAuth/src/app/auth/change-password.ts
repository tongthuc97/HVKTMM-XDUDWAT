export class ChangePassword {

    password: string;
    token: string;

    constructor(password: string, token: string) {

        this.password = password;
        this.token = token;
    }
}
