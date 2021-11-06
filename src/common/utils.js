// 防抖函数
export function debounce(func, time) {
  let timer;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg);
    }, time);
  };
}