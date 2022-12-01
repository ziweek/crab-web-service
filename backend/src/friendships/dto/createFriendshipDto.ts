import { ApiProperty } from '@nestjs/swagger';

export class CreateFriendshipDto {
  @ApiProperty({
    example: '1',
    description: 'userId',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: '[2]',
    description: '신청된 친구 id 리스트',
    required: true,
  })
  requestedFriends: number[];

  @ApiProperty({
    example: '[3]',
    description: '수락된 친구 id 리스트',
    required: true,
  })
  acceptedFriends: number[];
}
