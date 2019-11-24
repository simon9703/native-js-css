function debounce(fn, delay = 0, options= {
    leading: true, // 首次立即执行
    context: null
}) {
    let timer = null;
    return function (...args) {
        if (timer) {
           clearTimeout(timer)
        }
        if (!timer && options.leading) {  // 立即执行，设置空的定时器。
            timer = setTimeout(null, delay)
            fn.apply(options.context, args)
        } else {
            timer = setTimeout(()=>{
                fn.apply(options.context, args)
                timer = null  //清空定时器，便于重新判断是否立即执行。
            }, delay, ...args)

        }
    }
}

function throttle(fn, delay, options = {
    leading: false, // 首次立即执行
    trailing: true, // 最后一次是否一定执行 ==>  首次执行时，按时间戳判断时，末尾不一定能执行。
    context: null
}) {
    let timer = null
    let pre = new Date().getTime() // 首次执行全用时间戳判断
    return function (...args) {
        if (!options.leading){ // 不需要首次执行，用定时器实现。
            if (timer) return
            console.log('throttle')
            timer = setTimeout(function (...arg) {
                fn.apply(options.context, args)
                timer = null
            }, delay, ...args)
        }else { //首次执行，时间戳实现。
            let now =  new Date().getTime()
            if (now - pre > delay) {
                console.log('immediate')
                pre = now
                fn.apply(options.context, args)
            } else if (options.trailing) { // 末尾追加执行。
                clearTimeout(timer)
                timer = setTimeout(function (...arg) {
                    fn.apply(options.context, args)
                }, delay, ...args)
            }
        }
    }
}
