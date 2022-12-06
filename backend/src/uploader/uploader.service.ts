import { Injectable } from '@nestjs/common';
import * as AWS from 'aws-sdk';

@Injectable()
export class UploaderService {
  s3 = new AWS.S3();

  async uploadFile(file: Express.Multer.File) {
    AWS.config.update({
      credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      },
    });
    const AWS_S3_BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;
    const params = {
      Bucket: AWS_S3_BUCKET_NAME,
      Key: `${Date.now()}_${file.originalname}`,
      Body: file.buffer,
    };
    try {
      const response = await this.s3.upload(params).promise();
      return response;
    } catch (error) {
      throw new Error('Failed to upload file.');
    }
  }
}
