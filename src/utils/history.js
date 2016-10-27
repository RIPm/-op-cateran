import {
  createHistory,
  createHashHistory
} from 'history'
import {
  router
} from 'json!./config.json'

const _history = router["mode"] == "hash" ? createHashHistory() : createHistory;

export const history = _history

export const currentPath = _history.getCurrentLocation().pathname
