const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");
const logger = require("./config/logger");
const http = require("http");
const { Server } = require("socket.io");

let server = http.createServer(app);

// Initialize Socket.io and pass the HTTP server
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Handle Socket.io connections
io.on("connection", (socket) => {
  console.log("A user connected");

  socket.on("joinChannel", (channel) => {
    socket.join(channel);
    io.to(channel).emit("message", `User joined ${channel}`);
  });

  socket.on("sendMessage", ({ channel, message }) => {
    io.to(channel).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

// Connect to MongoDB and start the server
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info("Connected to MongoDB");
  server.listen(config.port, () => {
    logger.info(`Listening to port ${config.port}`);
  });
});
