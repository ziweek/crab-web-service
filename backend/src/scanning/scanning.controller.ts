import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { GetNearFriendsDto } from './dto/getNearFriendsDto';
import { GetNearPostsDto } from './dto/getNearPostsDto';
import { ScanningService } from './scanning.service';

@Controller('scanning')
@ApiTags('Scanning API')
export class ScanningController {
  constructor(private scanningService: ScanningService) {}

  @Post('/getNearPosts')
  getNearPosts(@Body() getNearPostsDto: GetNearPostsDto) {
    return this.scanningService.getNearPosts(getNearPostsDto);
  }

  @Post('/getNearFriends')
  getNearFriends(@Body() getNearFriends: GetNearFriendsDto) {
    return this.scanningService.getNearUsers(getNearFriends);
  }
}
