import React from "react";
import HeaderBar from "@/components/header";
import FooterBar from "@/components/footer";
import { PageContextProvider } from "./usePageContext";
import type { PageContext } from "./types";

function PageShell({
  pageContext,
  children,
}: {
  pageContext: PageContext;
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <PageContextProvider pageContext={pageContext}>
        <HeaderBar pageContext={pageContext} />
        <div id="page-container" style={{ paddingTop: "0.4rem" }}>
          <div
            id="page-content"
            style={{
              padding: 20,
              paddingBottom: 50,
              minHeight: "100vh",
            }}
          >
            {children}
          </div>
        </div>
        <FooterBar />
      </PageContextProvider>
    </React.StrictMode>
  );
}

export { PageShell };
