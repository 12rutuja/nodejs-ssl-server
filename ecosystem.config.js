module.exports = {
  apps: [{
    name: "hello-node",
    script: "./server.js",
    watch: true,
    instances: 1,
    exec_mode: "fork"
  }]
}
