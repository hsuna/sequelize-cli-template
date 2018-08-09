module.exports = {
    apps: [
      {
        name: "sequelize_cli",
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