import { put, call } from 'redux-saga/effects';
import { urlOrigin } from '../../assets/js/urlOrigin';
import {
  modalRequestFailed,
  modalRequestSubmitting,
  modalRequestSuccessful,
  updateResults,
} from '../actions';
import { dataType } from './sagaHelpers';

const fetch = (data) => {
  return window.fetch(
    `${urlOrigin(window.location.hostname)}/${dataType(data)}`,
    {
      body: JSON.stringify(data),
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
    }
  );
};

export function* createSaga({ payload }) {
  yield put(modalRequestSubmitting());
  const data = payload;
  let result;

  try {
    result = yield call(fetch, data);
    if (result.ok) {
      const newEntry = yield call([result, 'json']);
      yield put(modalRequestSuccessful());
      yield put(updateResults('create', newEntry));
    }
  } catch (error) {
    result = { ok: false };
  }

  if (!result.ok) {
    yield put(modalRequestFailed());
  }
}
