import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/entity/users.entity';

export class CreateFriendshipDto {
  @ApiProperty({
    example: '1',
    description: 'id',
    required: true,
  })
  id: number;

  @ApiProperty({
    example: '[2]',
    description: '신청된 친구 id 리스트',
    required: true,
    default: [],
  })
  requestedFriends: User[] | null;

  @ApiProperty({
    example: '[3]',
    description: '수락된 친구 id 리스트',
    required: true,
    default: [],
  })
  acceptedFriends: User[] | null;
}
