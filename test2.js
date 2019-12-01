["nick"].reduce((pre, current) => {
    console.log('xxx', pre, current, pre[current])
    return pre[current]
}, 1)