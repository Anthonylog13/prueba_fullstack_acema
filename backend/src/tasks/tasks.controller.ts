import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  ParseIntPipe,
  Delete,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly TasksService: TasksService) {}
  @Post()
  create(@Body() CreateTaskDto: CreateTaskDto) {
    return this.TasksService.create(CreateTaskDto);
  }

  @Get()
  findAll() {
    return this.TasksService.findAll();
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() UpdateTaskDto: UpdateTaskDto,
  ) {
    return this.TasksService.update(id, UpdateTaskDto);
  }
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.TasksService.remove(id);
  }
}
