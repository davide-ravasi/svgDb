import { Tag } from './tag.model'; 

export class Box {
    public name: string;
    public image: string;
    public tags: Tag[];

    constructor(name: string, image: string, tags: Tag[]) {
        this.name = name;
        this.image =  image;
        this.tags = tags;
    }
}