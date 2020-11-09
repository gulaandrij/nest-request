import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUserClientConstraint } from './is-user-client.constraint';
import { IsUserClientWorkingConstraint } from './is-user-client-working.constraint';

export function IsUserClientWorking<T>(
  validationOptions?: ValidationOptions,
): (object: T, propertyName: string) => void {
  return (object: T, propertyName: string): void => {
    registerDecorator({
      name: 'IsUserClientWorking',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsUserClientWorkingConstraint,
    });
  };
}
