export class Proyecto {
    id? : number;
    nombre : string;
    img : string;
    descripcion : string;

    constructor(nombre: string, img: string, descripcion: string){
        this.nombre = nombre;
        this.img = img;
        this.descripcion = descripcion;
    }
}
