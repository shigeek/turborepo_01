import { PrismaService } from '../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Task } from './task.entity';

@Injectable()
export class TasksService {
  private tasks: Task[] = [];
  constructor(private prisma: PrismaService) {}

  async findAll() {
    const tasks = await this.prisma.task.findMany();
    return tasks;
  }

  async create(name: string) {
    const task = await this.prisma.task.create({
      data: {
        name: name,
      },
    });
    return task;
  }

  async delete(id: number) {
    const task = await this.prisma.task.delete({
      where: {
        id,
      },
    });
    return task;
  }

  async update(id: number, name: string) {
    const task = await this.prisma.task.update({
      where: {
        id,
      },
      data: {
        name: name,
      },
    });
    return task;
  }
}
