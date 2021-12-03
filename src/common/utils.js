// 防抖函数
export function debounce(func, time) {
  let timer;
  return function (...arg) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, arg);
      console.log('执行了');
    }, time);
  };
}

/**
 * 将时间戳转换为真实日期的函数
 */
 export function formatDate(date, fmt) {
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + '';
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
    }
  }
  return fmt;
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
};

// 节流函数
export function throttle(func, delay){
  let pre = 0;
  return function(){
    let context = this,
    args = arguments,
    now = new Date();
    if(now - pre > delay){
      func.apply(context, args);
      pre = now;
      // console.log('生效');
    }
  }
}