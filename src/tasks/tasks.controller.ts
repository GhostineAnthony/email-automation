import { Controller, Post } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TaskService) {}

  @Post()
  create() {
    return this.tasksService.handleCron();
  }
}
