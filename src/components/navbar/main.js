import {
  div
} from '@cycle/dom'
import xs from 'xstream'

import navbarConfig from 'json!./list.json'
import {
  routeClick
} from 'src/routes'
import {currentPath} from 'utils/history'
import view from './view'

export function Navbar(sources) {

  const route$ = routeClick(sources.DOM.select('.route'))

  const vDom$ = route$.startWith(currentPath)
    .map((href) =>
      div({
        attrs: {
          'data-scrollbar': 'true',
          'data-height': '100%'
        }
      }, [
        view.info(sources.prop$),
        view.nav(href, navbarConfig)
      ])
    )

  return {
    DOM: vDom$,
    Router: route$
  }
}
