export let throttle = (fn) => {
  let canRun = true;
  return function () {
    if (canRun) {
      fn.apply(this, arguments);
      canRun = false;
      setTimeout(() => (canRun = true), 1000);
    }
  };
};
