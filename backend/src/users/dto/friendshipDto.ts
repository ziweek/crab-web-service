import { ApiProperty } from '@nestjs/swagger';

export class FriendshipDto {
  @ApiProperty({
    example: '2',
    description: '친구 신청을 수락할 User id',
    required: true,
  })
  targetId: number;
}
