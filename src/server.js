import React from 'react'
import { StaticRouter } from 'react-router-dom'
import Template from 'lib/Template'
import App from './App'

const htmlTemplate = (html, assets) => `
      <html lang="ru">
      <head>
        <link rel="preconnect" href="https://api.partymaker.zp.ua">
        <link rel="preconnect" crossorigin="anonymous" href="https://www.google-analytics.com">
        <meta content="width=device-width, minimum-scale=1, shrink-to-fit=no" name="viewport">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="apple-touch-icon" href="/apple-touch-icon.png">
        <link rel="manifest" href="/site.webmanifest">
        <link rel="mask-icon" href="/partymaker-favicon.svg" color="#9306BC">
        <meta name="msapplication-TileColor" content="#9306BC">
        <meta name="theme-color" content="#9306BC">
        <base href="/">
        <link rel="icon" href="favicon.ico" type="image/x-icon">
        <link rel="shortcut icon" href="/partymaker-favicon.png" type="image/x-icon">
        ${assets.title}
        ${assets.meta}
        ${assets.links}
        ${assets.styles}
      </head>
      <body>
         <div id="root">${html}</div>
         ${assets.scripts} 
        <!-- Google Analytics -->
        <script>
          window.ga = window.ga || function() {(ga.q = ga.q || []).push(arguments)}
          ga.l = +new Date
          ga('create', 'UA-147646131-1', 'auto')
          ga('send', 'pageview')
        </script>
        <script async src="https://www.google-analytics.com/analytics.js"></script>        
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-147646131-1"></script>
        <script>
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'))
          }
        </script>
      </body>
      </html>
  `

const render = async (request, response) => {
  const context = {}
  const template = new Template(<StaticRouter context={context} location={request.url}><App /></StaticRouter>)
  const html = template.render(htmlTemplate)
  response.send(html)
}

export default () => render
