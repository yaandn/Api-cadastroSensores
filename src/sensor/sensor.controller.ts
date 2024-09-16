import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Sensor } from './sensor';
import { SensorService } from './sensor-service';

@Controller('sensor')
export class SensorController {
  constructor(private sensorService: SensorService) {}

  @Get()
  getSensores(): Sensor[] {
    return this.sensorService.listarSensores();
  }
  @Post()
  save(@Body() sensor: Sensor) {
    this.sensorService.salvar(sensor);
  }
  @Put(':id')
  update(@Param('id') id: number, @Body() sensor: Partial<Sensor>) {
    console.log('Atualizando sensor com ID:', id);
    return this.sensorService.atualizar(+id, sensor);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.sensorService.excluir(+id);
  }
}
