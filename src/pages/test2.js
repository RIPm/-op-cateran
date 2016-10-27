import { div } from '@cycle/dom'
import xs from 'xstream'

export function Test2 (sources) {

  const vtree$ = xs.of(div('test3'))

  const sinks = {
    DOM: vtree$
  };

  return sinks;

}
