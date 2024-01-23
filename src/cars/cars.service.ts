import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class CarsService {
  constructor(private prismaService: PrismaService) {}

  findAll() {
    return this.prismaService.car.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.car.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Product with ID ${id} not found`);
      }
    }
  }

  async create(createCarDto: CreateCarDto) {
    try {
      const createdCar = await this.prismaService.car.create({
        data: createCarDto,
      });
      return createdCar;
    } catch (error) {
      // Handle potential errors gracefully
      console.error('Error creating car:', error);
      throw new Error('Failed to create car'); // Replace with a more specific error if needed
    }
  }

  async update(id: number, updateProductDto: UpdateCarDto) {
    try {
      return await this.prismaService.car.update({
        where: { id },
        data: updateProductDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Car with ID ${id} not found`);
      }
    }
  }
  async remove(id: number) {
    try {
      return this.prismaService.car.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Car with ID ${id} not found`);
      }
    }
  }
}
