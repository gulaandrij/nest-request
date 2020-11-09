import { Inject, Injectable, Scope } from "@nestjs/common";
import { REQUEST } from "@nestjs/core";
import { Request } from "express";
import { AppService } from './app.service';
import { ValidationArguments, ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator';

@ValidatorConstraint({ name: 'IsUserClientWorking', async: true })
@Injectable()
export class IsUserClientWorkingConstraint implements ValidatorConstraintInterface {
  constructor(
    @Inject(AppService) private readonly appService: AppService,
    //@Inject(REQUEST) private readonly request: Request
    )
  {
  }

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    return this.appService.findClients();
  }
}
