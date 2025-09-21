import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '@thallesp/nestjs-better-auth';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
    ) {}

    @Get('profile')
    @UseGuards(AuthGuard)
    async getProfile() {
        return this.usersService.getProfile();
    }
}
