import {
  Welcome
} from 'pages/welcome.js'
import {
  Test
} from 'pages/test.js'
import {
  Test2
} from 'pages/test2.js'
import dropRepeats from 'xstream/extra/dropRepeats'
import xs from 'xstream'

const match = {
  '/': Welcome,
  '/project/create': Test,
  '/project': Test2
};

const createMatch = (sources) => {
  return sources.Router.define(match)
    .compose(dropRepeats((a, b) => a.path == b.path))

}

const getMatchPath = (sources) => {
  return ({
    path,
    value
  }) => {
    return value(Object.assign({}, sources, {
      router: sources.Router.path(path)
    }));
  }
}

export const routePage = (sources) => {

  const page$ = createMatch(sources).map(getMatchPath(sources)).remember()

  return {
    DOM: page$.map(c => c.DOM).flatten(),
    Router: page$.map(c => c.Router || xs.empty()).flatten()
  }

}

export const routeClick = (dom) => {
  return dom.events('click')
    .filter(ev => ev.target.attributes.href.textContent.match(/^\/.*/))
    .map(ev => {
      ev.preventDefault()
      return ev.target.attributes.href.value
    })
}
