import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD } from '@nestjs/core';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoursesModule } from './End-Points/courses/courses.module';
import { StudentsModule } from './End-Points/students/students.module';
import { UserModule } from './End-Points/user/user.module';
import { RolesGuard } from './End-Points/user/guard/roles.guard';

@Module({
  imports: [
    StudentsModule,
    CoursesModule,
    UserModule,
    JwtModule.register({ secret: 'secret', signOptions: { expiresIn: '1d' } }),
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/NestJs")
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: RolesGuard }],
})
export class AppModule { }


