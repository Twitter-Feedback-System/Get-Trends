const io = require("socket.io-client");

class Socket {
  constructor(server) {
    this.socket = io(server, {
      transports: ["websocket"],
      upgrade: false,
    });

    this.socket.on("connect", () => {
      if (this.socket.connected) {
        // console.log("Connected");
      } else {
        console.log("Connection Failed");
      }
    });

    this.socket.on("disconnect", () => {
      if (this.socket.disconnected) {
        console.log("Disconnected");
      }
    });

    this.socket.on("response", (data) => {
      data = JSON.parse(data);
      if (data.header.type === "GET_SESSION") {
        this.sessionId = data.body.session_id;
        // console.log(this.sessionId);
      } else if (data.header.type === "GET_TWEETS") {
        if (this.searchCallback !== undefined) {
          this.searchCallback(data);
        }
      }
    });
  }

  sendRequest(data) {
    this.socket.emit("request", JSON.stringify(data));
  }

  setSearchCallback(callback) {
    this.searchCallback = callback;
  }
}

export default Socket;