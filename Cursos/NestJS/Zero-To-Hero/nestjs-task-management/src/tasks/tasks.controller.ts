import { Controller, Get, Param, Delete, Patch, Query } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { Task } from './task.entity';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // @Get()
  // getTasks(
  //   @Query() filterDto: GetTasksFilterDto
  // ): Task[] {
  //   if (Object.keys(filterDto).length) {
  //     return this.tasksService.getTaskWithFilters(filterDto);
  //   } else
  //     return this.tasksService.getAllTasks();
  // }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksService.createTask(createTaskDto);
  }

@Get(':id')
getTaskById(@Param('id') id: string): Promise<Task> {
  return this.tasksService.getTaskById(id);
}

  // @Get(':id')
  // getTaskById(@Param ('id') id: string): Task {
  //   return this.tasksService.getTaskById(id);
  // }

  // @Delete(':id')
  // deleteTaskById(@Param('id') id:string) {
  //   this.tasksService.deleteTask(id);
  // }

  // @Patch(':id/status')
  // updateTaskStatus(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDto: UpdateTaskStatusDto
  // ): Task {
  //   const { status } = updateTaskStatusDto;
  //   return this.tasksService.updateTaskStatus(id, status);
  // }
}
