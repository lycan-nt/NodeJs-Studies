import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';
import { CreateTaskDto } from './dto/create-task.dto';
import { TaskStatus } from './task-status.enum';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository,
  ) { }

  // getAllTasks(): Task[] {
  //   return this.tasks;
  // }

  // getTaskWithFilters(filterDto: GetTasksFilterDto): Task[]  {
  //   const { status, search } = filterDto;
  //   let taskFilter: Task[] = this.getAllTasks();
  //   if (status) {
  //     taskFilter = taskFilter.filter(task => task.status === status);
  //   }

  //   if (search) {
  //     taskFilter = taskFilter.filter(task => {
  //       if (task.title.includes(search) || task.description.includes(search)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }

  //   return taskFilter;
  // }

  async createTask(createTaskDto: CreateTaskDto): Promise<Task> {
    return this.tasksRepository.createTask(createTaskDto);
  }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOne(id);
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return found;
  }

  async deleteTask(id: string): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task With ID "${id}" not found`);
    }
  }

  // updateTaskStatus(id:string, status: TaskStatus): Task {
  //   let task: Task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

}
