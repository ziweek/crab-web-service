import { Strategy, VerifiedCallback } from 'passport-jwt';
import { AuthService } from '../auth.service';
import { Payload } from './payload.interface';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private authServie;
    constructor(authServie: AuthService);
    validate(payload: Payload, done: VerifiedCallback): Promise<any>;
}
export {};
