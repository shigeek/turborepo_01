import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Task } from './../entities/task.entity';
import { TasksService } from './tasks.service';

@Resolver()
export class TasksResolver {
  constructor(private tasksService: TasksService) {}

  @Query(() => [Task])
  tasks() {
    return this.tasksService.findAll();
  }

  @Query(() => Task)
  task(@Args('id') id: number) {
    return this.tasksService.findOne(id);
  }

  @Mutation(() => Task)
  createTask(@Args('name') name: string) {
    return this.tasksService.createTask(name);
  }

  @Mutation(() => Task)
  deleteTask(@Args('id') id: number) {
    return this.tasksService.deleteTask(id);
  }

  @Mutation(() => Task)
  updateTask(@Args('id') id: number, @Args('name') name: string) {
    return this.tasksService.updateTask(id, name);
  }
}
