import {div} from '@cycle/dom'
import xs from 'xstream'
import {
  routeClick
} from 'src/routes'
import view from './view'

export function Header(sources) {

  const route$ = routeClick(sources.DOM.select('.toIndex'))

  const vDom$ = xs.of(
    div('.container-fluid', [
      view.left(),
      view.right(sources.prop$)
    ])
  )

  return {
    DOM: vDom$,
    Router: route$
  }
}
