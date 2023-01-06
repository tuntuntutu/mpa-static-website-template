import React from "react";
import ReactDOM from "react-dom/client";
import i18n from "@/configs/i18n";
import { PageShell } from "./PageShell";
import { getPageTitle } from "./getPageTitle";
import type { PageContextClient } from "./types";
import "./css/index.less";

export { render };
export { onHydrationEnd };
export { onPageTransitionStart };
export { onPageTransitionEnd };
export const clientRouting = true;
export const hydrationCanBeAborted = true;

let root: ReactDOM.Root;

async function render(pageContext: PageContextClient) {
  const { Page, pageProps, urlParsed = { search: {} } } = pageContext;

  i18n.init(urlParsed.search);
  const page = (
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  );
  const container = window.document.getElementById("root")!;

  if (pageContext.isHydration) {
    root = ReactDOM.hydrateRoot(container, page);
  } else {
    if (!root) {
      root = ReactDOM.createRoot(container);
    }
    root.render(page);
  }
  document.title = getPageTitle(pageContext);
}

function onHydrationEnd() {
  console.log("Hydration finished; page is now interactive.");
}
function onPageTransitionStart() {
  console.log("Page transition start");
  document.querySelector("body")!.classList.add("page-is-transitioning");
}
function onPageTransitionEnd() {
  console.log("Page transition end");
  document.querySelector("body")!.classList.remove("page-is-transitioning");
}
