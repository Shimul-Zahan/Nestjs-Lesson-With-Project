import { Controller, DefaultValuePipe, Get, Param, ParseIntPipe, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/create-users-params.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    
    // Here is dependency Inceted
    constructor(private readonly usersService: UsersService) { }

    @Get('/:id?')
    public getUsers(
        @Param() getUsersParamDto: GetUsersParamDto,
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
    ) {
        return this.usersService.getUsers(getUsersParamDto, limit, page)
    }

}
