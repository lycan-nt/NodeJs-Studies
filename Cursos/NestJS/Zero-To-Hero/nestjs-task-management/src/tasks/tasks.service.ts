import { Injectable } from '@nestjs/common';
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { NotFoundException } from '@nestjs/common/exceptions';
import { TasksRepository } from './tasks.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from './task.entity';

@Injectable()
export class TasksService {

  constructor(
    @InjectRepository(TasksRepository)
    private tasksRepository: TasksRepository
  ) {}

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

  // createTask(createTaskDto: CreateTaskDto): Task {
  //   const { title, description } = createTaskDto;
  //   const task: Task = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: TaskStatus.OPEN
  //   };
  //   this.tasks.push(task);
  //   return task;
  // }

  async getTaskById(id: string): Promise<Task> {
    const found = await this.tasksRepository.findOneBy({id});
    if (!found) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return found;
  }

  // getTaskById(id: string): Task {
  //   const taskFound = this.tasks.find(task => task.id == id);
  //   if (!taskFound) {
  //     throw new NotFoundException(`Task with ID "${id}" not found.`);
  //   }
  //   return taskFound;
  // }

  // deleteTask(id: string): void {
  //   const taskFound = this.getTaskById(id);
  //   this.tasks = this.tasks.filter(task => task.id !== taskFound.id);
  // }

  // updateTaskStatus(id:string, status: TaskStatus): Task {
  //   let task: Task = this.getTaskById(id);
  //   task.status = status;
  //   return task;
  // }

}
