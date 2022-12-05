import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { MlService } from './ml.service';

@Controller('ml')
@ApiTags('ML API')
export class MlController {
  constructor(private readonly mlService: MlService) {}

  @UseGuards(AuthGuard)
  @Post('/getResultFromJaccardDistance')
  @ApiOperation({ summary: '친구 추천 알고리즘' })
  @ApiCreatedResponse({ description: '추천된 유저 리스트 반환', schema: {} })
  getResultFromJaccardDistance(@Req() req) {
    const userId = req.user.id;
    return this.mlService.getResultFromJaccardDistance(req);
    // return this.mlService.findAll();
  }

  @UseGuards(AuthGuard)
  @Post('/getResultFromDBSCAN')
  @ApiOperation({ summary: 'DBSCAN 알고리즘' })
  @ApiCreatedResponse({ description: '군집화 중점 반환', schema: {} })
  getResultFromDBSCAN(@Req() req) {
    return this.mlService.getResultFromDBSCAN();
  }
}
