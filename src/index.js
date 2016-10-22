import {run} from '@cycle/xstream-run'
import {makeDOMDriver} from '@cycle/dom'
import {App} from './app'

require('assets/styles/test.css')

const main = App

const drivers = {
  DOM: makeDOMDriver('#app')
}

run(main, drivers)
