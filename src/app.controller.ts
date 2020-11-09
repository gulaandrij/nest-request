import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CatDto } from './cat.dto';
import { DogDto } from './dog.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('not-working')
  notWorking(@Body()dogDto: DogDto): string {
    return this.appService.getHello();
  }

  @Post('works-fine')
  worksFine(@Body()catDto: CatDto): string {
    return this.appService.getHello();
  }
}
