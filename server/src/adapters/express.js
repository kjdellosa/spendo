
import { httpErrorMapper } from '@utils/index'
import { Prisma } from '@prisma/client'
import { ERROR } from '@constants/index'

export default function createExpressAdapter(controller) {
  return (request, response) => {
    const httpRequest = {
      body: request.body,
      query: request.query,
      params: request.params
    }
    console.info(`Request [${request.method}]: ${request.originalUrl}`)
    console.info(`Body: ${JSON.stringify(httpRequest)}`)
    controller(httpRequest)
      .then(
        ({
          statusCode,
          body,
          stream,
          headers = { 'Content-Type': 'application/json' }
        }) => {
          if (headers) {
            response.set(headers)
          }

          if (stream !== undefined && stream !== null) {
            stream.pipe(response)
          } else {
            response.status(statusCode).json(body)
          }
        }
      )
      .catch((e) => {
        let errorCode = 400
        let body = {
          data: { error: 'An unkown error occurred.', details: null }
        }

        if (e instanceof Prisma.PrismaClientKnownRequestError) {
          switch (e.code) {
            case 'P2002':
              errorCode = 409
              body = {
                data: { error: ERROR.API.API_RESOURCE_CONFLICT, details: null }
              }
              break
            case 'P2023':
            default:
              errorCode = 400
              body = {
                data: { error: ERROR.API.API_INVALID_REQUEST, details: null }
              }
          }
        } else if (e instanceof Prisma.PrismaClientValidationError) {
          errorCode = 400
          body = {
            data: { error: ERROR.API.API_INVALID_REQUEST, details: null }
          }
        } else {
          errorCode = httpErrorMapper(e.message)
          body = { data: { error: e.message, details: e.cause } }
        }
        console.error(e)
        response.status(errorCode).send(body)
      })
  }
}
