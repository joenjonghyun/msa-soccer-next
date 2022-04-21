import { all } from 'redux-saga/effects'
import { articleJoin } from './articleSaga.ts'
import { watchJoin, watchLogin } from "./userSaga.ts";
import { watchAddTodo } from "./todoSaga.ts";

export default function* rootSaga() {
    yield all([watchJoin(), articleJoin(),  watchAddTodo(), watchLogin()])
  }