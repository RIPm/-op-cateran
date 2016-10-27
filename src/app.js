import {
  div
} from '@cycle/dom'
import isolate from '@cycle/isolate'
import xs from 'xstream'

import {
  routeClick
} from 'src/routes'
import {
  routePage
} from './routes'
import {
  Navbar
} from 'components/navbar/main'
import {
  Header
} from 'components/header/main'


export function App(sources) {

  const infoSources = Object.assign({}, sources, {
    prop$: {
      name: "rip",
      image: "http://a.cdnzz.com/66b5db3b9ad228f70de265bb98b86890/static/img/user-13.jpg"
    }
  })

  const navbar$ = isolate(Navbar, 'navbar')(infoSources)
  const page$ = isolate(routePage, 'page')(sources)
  const header$ = isolate(Header, 'header')(infoSources)

  const state$ = xs.combine(navbar$.DOM, page$.DOM, header$.DOM)

  const vDom$ = state$.map(([navbar, page, header]) =>
    div('#page-container.fade.page-sidebar-fixed.page-header-fixed.in', [
      div('#header.header.navbar.navbar-default.navbar-fixed-top', [header]),
      div('#sidebar.sidebar', [navbar]),
      div('.sidebar-bg'),
      div('#content.content', [page])
    ])
  )

  const route$ = xs.merge(navbar$.Router, header$.Router, page$.Router)

  const sinks = {
    DOM: vDom$,
    Router: route$
  }

  return sinks

}
