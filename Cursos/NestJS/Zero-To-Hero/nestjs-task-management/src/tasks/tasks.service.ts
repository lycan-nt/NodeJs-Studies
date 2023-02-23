import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './task.model';
import { v4 as uuid } from 'uuid'
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { NotFoundException } from '@nestjs/common/exceptions';

@Injectable()
export class TasksService {
  private tasks: Task[]= [];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  getTaskWithFilters(filterDto: GetTasksFilterDto): Task[]  {
    const { status, search } = filterDto;
    let taskFilter: Task[] = this.getAllTasks();
    if (status) {
      taskFilter = taskFilter.filter(task => task.status === status);
    }

    if (search) {
      taskFilter = taskFilter.filter(task => {
        if (task.title.includes(search) || task.description.includes(search)) {
          return true;
        }
        return false;
      });
    }

    return taskFilter;
  }

  createTask(createTaskDto: CreateTaskDto): Task {
    const { title, description } = createTaskDto;
    const task: Task = {
      id: uuid(),
      title,
      description,
      status: TaskStatus.OPEN
    };
    this.tasks.push(task);
    return task;
  }

  getTaskById(id: string): Task {
    const taskFound = this.tasks.find(task => task.id == id);
    if (!taskFound) {
      throw new NotFoundException(`Task with ID "${id}" not found.`);
    }
    return taskFound;
  }

  deleteTask(id: string): void {
    this.tasks = this.tasks.filter(task => task.id !== id);
  }

  updateTaskStatus(id:string, status: TaskStatus): Task {
    let task: Task = this.getTaskById(id);
    task.status = status;
    return task;
  }

}
