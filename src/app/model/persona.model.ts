export class persona {
    id?: number;
    nombre: string;
    apellido: string;
    profesion: string;
    descripcion: string;
    img: string;
    ubicacion: string;

    constructor(nombre: string, apellido: string, profesion: string, descripcion: string, img: string, ubicacion: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.profesion = profesion;
        this.descripcion = descripcion;
        this.img = img;
        this.ubicacion = ubicacion;
    }
}