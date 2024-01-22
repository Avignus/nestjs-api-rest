import { Injectable } from '@nestjs/common';
import { CreateStockInputDto } from './dto/create-stock-input.dto';
import { UpdateStockInputDto } from './dto/update-stock-input.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { NotFoundError } from 'src/errors';

@Injectable()
export class StockInputsService {
  constructor() {}
  async create(createStockInputDto: CreateStockInputDto) {
    // const product = await this.prismaService.product.findUnique({
    //   where: { id: createStockInputDto.product_id },
    // });
    // if (product) {
    //   throw new NotFoundError('Product already exists');
    // }
    // return await this.prismaService.stockInput.create({
    //   data: {
    //     productId: createStockInputDto.product_id,
    //     quantity: createStockInputDto.quantity,
    //     date: createStockInputDto.date,
    //   },
    // });
  }

  findAll() {
    return `This action returns all stockInputs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} stockInput`;
  }

  update(id: number, updateStockInputDto: UpdateStockInputDto) {
    return `This action updates a #${id} stockInput`;
  }

  remove(id: number) {
    return `This action removes a #${id} stockInput`;
  }
}
