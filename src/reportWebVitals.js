const reportWebVitals = onPerfEntry => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
    // import("/Mrquickfix/node_modules/.vite/deps/web-vitals.js?v=2e3e7654").then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    //     getCLS(onPerfEntry);
    //     getFID(onPerfEntry);
    //     getFCP(onPerfEntry);
    //     getLCP(onPerfEntry);
    //     getTTFB(onPerfEntry);
      });
    }
  };
export default reportWebVitals;