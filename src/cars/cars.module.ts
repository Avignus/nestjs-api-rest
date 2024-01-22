import { Module } from '@nestjs/common';
import { CarsService } from './cars.service';
import { ProductsController } from './cars.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [CarsService],
})
export class CarsModule {}
