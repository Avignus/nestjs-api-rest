import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class CarsService {
  constructor(private prismaService: PrismaService) {}
  create(createCarDto: CreateCarDto) {
    return this.prismaService.product.create({
      data: { ...createCarDto, quantity: 0 },
    });
  }

  findAll() {
    return this.prismaService.product.findMany();
  }

  async findOne(id: number) {
    try {
      return await this.prismaService.product.findUniqueOrThrow({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Product with ID ${id} not found`);
      }
    }
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    try {
      return await this.prismaService.product.update({
        where: { id },
        data: updateCarDto,
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Product with ID ${id} not found`);
      }
    }
  }
  async remove(id: number) {
    try {
      return this.prismaService.product.delete({
        where: { id },
      });
    } catch (error) {
      if (error.code === 'P2025') {
        throw new NotFoundError(`Product with ID ${id} not found`);
      }
    }
  }
}
