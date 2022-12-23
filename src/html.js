import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/static/apple-touch-icon.png"></link>
        <link rel="icon" type="image/png" sizes="32x32" href="/static/favicon-32x32.png"></link>
        <link rel="icon" type="image/png" sizes="16x16" href="/static/favicon-16x16.png"></link>
        <link rel="mask-icon" href="/static/safari-pinned-tab.svg" color="#5bbad5"></link>
        <meta name="msapplication-TileColor" content="#2b5797"></meta>
        <meta name="theme-color" content="#ffffff"></meta>
        <script src="https://kit.fontawesome.com/aba8918a41.js" crossorigin="anonymous"></script>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        <meta name="google-site-verification" content="_f6ons0t1YM3ddQhUbg7cU321gsjKauoGPGuY4B1gfw" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
