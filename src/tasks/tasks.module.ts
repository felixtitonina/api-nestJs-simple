import { TasksController } from './tasks.controller';
import { Module } from '@nestjs/common';
import { TaskService } from './shared/task.service';

@Module({
    controllers: [TasksController],
    providers: [TaskService]
})
export class TasksModule { }
