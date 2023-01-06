export const throttle = (func: () => void, delay: number) => {
  let prev = Date.now();

  let timer: any = null;

  return () => {
    const now = Date.now();

    const timer2 = setTimeout(func, delay);

    if (now - prev > delay) {
      prev = now;
    } else {
      clearTimeout(timer);
      timer = timer2;
    }
  };
};
// export const getUrlParam = (url = window.location.search) => {
//   const obj: Record<string, any> = {};
//   const str = url.split("#")[0].split("?")[1];
//
//   if (str) {
//     const params = str.split("&");
//
//     for (let i = 0, j = params.length; i < j; i++) {
//       const arr: string[] = params[i].split("=");
//
//       // eslint-disable-next-line
//       obj[arr[0]] = arr[1];
//     }
//   }
//
//   return obj;
// };
