import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SensorController } from './sensor/sensor.controller';
import { SensorService } from './sensor/sensor-service';

@Module({
  imports: [],
  controllers: [AppController, SensorController],
  providers: [AppService, SensorService],
})
export class AppModule {}
