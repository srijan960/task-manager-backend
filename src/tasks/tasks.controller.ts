import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/creeate-task.dto';

@Controller('api/tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  async findAll() {
    return await this.tasksService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.tasksService.findOne(id);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async create(@Body() createTaskDto: CreateTaskDto) {
    console.log(createTaskDto);
    return await this.tasksService.create(createTaskDto);
  }

  @Put(':id')
  @UsePipes(new ValidationPipe({ transform: true }))
  async update(@Param('id') id: number, @Body() updateTaskDto: any) {
    return await this.tasksService.update(id, updateTaskDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.tasksService.remove(id);
  }
}
