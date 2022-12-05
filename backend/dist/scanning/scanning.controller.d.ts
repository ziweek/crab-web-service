import { ScanningService } from './scanning.service';
export declare class ScanningController {
    private scanningService;
    constructor(scanningService: ScanningService);
    getNearPosts(req: any): Promise<any>;
    getNearUsers(req: any): Promise<any>;
    getNearNonFriends(req: any): Promise<any>;
    getNearFriends(req: any): Promise<any>;
}
