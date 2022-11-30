import { ApiProperty } from '@nestjs/swagger';

export class ValidateAccountDto {
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
}
