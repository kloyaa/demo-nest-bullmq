import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { QueueService } from 'src/queue/queue.service';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '@entity/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private queueService: QueueService,
  ) { }

  async createUser(param: CreateUserDto) {
    const user = this.userRepository.create({ name: param.name });
    return await this.userRepository.save(user);

  }
  async create(createUserDto: CreateUserDto) {
    await this.queueService.doSomethingGood(createUserDto, { delay: 1000 });
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
