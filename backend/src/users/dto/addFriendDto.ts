import { ApiProperty } from '@nestjs/swagger';

export class AddFriendDto {
  @ApiProperty({
    example: '2',
    description: '신청 받는 id',
    required: true,
  })
  targetId: number;
}
