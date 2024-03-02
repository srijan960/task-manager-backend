import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

enum TaskStatus {
  TODO = 'todo',
  PENDING = 'pending',
  IN_PROGRESS = 'in progress',
  BLOCKED = 'blocked',
  BUG = 'bug',
  COMPLETED = 'completed',
}

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsDateString()
  @IsOptional()
  start_date?: Date;

  @IsDateString()
  @IsOptional()
  due_date?: Date;

  @IsEnum(TaskStatus)
  status: TaskStatus;
}
