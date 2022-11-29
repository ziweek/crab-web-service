import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { RegisterAccountDto } from './dto/registerAccountDto';
import { ValidateAccountDto } from './dto/validateAccountDto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerAccount(req: Request, registerAccountDto: RegisterAccountDto): Promise<any>;
    login(validateAccountDto: ValidateAccountDto, res: Response): Promise<any>;
    isAuthenticated(req: Request): any;
}
