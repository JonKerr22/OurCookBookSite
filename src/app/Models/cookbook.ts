export class Cookbook {
    public readonly id: number;
    public readonly user_id: number;
    public cookbook_name: string;

    // TODO - this will almost certainly become a lot bigger in the future
    public constructor(pythonArr: Array<any>){
        this.id = pythonArr[0];
        this.user_id = pythonArr[1];
        this.cookbook_name   = pythonArr[2];
    }
    public isUnlabeled(): boolean { return !!this.cookbook_name; }
}
