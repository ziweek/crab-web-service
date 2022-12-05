import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { firstValueFrom } from 'rxjs';
import { User } from 'src/users/entity/users.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class MlService {
  constructor(
    private readonly httpService: HttpService,

    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  //   findAll() {
  //     const data = this.httpService.get('http://127.0.0.1:5000/');
  //     console.log(data);
  //   }

  async findAll(): Promise<any> {
    const { data } = await firstValueFrom(
      this.httpService
        .get<any>('http://127.0.0.1:5000')
        .pipe
        // catchError((error: AxiosError) => {
        //   this.logger.error(error.response.data);
        //   throw 'An error happened!';
        // }),
        (),
    );
    return data;
  }

  async getResultFromJaccardDistance(req): Promise<any> {
    const loadedUsers = await this.usersRepository.find({
      select: { id: true, acceptedFriendIds: true },
      where: { id: In(req.user.acceptedFriendIds) },
    });
    console.log(loadedUsers);
    const { data } = await firstValueFrom(
      this.httpService
        .post('http://127.0.0.1:5000/getJaccardDistance', 'zz')
        .pipe
        // catchError((error: AxiosError) => {
        //   this.logger.error(error.response.data);
        //   throw 'An error happened!';
        // }),
        (),
    );
    return data;
  }
  async getResultFromDBSCAN(): Promise<any> {}
}
