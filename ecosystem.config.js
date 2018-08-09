module.exports = {
    apps: [
      {
        name: "monitoring",
        script: "./start.js",
        watch: ['server'],
        env_test: {
          NODE_ENV: "test"
        },
        env_production: {
          NODE_ENV: "production"
        }
      }
    ]
  }