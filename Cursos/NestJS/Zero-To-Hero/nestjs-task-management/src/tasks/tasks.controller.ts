import { Controller, Get, Param, Delete, Patch } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task, TaskStatus } from './task.model';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks(): Task[] {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body() createTaskDto: CreateTaskDto
  ): Task {
    return this.tasksService.createTask(createTaskDto);
  }

  @Get(':id')
  getTaskById(@Param ('id') id: string): Task {
    return this.tasksService.getTaskById(id);
  }

  @Delete(':id')
  deleteTaskById(@Param('id') id:string) {
    this.tasksService.deleteTask(id);
  }

  @Patch(':id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body('status') status: TaskStatus
  ): Task {
    return this.tasksService.updateTaskStatus(id, status);
  }
}
