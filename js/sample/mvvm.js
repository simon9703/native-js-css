class Mvvm {
    constructor(options) {
        this.$options = options
        this.$data = options.data
        this.observe(options.data)  // 监听数据
        console.log(this.$data)
        this.compiler(options.el)  // 替换节点中{{}}, 并绑定对应data属性。
    }

    observe(data) {
        let _this = this
        Object.keys(data).forEach(pro => {
            _this.deepObserve(data[pro]) //深度遍历
            let watcher = new Watcher() // 闭包存储当前属性 <--对应-->节点
            data['_' + pro] = data[pro] // 防止取值（自生）引发的无限循环
            Object.defineProperty(data, pro, {
                set(val) {
                    console.log('update property:', pro)
                    _this.deepObserve(val)
                    data['_' + pro] = val
                    watcher.notify(val)
                },
                get() {
                    Watcher.target && watcher.addSubNode(Watcher.target) && (Watcher.target = null)// 在第一次读取(更换)模板值时，绑定到对应节点。
                    return data['_' + pro]
                }
            })
        })
    }

    deepObserve(data) {
        if (Object.prototype.toString.call(data) === '[object Object]') this.observe(data) //深度遍历
    }

    compiler(el) {
        let _this = this
        let root = document.querySelector(el) // 根节点
        let reg = /{{2}(.*?)}{2}/g  // 非贪婪模式，匹配最少
        function replaceExpression(node) {
            node.childNodes.forEach(element => {
                if (element.nodeType === 3 && reg.test(element.textContent)) {   // 能读取到最小的文本节点。（文本节点只有textContent属性，没有innerHtml/Text）
                    console.log('first bind element: ', element.textContent)
                    // 替换同一文本节点下多个模板值。  bug::只有第一次正确，之后会全部替换当前文本。
                    element.textContent = element.textContent.replace(reg, (match, p1) => { // 匹配文本、第一组的值
                        Watcher.target = element // 利用watcher的静态属性 --> 临时存储当前属性对应的节点，作中转。
                        return p1.split('.').reduce((pre, current) => {  // 获取a.b.c的值
                            return pre[current]
                        }, _this.$options.data) // 触发get函数，同时绑定节点。
                    })

                } else if (element.nodeType === 1) { //元素节点
                    replaceExpression(element)
                }
            })
        }
        replaceExpression(root)
    }
}

class Watcher {
    constructor() {
        this.subs = []  // 存储所有使用{{pro}}模板的节点
    }

    addSubNode(node) {
        this.subs.push(node)
    }

    notify(val) {
        this.subs.forEach(element => {
            element.textContent = val
        })
    }
}