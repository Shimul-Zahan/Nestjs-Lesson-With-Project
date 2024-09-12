import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService,
    ) { }

    loginUser(
        email: string,
        password: string
    ) {
        return {
            userId: '123',
            token: 'abc123',
            roles: ['admin']
        }
    }

    isAuth() {
        return true
    }

}
