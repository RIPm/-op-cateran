import {
  div,
  span,
  a,
  ul,
  li,
  b,
  img,
  i
} from '@cycle/dom'

const leftView = () =>
  div('.navbar-header', [
    a('.navbar-brand.toIndex', {
      props: {
        href: '/'
      }
    }, [
      span('.navbar-logo'),
      "Red Line"
    ])
  ])

const rightView = (_info) => {
  let notification =
    li('.dropdown', [
      a('.dropdown-toggle.f-s-14', {
        props: {
          "data-toggle": "dropdown"
        }
      }, [
        i('.fa.fa-bell-o'),
        span('.label.hide')
      ]),
      ul('.dropdown-menu.media-list.pull-right.animated.fadeInDown', [
        li('.dropdown-header', 'Notifications'),
        li('.dropdown-footer.text-center', [
          a({
            props: {
              href: 'javascript:;'
            }
          }, "View more")
        ])
      ])
    ])

  let info = () =>
    li('.dropdown.navbar-user', [
      a('.dropdown-toggle', {
        props: {
          "data-toggle": "dropdown",
          "aria-expanded": "false",
          href: "javascript:;"
        }
      }, [
        img({
          props: {
            src: _info.image
          }
        }),
        span('.hidden-xs', _info.name),
        b('.caret')
      ]),
      ul('.dropdown-menu.animated.fadeInLeft', [
        li('.arrow'),
        li([
          a({
            props: {
              href: "javascript:;"
            }
          }, "Edit Profile")
        ]),
        li([
          a(".logout", {
            props: {
              href: "javscript:;"
            }
          }, "Log out")
        ])
      ])
    ])

  return ul('.nav.navbar-nav.navbar-right', [
    notification,
    info()
  ])
}

export default {
  left: leftView,
  right: rightView
}
