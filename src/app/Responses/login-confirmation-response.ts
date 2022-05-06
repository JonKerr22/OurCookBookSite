import { User } from '../Models/user';

export class LoginConfirmationResponse {
    public valid: boolean;
    public userInfo: User;

    public constructor(pythonResp: Array<any>) {
        this.userInfo = new User(pythonResp[0]);
        this.valid = pythonResp[1];
    }
}