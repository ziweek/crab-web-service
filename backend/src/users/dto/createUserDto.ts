import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
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
    example: '닉네임',
    description: 'zi.we_ek',
    required: false,
  })
  nickname: string;

  @ApiProperty({
    example: 'Hi, there. I am Jiuk',
    description: '자기소개',
    required: false,
  })
  text: string;

  @ApiProperty({
    example: 'img',
    description: '프로필사진 URL',
    required: false,
  })
  profileImg: string;

  @ApiProperty({
    example: 'false',
    description: '버튼 활성화 여부',
    required: true,
  })
  isActive: boolean;

  @ApiProperty({
    example: '{"lng":123,"lat":37}',
    description: '지역 JSON',
    required: true,
  })
  region: JSON;
}
