export class Recipe {
    public readonly id: number;
    public cookbookId?: number;
    public userId?: number;
    public name?: string;
    public directions?: string;
    public ingredients?: string;


    // TODO - eventually this will turn into an entry in a recipe history log
    //      - but that is far in the future

    // TODO - set write and view permissions on recipes to override cookbook settings
}
