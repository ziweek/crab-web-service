import { ApiProperty } from '@nestjs/swagger';
import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import { User } from 'src/users/entity/users.entity';

export class CreateCrabDto {
  @ApiProperty({
    example: 'User',
    description: 'User',
    required: true,
  })
  user: User;

  @ApiProperty({
    example: 'CrabImageFile',
    description: 'CrabImageFile',
    required: true,
  })
  crabImageFile: CrabImageFile;

  @ApiProperty({
    example: 'receivedFriendIds',
    description: 'receivedFriendIds',
    required: true,
  })
  receivedFriendIds: number[];

  @ApiProperty({
    example: 'CrabImageFile',
    description: 'CrabImageFile',
    required: true,
  })
  watchedFriendIds: number[];
}
