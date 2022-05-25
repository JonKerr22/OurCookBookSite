import { User } from '../Models/user';

export class UserSessionKeyResponse {
    public userInfo!: User;

    public constructor(pythonResp: Array<any>) {
        this.userInfo = pythonResp[0] ? new User(pythonResp[0]) : undefined;
    }
}