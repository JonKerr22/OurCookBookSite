export class RegisterUserResponse {
    public valid: boolean = false;
    public sessionKey: string = '';
    public newUserId: number = -1;

    public constructor(pythonResp: Array<any>) {
        this.valid = pythonResp[0];
        this.sessionKey = pythonResp[1];
        this.newUserId = pythonResp[2];
    }
}