import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/auth/security/auth.guard';
import { CrabImageFile } from 'src/uploader/entity/crabImage.entity';
import { CrabsService } from './crabs.service';
import { CreateCrabDto } from './dto/createCrabDto';

@Controller('crabs')
@ApiTags('Crab API')
export class CrabsController {
  constructor(private readonly crabsService: CrabsService) {}

  //   @UseGuards(AuthGuard)
  @Get('/all')
  @ApiOperation({ summary: '모든 크랩 조회하기' })
  @ApiCreatedResponse({ description: '모든 크랩 반환' })
  findAllCrab() {
    this.crabsService;
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: '크랩 작성하기' })
  @ApiCreatedResponse({ description: '작성된 크랩 반환' })
  createCrab(@Req() req) {
    return this.crabsService.findCrab(req);
  }

  @UseGuards(AuthGuard)
  @Patch()
  @ApiOperation({ summary: '크랩 수정하기' })
  @ApiCreatedResponse({ description: '수정된 크랩 반환' })
  updateCrab(@Req() req) {
    return this.crabsService.updateCrab(req);
  }

  @UseGuards(AuthGuard)
  @Delete()
  @ApiOperation({ summary: '크랩 삭제하기' })
  @ApiCreatedResponse({ description: '결과 반환' })
  deleteCrab(@Req() req) {
    return this.crabsService.deleteCrab(req);
  }
}
