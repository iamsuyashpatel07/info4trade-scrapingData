# Instruction

## CSV FILE comma separated file

## npm install request-promise request cheerio json2csv

###### used video https://www.youtube.com/watch?v=BqGq9MTSt7g

# Further Instruction to build trade app

# client-side

## npx create-react-app tradefortrade

### npm socket.io-client

# server-side

## npm socket.io

# Visualization How it will work !!!

### client will give input of url
### url will be send to server-side 
### server-side will fetch data
### data will be sent back to client side 
### the data will be displayed to client.

```javascript
//SERVER SIDE
const http=require("http");
const socketio=require("socket.io");
const PORT=process.env.PORT;
const server=http.createServer();
const io=socketio(server);
io.on=("connectio",socket={
setInterval(function(){
socket.emit("now",{time:new Date()})
},5000)
socket.on("here",function(payload){
consle.log(payload);
})
});
server.listen(PORT||3000,function(){{
console.log("server is up");
})

```

```javascript
//client side

const io = require("socket.io-client");
const socket = io("http://localhost:3000/");
socket.on("connect", () => {
  console.log(socket.id);
  setInterval(function () {
    socket.emit("here", { message: "hello myself client" });
  }, 3000);
});
socket.on("now", (payload) => {
  console.log(payload);
});
```

```terminal
//client
node client.js
ygeefghTUnjfdg

{time:'2020-10-1949:48:49'}
{time:'2020-10-1949:48:49'}


```

```terminal
//server
node server.js
{message :"hello myself client"}
{message :"hello myself client"}
{message :"hello myself client"}

```
