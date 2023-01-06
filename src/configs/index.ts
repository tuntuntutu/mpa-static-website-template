const PREFIX = process.env.NODE_ENV === "development" ? "//127.0.0.1:8002" : "";

// const transformUrls = (obj = {}, projectPre = '') => Object.keys(obj).reduce((ret, key) => {
//   ret[key] = { ...obj[key], url: `${PREFIX}${projectPre}${obj[key].url}` };
//
//   return ret;
// }, {});
const { userAgent } = window.navigator;
const agent = userAgent.toLowerCase();

const isMobile = /applewebkit.*mobile.*/.test(agent);

export { PREFIX, isMobile };
