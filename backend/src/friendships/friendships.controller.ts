import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateFriendshipDto } from './dto/createFriendshipDto';
import { FriendshipsService } from './friendships.service';

@Controller('friendships')
@ApiTags('Friendship API')
export class FriendshipsController {
  constructor(private friendshipsService: FriendshipsService) {}

  @Get()
  @ApiOperation({ summary: 'aa' })
  async findAllFriendship(): Promise<any[]> {
    return this.friendshipsService.findAllFriendship();
  }

  @Get(':id')
  findOneFriendship(@Param() param) {
    return this.friendshipsService.findOneFriendship(param.id);
  }

  @Post()
  async createOneFriendship(@Body() createFriendshipDto: CreateFriendshipDto) {
    this.friendshipsService.createOneFriendship(createFriendshipDto);
  }

  // @Patch(':id')
  // updateUser(@Param() param, @Body() createFriendshipDto: CreateFriendshipDto) {
  //   return this.friendshipsService.updataOneFriendship(
  //     param.id,
  //     createFriendshipDto,
  //   );
  // }

  // @Delete(':id')
  // deleteUser(@Param() param) {
  //   this.friendshipsService.deleteUser(param.id);
  // }
}
