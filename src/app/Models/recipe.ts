export class Recipe {
    public readonly id: number;
    public cookbookId?: number;
    public userId?: number;
    public name?: string;
    public directions?: string;
    public ingredients?: string;


    public constructor(pythonArr: Array<any>){
        this.id = pythonArr[0];
        this.cookbookId = pythonArr[1];
        this.userId   = pythonArr[2];
        this.name = pythonArr[3];
        this.directions = pythonArr[4];
        this.ingredients = pythonArr[5];
    }

    // TODO - eventually this will turn into an entry in a recipe history log
    //      - but that is far in the future

    // TODO - set write and view permissions on recipes to override cookbook settings
}
