import {
  run
} from '@cycle/xstream-run'
import {
  makeDOMDriver
} from '@cycle/dom'

import {
  makeRouterDriver
} from 'cyclic-router'
import switchPath from 'switch-path' // Required in v3, not required in v2 or below
import onionify from 'cycle-onionify'

import {
  history
} from 'utils/history'
import {
  App
} from './app'

const main = onionify(App)

const drivers = {
  DOM: makeDOMDriver('#app'),
  Router: makeRouterDriver(history, switchPath)
}

run(main, drivers)
