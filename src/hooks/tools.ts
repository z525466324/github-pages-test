// 防抖--  操作结束后多少秒触发一次  用于输入

export function debounce (fn: any, delay: number) {
    let timer: any = null
    return function (...args: any[]) {
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(null, args)
        }, delay)
    }
}

// 节流--   多少时间触发一次
export function throttling (fn:any, delay: number) {
    let timer: any = null
    return function(...args: any[]) {
        console.log(timer)
        if(!timer) {
            timer = setTimeout(() => {
                fn.apply(null, args)
                timer = null
            }, delay)
        }
    }
}