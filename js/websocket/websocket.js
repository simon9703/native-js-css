const path = require('path')
const express = require('express')
const app = express()
const server = require('http').Server(app)
const WebSocket = require('ws')
const wss = new WebSocket.Server({ server: server })

server.listen(9000, function() {
  console.log('listen 9000:')
})

// 广播
function broadcast(msg, from) {
  let content = {
    type: 'broadcast',
    data: {
      from: from,
      msg: msg
    }
  }
  wss.clients.forEach(client => {
    client.send(JSON.stringify(content))
  })
}

// 单独聊天
function chat(msg, from, to) {
  let content = {
    type: 'chat',
    data: {
      from: from,
      msg: msg
    }
  }

  wss.clients.forEach(client => {
    if ((client.sessionId = to)) {
      client.send(JSON.stringify(content))
    }
  })
}

function nameOnlinelist() {
  return Array.from(wss.clients).map(client => client.name)
}

wss.on('connection', ws => {
  // 连接成功！
  console.log('name online:', wss.clients.size)

  // 监听客户端消息
  ws.on('message', message => {
    console.log('server receive: ', message)

    let { type, data } = JSON.parse(message)
    switch (type) {
      case 'login': {
        // 登录
        ws.name = data.name
        console.log('login success: ', data.name)
        broadcast(`${data.name} join us!! ++++ ${JSON.stringify(nameOnlinelist())} ++++`, 'system')
        break
      }
      case 'chat': {
        // 单人
        chat(data.msg, ws.name, data.target)
        break
      }
      default: {
        // 默认群发
        broadcast(data.msg, ws.name)
      }
    }
  })

  // 连接关闭
  ws.on('close', () => {
    console.log('连接关闭')
  })
})
