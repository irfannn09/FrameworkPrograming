export class recoveryPasswordDto {
    readonly token: string;
    readonly newPassword: string;
    readonly confirmNewPassword: string;
}