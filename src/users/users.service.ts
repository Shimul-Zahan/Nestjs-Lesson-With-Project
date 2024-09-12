import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamDto } from './dtos/create-users-params.dto';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class UsersService {

    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService,
    ) { }

    getUsers(
        getUsersParamDto: GetUsersParamDto,
        limit: number,
        page: number
    ) {

        const loginUser = this.authService.isAuth();

        return [
            { loginUser },
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


    getUserById(id: string) {
        return {
            id,
            name: 'John Doe',
            email: 'john.doe@example.com'
        };
    }
}
