import {
  div
} from '@cycle/dom'
import xs from 'xstream'

export function Test(sources) {

  const vtree$ = xs.of(div('test'))

  const sinks = {
    DOM: vtree$
  }

  return sinks;

}
