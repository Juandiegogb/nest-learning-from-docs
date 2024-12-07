import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  createCat(createCatDTO: CreateCatDto): string {
    return JSON.stringify(createCatDTO);
  }
}
