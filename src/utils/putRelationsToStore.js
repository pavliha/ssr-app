import isEmpty from 'lodash/isEmpty'
import { all, put } from 'redux-saga/effects'

function * putRelationsToStore(models, relations) {
  yield all(relations.map(relation => {
    if (!isEmpty(relation[0])) return put(relation[1](relation[0]))
  }))
}

export default putRelationsToStore
