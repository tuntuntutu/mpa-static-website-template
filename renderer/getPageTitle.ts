export { getPageTitle };

function getPageTitle(pageContext: {
  exports: { documentProps?: { title: string } };
  documentProps?: { title: string };
}): string {
  return (
    (pageContext.exports.documentProps || {}).title ||
    (pageContext.documentProps || {}).title ||
    "Home"
  );
}
