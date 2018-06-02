export class Pedido {
    constructor(
        public nombre: string,
        public tipo_identificacion: string,
        public identificacion: string,
        public tipo_ropa: string,
        public cantidad: number,
        public fecha_hora_entrega: string,
        public direccion_entrega: string,
        public precio_total: string,
        public valido: boolean
    ) { }
}
