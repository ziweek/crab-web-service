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
import { CrabsService } from './crabs.service';

@Controller('crabs')
@ApiTags('Crab API')
export class CrabsController {
  constructor(private readonly crabsService: CrabsService) {}

  // @UseGuards(AuthGuard)
  @Get('/all')
  @ApiOperation({ summary: '모든 크랩 조회하기' })
  @ApiCreatedResponse({ description: '모든 크랩 반환' })
  findAllCrab() {
    return this.crabsService.findAllCrab();
  }

  @UseGuards(AuthGuard)
  @Get()
  @ApiOperation({ summary: '크랩 조회하기' })
  @ApiCreatedResponse({ description: '크랩 반환' })
  findCrab(@Req() req) {
    return this.crabsService.findCrab(req);
  }

  @UseGuards(AuthGuard)
  @Post()
  @ApiOperation({ summary: '크랩 작성하기' })
  @ApiCreatedResponse({ description: '작성된 크랩 반환' })
  createCrab(@Req() req) {
    return this.crabsService.createCrab(req);
  }

  // @UseGuards(AuthGuard)
  // @Patch()
  // @ApiOperation({ summary: '크랩 수정하기' })
  // @ApiCreatedResponse({ description: '수정된 크랩 반환' })
  // updateCrab(@Req() req) {
  //   return this.crabsService.updateCrab(req);
  // }

  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiOperation({ summary: '크랩 삭제하기' })
  @ApiCreatedResponse({ description: '결과 반환' })
  deleteCrab(@Req() req) {
    return this.crabsService.deleteCrab(req);
  }

  @UseGuards(AuthGuard)
  @Get('/getReceivedUsers/:id')
  @ApiOperation({ summary: '크랩을 받은 유저 조회하기' })
  @ApiCreatedResponse({ description: '크랩을 받은 유저 리스트 반환' })
  getReceivedUsers(@Req() req) {
    return this.crabsService.getReceivedUsers(req.param.id);
  }

  @UseGuards(AuthGuard)
  @Get('/getWatchedUsers/:id')
  @ApiOperation({ summary: '크랩을 조회한 유저 조회하기' })
  @ApiCreatedResponse({ description: '크랩을 조회한 유저 리스트 반환' })
  getWatchedUsers(@Req() req) {
    return this.crabsService.getWatchedUsers(req.param.id);
  }
}
