import { Injectable, NotFoundException } from "@nestjs/common";
import {Sensor} from "./sensor"


@Injectable()
export class SensorService{

    private sensores: Sensor[] = []
    //salvar
    salvar(sensor: Sensor){
        this.sensores.push(sensor);
    }
    //ler
    listarSensores():Sensor[]{
        return this.sensores;
    }

    // Editar sensor
    atualizar(id: number, sensor: Partial<Sensor>): Sensor {
        console.log('Atualizando sensor com ID:', id);
        console.log('Dados recebidos:', sensor);
        const index = this.sensores.findIndex(s => s.id === id);
        if (index === -1) {
            throw new NotFoundException(`Sensor com ID ${id} não encontrado`);
        }
        this.sensores[index] = { ...this.sensores[index], ...sensor };
        console.log('Sensor atualizado:', this.sensores[index]);
        return this.sensores[index];
    }

    // Excluir
    excluir(id: number): void {
        const index = this.sensores.findIndex(sensor => sensor.id === id);
        if (index !== -1) {
            this.sensores.splice(index, 1);
        }
    }
}
