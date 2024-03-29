import { User } from '../Models/user';

export class LoginConfirmationResponse {
    public valid: boolean = false;
    public userInfo!: User;

    public constructor(pythonResp: Array<any>) {
        this.userInfo = pythonResp[0] ? new User(pythonResp[0]) : undefined;
        this.valid = pythonResp[1];
    }
}