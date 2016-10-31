import {
  div,
  span,
  ul,
  li,
  a,
  i,
  img,
  small,
  b
} from '@cycle/dom'

const navView = (_href, _state) => {
  let navOpen = false

  const liDom$ = (href) => (data) => {
    let highlightStyle = href == data.match ? '.active' : ''

    if (navOpen == false) navOpen = highlightStyle

    return li(highlightStyle, [
      a('.route', {
        props: {
          href: data.match
        }
      }, data.name)
    ])
  }

  const childrenDom$ = (data) =>
    ul('.sub-menu', data.map(liDom$(_href)))

  const nav$ = _state.map((state) => {
    let children = childrenDom$(state.children)
    return li(`.has-sub.${navOpen}`, [
      a({
        props: {
          href: 'javascript:;'
        }
      }, [
        b('.caret .pull-right'),
        i('.fa .fa-laptop'),
        span(state.name)
      ]),
      children
    ])
  })

  return ul('.nav', [
    li('.nav-header', 'dd'),
    ...nav$,
    li([
      a('.sidebar-minify-btn', {
        props: {
          'href': 'javascript:;',
          'data-click': 'sidebar-minify'
        }
      }, [
        i('.fa.fa-angle-double-left')
      ])
    ])
  ])
}

const infoView = (info) => {
  const image = (image) =>
    div('.image', [
      a({
        props: {
          href: 'javascript:;'
        }
      }, [
        img({
          props: {
            src: image
          }
        })
      ])
    ])

  return ul('.nav', [
    li('.nav-profile', [
      image(info.image),
      div('.info', [
        info.name,
        small('common user')
      ])
    ])
  ])
}

export default {
  info: infoView,
  nav: navView
}
