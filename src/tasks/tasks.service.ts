import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/creeate-task.dto';
import { Tasks } from './task.entity/task.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  async findAll(): Promise<Tasks[]> {
    return await this.tasksRepository.find();
  }

  async findOne(id: number): Promise<Tasks> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Tasks with ID ${id} not found`);
    }
    return task;
  }

  async create(createTaskDto: CreateTaskDto): Promise<Tasks> {
    const task = this.tasksRepository.create(createTaskDto);
    await this.tasksRepository.save(task);
    return task;
  }

  async update(id: number, updateTaskDto: any): Promise<Tasks> {
    const task = await this.findOne(id);
    const updatedTask = this.tasksRepository.merge(task, updateTaskDto);
    await this.tasksRepository.save(updatedTask);
    return updatedTask;
  }

  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
