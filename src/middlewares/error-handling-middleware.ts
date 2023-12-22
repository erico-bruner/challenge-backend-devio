import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApplicationError, RequestError } from '@/protocols';

export function handleApplicationErrors(
  err: RequestError | ApplicationError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction, // eslint-disable-line
) {
  if (err.name === 'PaymentMismatchError') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send({
      message: err.message,
    });
  }

  if (err.name === 'NotFoundError') {
    return res.status(httpStatus.NOT_FOUND).send({
      message: err.message,
    });
  }

  if (err.name === 'InvalidDataError') {
    return res.status(httpStatus.BAD_REQUEST).send({
      message: err.message,
    });
  }

  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send({
    error: 'InternalServerError',
    message: 'Internal Server Error',
  });
}
