
import {
    IsNotEmpty,
    IsEmail,
    MinLength,
    MaxLength,
    Validate,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'MatchPassword', async: false })
export class MatchPassword implements ValidatorConstraintInterface {
    validate(confirmPassword: string, args: ValidationArguments) {
        const object = args.object as any;
        return object.password === confirmPassword;
    }

    defaultMessage(args: ValidationArguments) {
        return 'Password dan konfirmasi password harus sama';
    }
}

export class LoginDto {
    @IsNotEmpty({ message: 'Email harus diisi' })
    @IsEmail({}, { message: 'Format email harus valid' })
    readonly email: string;

    @IsNotEmpty({ message: 'Password harus diisi' })
    @MinLength(3, { message: 'Password minimal 3 karakter' })
    @MaxLength(16, { message: 'Password maksimal 16 karakter' })
    readonly password: string;

    @IsNotEmpty({ message: 'Konfirmasi password harus diisi' })
    @Validate(MatchPassword)
    readonly confirmPassword: string;
}
