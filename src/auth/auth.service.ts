import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {

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

}
