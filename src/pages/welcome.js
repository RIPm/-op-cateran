import { div } from '@cycle/dom'
import xs from 'xstream'

export function Welcome (sources) {

  const vtree$ = xs.of(div('welcome to use'))

  const sinks = {
    DOM: vtree$
  };

  return sinks;

}
