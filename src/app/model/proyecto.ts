export class Proyecto{
    id?: number;
    nombreP: string;
    descripcionP: string;
    link: string;
    imgP: string;

    constructor(nombreP: string, descripcionP: string, link: string, imgP: string){
        this.nombreP = nombreP;
        this.descripcionP = descripcionP;
        this.link = link;
        this.imgP = imgP;
    }
}
