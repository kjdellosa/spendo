import { HTTP, ERROR } from '../constants'

const getAPIErrorStatusCode = (errorCode) => {
  let statusCode = HTTP.RESPONSE.OK
  const { API, DATABASE, ENTITY, UTIL } = ERROR
  switch (errorCode) {
    case API.API_REQUIRED_PARAMS_NOT_PROVIDED:
    case API.API_INVALID_REQUEST:
    case DATABASE.DB_INVALID_QUERY:
    case ENTITY.ENTITY_NOT_SATISFIED:
    case ENTITY.ENTITY_INVALID_STATE_TRANSITION:
    case UTIL.UTL_REQUIRED_PARAMS_NOT_PROVIDED:
    case DATABASE.DB_REQUIRED_PARAMS_NOT_PROVIDED:
      statusCode = HTTP.RESPONSE.BAD_REQUEST
      break
    case API.API_UNAUTHORIZED:
      statusCode = HTTP.RESPONSE.UNAUTHORIZED
      break
    case API.API_RESOURCE_CONFLICT:
    case DATABASE.DB_UNIQUE_CONSTRAINT_VIOLATION:
      statusCode = HTTP.RESPONSE.CONFLICT
      break
    case API.API_RESOURCE_NOT_FOUND:
      statusCode = HTTP.RESPONSE.NOT_FOUND
      break
    default:
      statusCode = HTTP.RESPONSE.INTERNAL_SERVER_ERROR
  }
  return statusCode
}
export default getAPIErrorStatusCode
