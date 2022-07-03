export class AddRecipeResponse {
    public valid: boolean = false;
    public id: number = -1;

    public constructor(pythonResp: Array<any>) {
        this.valid = pythonResp[0];
        this.id = pythonResp[1];
    }
}