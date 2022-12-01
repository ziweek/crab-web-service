import { ApiProperty } from '@nestjs/swagger';

export class RegisterAccountDto {
  @ApiProperty({
    example: '김지욱',
    description: '유저 이름',
    required: true,
  })
  name: string;

  @ApiProperty({
    example: '01012345678',
    description: '전화번호',
    required: true,
  })
  phone: number;

  @ApiProperty({
    example: 'admin@admin.com',
    description: '이메일',
    required: true,
  })
  email: string;

  @ApiProperty({
    example: '********',
    description: '비밀번호',
    required: true,
  })
  password: string;

  @ApiProperty({
    example: [],
    description: '친구 리스트',
    required: true,
  })
  friends: number[];
}
