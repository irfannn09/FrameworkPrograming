import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { registerDto } from './dto/register-dto.js';
import { AuthService } from './auth.service.js';
import { loginDto } from './dto/login-dto.js';
import { ForgotPasswordDto } from './dto/forgotpassword-dto.js';
import { recoveryPasswordDto } from './dto/recoverypassword-dto.js';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')
    register(@Body() registerDto: registerDto) {
        return this.authService.register(registerDto);
    }

    @Post('login')
    login(@Body() loginDto: loginDto) {
        return this.authService.login(loginDto);
    }

    @Post('forgot-password')
    forgotPassword(@Body() ForgotPasswordDto: ForgotPasswordDto) {
        return this.authService.forgotPassword(ForgotPasswordDto);
    }

    @Post('password-recovery')
    passwordRecovery(@Body() recoveryPasswordDto: recoveryPasswordDto) {
        return this.authService.passwordRecovery(recoveryPasswordDto);
    }
}
