import { registerDecorator, ValidationOptions } from 'class-validator';
import { IsUserClientConstraint } from './is-user-client.constraint';

export function IsUserClient<T>(
  validationOptions?: ValidationOptions,
): (object: T, propertyName: string) => void {
  return (object: T, propertyName: string): void => {
    registerDecorator({
      name: 'IsUserClient',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: IsUserClientConstraint,
    });
  };
}
