import { PrismaService } from './../prisma/prisma.service';
import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';
import { TasksService } from './tasks.service';

@Module({
  imports: [],
  providers: [TasksResolver, TasksService, PrismaService],
})
export class TasksModule {}
