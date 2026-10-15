import { Injectable } from '@nestjs/common';
import { registerDto } from './dto/register-dto.js';
import { User } from './entities/users-entity.js';
import { loginDto } from './dto/login-dto.js';
import { UnauthorizedException } from '@nestjs/common';
import { ForgotPasswordDto } from './dto/forgotpassword-dto.js';
import { recoveryPasswordDto } from './dto/recoverypassword-dto.js';

@Injectable()
export class AuthService {
    // register
    register(registerDto: registerDto) :User {
        // Implementation for user registration
        const newUser: User = {
            id: 1,
            username: registerDto.username,
            email: registerDto.email,
            password: registerDto.password
        };
        return newUser;
    }

    // login
    login(loginDto: loginDto) :User {
        // Implementation for user login
        const user: User = {
            id: 1,
            username: "satria",
            email: "satria@gmail.com",
            password: "satria123"
        };
        if (loginDto.email !== user.email || loginDto.password !== user.password)
            {throw new UnauthorizedException('Email atau password salah');}

        return user;
    }

    // forgot password
    forgotPassword(ForgotPasswordDto: ForgotPasswordDto) {
        const user = {
            id: 1,
            username: "satria",
            email: "satria@gmail.com",
            password: "satria123"
        };

        if (ForgotPasswordDto.email !== user.email)
            {throw new UnauthorizedException('Email tidak ditemukan');}


        return {
            message: 'Instruksi pemulihan password telah dikirim ke email Anda',
            email: user.email
        }
    }

    // password recovery
    passwordRecovery(recoveryPasswordDto: recoveryPasswordDto) {
        // Implementation for password recovery
        const recoveryToken = "12345";
        if (recoveryPasswordDto.token !== recoveryToken)
            {throw new UnauthorizedException('Token pemulihan password tidak valid');
        }

        if (recoveryPasswordDto.newPassword !== recoveryPasswordDto.confirmNewPassword)
            {throw new UnauthorizedException('Password baru dan konfirmasi password tidak cocok');}

        return {
            message: 'Password berhasil diperbarui',
            newPassword: recoveryPasswordDto.newPassword
        }
    }
}
