module.exports = {
  development: {
    username: 'www',
    password: "www",
    database: 'nodejs',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql',
    define: {
      underscored: true    // 字段以下划线（_）来分割（默认是驼峰命名风格）
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    port: 3306,
    dialect: 'mysql'
  }
}