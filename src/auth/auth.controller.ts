import { Controller, Get, Param } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Get('/:email/:password')
    login(
        @Param('email') email: string,
        @Param('pasword') pasword: string,
    ) {
        return this.authService.loginUser(email, pasword)
    }

}
