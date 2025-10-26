
// Dependencia para darle color a la consola
var colors = require('colors')

// ========================================
// Parámetros del envío desde la terminal
// ========================================
// process.argv[2] = primer argumento (peso)
// process.argv[3] = segundo argumento (distancia)
// Si no se pasa, usar valores por defecto
var peso = process.argv[2] ? parseFloat(process.argv[2]) : 10
var distancia = process.argv[3] ? parseFloat(process.argv[3]) : 120

// ========================================
// Clase para calcular el envío
// ========================================
class Envio {
    peso = 0
    distancia = 0
    costoBase = 50
    recargoPeso = 0
    recargoDistancia = 0
    costoTotal = 0
    fechaEntrega

    constructor(peso, distancia) {
        this.peso = peso
        this.distancia = distancia
        this.calcularCostos()
        this.calcularFechaEntrega()
    }

    calcularCostos() {
        this.costoTotal = this.costoBase

        if (this.peso > 5) {
            this.recargoPeso = (this.peso - 5) * 20
            this.costoTotal += this.recargoPeso
        }

        if (this.distancia > 50) {
            this.recargoDistancia = (this.distancia - 50) * 10
            this.costoTotal += this.recargoDistancia
        }
    }

    calcularFechaEntrega() {
        let diasProcesamiento = 2
        let diasTransporte = Math.ceil(this.distancia / 100)
        let totalDias = diasProcesamiento + diasTransporte

        let fecha = new Date()
        fecha.setDate(fecha.getDate() + totalDias)
        this.fechaEntrega = fecha
    }

    mostrarResumen() {
        console.log("=====================================".green)
        console.log("    CÁLCULO DE ENVÍO DE PAQUETES     ".yellow)
        console.log("=====================================".green)
        console.log(`Peso del paquete: ${this.peso} lb`)
        console.log(`Distancia del envío: ${this.distancia} km`)
        console.log("-------------------------------------".cyan)
        console.log(`Costo base: L${this.costoBase.toFixed(2)}`)
        console.log(`Recargo por peso: L${this.recargoPeso.toFixed(2)}`)
        console.log(`Recargo por distancia: L${this.recargoDistancia.toFixed(2)}`)
        console.log("-------------------------------------".cyan)
        console.log(`COSTO TOTAL: L${this.costoTotal.toFixed(2)}`.bgYellow.black)
        console.log(`Fecha estimada de entrega: ${this.fechaEntrega.toDateString()}`)
        console.log("=====================================".green)
    }
}

// ========================================
// Ejecución del programa
// ========================================
var envio1 = new Envio(peso, distancia)
envio1.mostrarResumen()