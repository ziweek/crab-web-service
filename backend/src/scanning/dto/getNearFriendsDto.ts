import { ApiProperty } from '@nestjs/swagger';

export class GetNearFriendsDto {
  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  region: object;
}
