import { ApplicationError } from '@/protocols';

export function paymentMismatchError(): ApplicationError {
  return {
    name: 'PaymentMismatchError',
    message: 'total, paid or change amounts are not correct!',
  };
}
