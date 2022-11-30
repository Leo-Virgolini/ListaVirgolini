export class Alumno {

    private _id: number;
    private _nombre: string;
    private _apellido: string;
    private _fechaNacieminto: Date;
    private _promedio: number;

    constructor(id: number, nombre: string, apellido: string, fechaNacieminto: Date) {
        this._id = id;
        this._nombre = nombre;
        this._apellido = apellido;
        this._fechaNacieminto = fechaNacieminto;
        this._promedio = Math.floor(Math.random() * (10 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
    }

    public set id(id: number) {
        this._id = id;
    }

    public get id(): number {
        return this._id
    }

    public set nombre(nombre: string) {
        this._nombre = nombre;
    }

    public get nombre(): string {
        return this._nombre
    }

    public set apellido(apellido: string) {
        this._apellido = apellido;
    }

    public get apellido(): string {
        return this._apellido
    }

    public set fechaNacieminto(fechaNacieminto: Date) {
        this._fechaNacieminto = fechaNacieminto;
    }

    public get fechaNacieminto(): Date {
        return this._fechaNacieminto
    }

    public set promedio(promedio: number) {
        this._promedio = promedio;
    }

    public get promedio(): number {
        return this._promedio
    }

    public calcularPromedio(): void {
        this._promedio = Math.floor(Math.random() * (10 * 10 - 1 * 10) + 1 * 10) / (1 * 10);
    }

}
