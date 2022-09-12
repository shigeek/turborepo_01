import { PrismaService } from './../prisma/prisma.service';
import { Task } from './../entities/task.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  private task: Task[] = [];
  constructor(private prisma: PrismaService) {}

  async findOne(id: number): Promise<Task> {
    return this.prisma.task.findUnique({
      where: {
        id: id,
      },
    });
  }

  async findAll(): Promise<Task[]> {
    return this.prisma.task.findMany();
  }

  async createTask(name: string): Promise<Task> {
    return this.prisma.task.create({
      data: {
        name: name,
      },
    });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({
      where: {
        id: id,
      },
    });
  }

  async updateTask(id: number, name: string): Promise<Task> {
    return this.prisma.task.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  }
}
