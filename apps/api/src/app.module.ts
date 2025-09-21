import { Module } from '@nestjs/common';
import { AuthModule } from '@thallesp/nestjs-better-auth';
import { auth } from "./auth"; //Better Auth instance
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [
    AuthModule.forRoot(auth),
    UsersModule,
    PrismaModule,
  ],
})
export class AppModule {}
