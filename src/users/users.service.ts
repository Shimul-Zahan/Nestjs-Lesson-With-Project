import { Injectable } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/create-users-params.dto';

@Injectable()
export class UsersService {
    getUsers(
        getUsersParamDto: GetUsersParamDto,
        limit: number,
        page: number
    ) {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com'
            },
            {
                id: 2,
                name: 'Jane Smith',
                email: 'jane.smith@example.com'
            },
            {
                id: 3,
                name: 'Bob Johnson',
                email: 'bob.johnson@example.com'
            },
            {
                id: 4,
                params: getUsersParamDto.id,
                limit,
                page,
            }
        ];
    }
}
