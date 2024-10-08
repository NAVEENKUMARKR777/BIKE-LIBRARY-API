import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';
import { Bike } from './entities/bike.entity';

@Injectable()
export class BikesService {
  constructor(
    @InjectRepository(Bike)
    private bikesRepository: Repository<Bike>,
  ) {}

  create(createBikeDto: CreateBikeDto) {
    const bike = this.bikesRepository.create(createBikeDto);
    return this.bikesRepository.save(bike);
  }

  findAll() {
    return this.bikesRepository.find();
  }

  findOne(id: string) {
    return this.bikesRepository.findOne({ where: { id } }).then((bike) => {
      if (!bike) {
        throw new NotFoundException(`Bike with ID ${id} not found`);
      }
      return bike;
    });
  }

  async update(id: string, updateBikeDto: UpdateBikeDto) {
    await this.findOne(id);  // Check if bike exists
    await this.bikesRepository.update(id, updateBikeDto);
    return this.findOne(id);
  }

  async remove(id: string) {
    const bike = await this.findOne(id);  // Check if bike exists
    return this.bikesRepository.remove(bike);
  }
}
