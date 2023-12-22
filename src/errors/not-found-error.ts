import { ApplicationError } from '@/protocols';

export function notFoundError(resource: string): ApplicationError {
  return {
    name: 'NotFoundError',
    message: `${resource} not found!`,
  };
}
