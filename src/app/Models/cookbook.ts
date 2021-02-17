export class Cookbook {
    public readonly id: number;
    public readonly userId: number; // TODO - in the future maybe allow for several users to write to a cookbook
    public isPrivate: boolean;
    public name: string;
    public recipeIds: [number];
}
