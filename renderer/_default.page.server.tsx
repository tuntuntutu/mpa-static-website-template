import { renderToStream } from "react-streaming/server";
import React from "react";
import i18n from "@/configs/i18n";
import { escapeInject } from "vite-plugin-ssr";
import { PageShell } from "./PageShell";
import { getPageTitle } from "./getPageTitle";
import type { PageContextServer } from "./types";

const passToClient = [
  "pageProps",
  "documentProps",
  "someAsyncProps",
  "urlParsed:",
];

async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlParsed = { search: {} } } = pageContext;

  i18n.init(urlParsed.search);

  const stream = await renderToStream(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>,
    // We don't need streaming for a pre-rendered app.
    // (We still use react-streaming to enable <Suspsense>.)
    { disable: true }
  );

  const title = getPageTitle(pageContext);

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
  <meta charset="utf-8">
  <meta name="renderer" content="webkit">
  <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1">
  <meta name="viewport" content="initial-scale=1.0, user-scalable=no, width=device-width">
  <meta name="format-detection" content="telephone=no, email=no"/>
  <meta name="Keywords" content="">
  <meta name="description" content='' >
<!--  <meta name="baidu-site-verification" content="" />-->
  <title>${title}</title>
  <script type="text/javascript">
    (function (doc, win) {
      function setRemFontSize() {
        var remSize;

        if (window.innerWidth > 1440) {
          remSize = window.innerWidth / 19.2;
        } else if (window.innerWidth > 768) {
          remSize = window.innerWidth / 14.4;
        } else {
          remSize = window.innerWidth / 7.5;
        }

        doc.querySelector('html').style.fontSize = remSize + 'px';
      }

      setRemFontSize();
      win.addEventListener('resize', function () {
        setTimeout(function () {
          setRemFontSize();
        }, 200);
      });
    })(document, window);
  </script>
</head>
<body>
  <div id="root">${stream}</div>
</body>
</html>
`;

  return {
    documentHtml,
    pageContext: async () => {
      return {
        someAsyncProps: 42,
      };
    },
  };
}

export { render };
export { passToClient };
