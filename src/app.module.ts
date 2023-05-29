import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { TalentsModule } from './talents/talents.module';
import { join } from 'path';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://geniusapc:geniusapc@cluster0.o5olz.mongodb.net/actors-pool?retryWrites=true&w=majority',
    ),
    UsersModule,
    AuthModule,
    TalentsModule,
    ProjectsModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
