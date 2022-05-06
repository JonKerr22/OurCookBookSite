export class User {
    public readonly id: number = -1;
    public full_name: string =  'N/A';
    public readonly session_key: string;

    // TODO - this will almost certainly become a lot bigger in the future
    public constructor(pythonArr: Array<any>){
        this.id = pythonArr[0];
        this.full_name = pythonArr[1];
        //2 is the password, skip
        this.session_key = pythonArr[3];
    }
}
