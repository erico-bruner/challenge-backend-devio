import { ApplicationError } from '@/protocols';

export function completedOrderError(): ApplicationError {
  return {
    name: 'CompletedOrderError',
    message: 'Order already finished!',
  };
}
