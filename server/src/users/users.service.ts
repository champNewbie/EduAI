import { Injectable } from '@nestjs/common';
import { Prisma } from 'generated/prisma';
import { DbService } from 'src/db/db.service';

@Injectable()
export class UsersService {
  constructor(private readonly DbService: DbService) {}
  async create(createUserDto: Prisma.UsersCreateInput) {
    return await this.DbService.users.create({
      data: createUserDto,
    });
  }

  async findAll(role?: 'Student' | 'Instructor') {
    if (role)
      return await this.DbService.users.findMany({
        where: {
          role,
        },
      });
    return await this.DbService.users.findMany();
  }

  async findOne(id: number) {
    return await this.DbService.users.findUnique({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateUserDto: Prisma.UsersCreateInput) {
    return this.DbService.users.update({
      where: {
        id,
      },
      data: updateUserDto,
    });
  }

  async remove(id: number) {
    return await this.DbService.users.delete({
      where: {
        id,
      },
    });
  }
}
