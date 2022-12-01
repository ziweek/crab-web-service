import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    example: '1',
    description: '작성자',
    required: true,
  })
  authorId: number;

  @ApiProperty({
    example: '오늘 고양이 밥 준 썰푼다.',
    description: '제목',
    required: true,
  })
  title: string;

  @ApiProperty({
    example: '고양이가 손을 물더라',
    description: '본문',
    required: true,
  })
  content: string;

  @ApiProperty({
    example: 'imgURL',
    description: '사진',
    required: true,
  })
  images: string;

  @ApiProperty({
    example: '{ "lng": 127.0337661, "lat": 37.5885098 }',
    description: '위도 및 경도 좌표데이터',
    required: true,
  })
  region: JSON;

  @ApiProperty({
    example: 'true',
    description: '표시 여부',
    required: true,
  })
  hidden: boolean;
}
