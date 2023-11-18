const ENTITY = {
  ENTITY_NOT_SATISFIED: 'entityNotSatisfied',
  ENTITY_INVALID_STATE_TRANSITION: 'invalidStateTransition'
}

const API = {
  API_REQUIRED_PARAMS_NOT_PROVIDED: 'requiredParamsNotProvided',
  API_RESOURCE_NOT_FOUND: 'resourceNotFound',
  API_INVALID_REQUEST: 'invalidRequest',
  API_UNAUTHORIZED: 'unauthorized',
  API_RESOURCE_CONFLICT: 'resourceConflict'
}

const UTIL = {
  UTL_REQUIRED_PARAMS_NOT_PROVIDED: 'utl_requiredParamsNotProvided',
  UTL_RESOURCE_NOT_FOUND: 'utl_resourceNotFound',
  UTL_INVALID_REQUEST: 'utl_invalidRequest',
  UTL_RUNTIME_ERROR: 'utl_invalidInitialization'
}

const MIDDLEWARE = {
  UNAUTHORIZED: 'unauthorized',
  FORBIDDEN: 'forbidden'
}

const DATABASE = {
  DB_REQUIRED_PARAMS_NOT_PROVIDED: 'db_requiredParamsNotProvided',
  DB_INVALID_REQUEST: 'db_invalidRequest',
  DB_INVALID_QUERY: 'invalidQuery',
  DB_UNIQUE_CONSTRAINT_VIOLATION: 'uniqueConstraintViolation'
}

const USECASE = {
  UC_REQUIRED_PARAMS_NOT_PROVIDED: 'uc_requiredParamsNotProvided'
}

export default {
  API,
  MIDDLEWARE,
  UTIL,
  DATABASE,
  ENTITY,
  USECASE
}
