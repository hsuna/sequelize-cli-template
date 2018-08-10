# sequelize_cli_template

> nodejs连接mysql (pm2 + koa2 + sequelize_cli)
> 作者: Hsuna<br/>
> 日期: 2018/08、10<br/>

### 一、项目架构

```
./workspace
├── config                      // 配置
├── db                          // 数据库
├── migrations                  // 迁移文件
├── models                      // 模型
├── router                      // 路由
├── utils                       // 工具库录
├── .babelrc                    // babelrc配置文件
├── .sequelizerc                // sequelizerc配置文件
├── ecosystem.config.js         // pm2配置文件
├── app.js                      // 项目入口
├── start.js                    // 启动文件
└── package.json                // 项目配置信息
```

### 二、开始项目

#### 1.配置项目

配置config/host文件：

```
{
    port: 3000 // 启动端口
}
```

配置config/db文件：

```
{
    username: 'www',        // 用户名
    password: "www",        // 用户密码
    database: 'nodejs',     // 数据库名
    host: '127.0.0.1',      // 地址
    port: 3306,             // 端口
    dialect: 'mysql',       // 方言
}
```


#### 2.安装及启动项目

1.  `git clone http://git.3k.com/web/Tech/sequelize_cli_template.git`
3.  安装依赖：`npm i`
4.  开发：`npm start`
5.  测试：`npm run test`
6.  生产：`npm run prod`


### 三、sequelize命令

```
eg: sequelize [Commands]
Commands:
  db:migrate                        Run pending migrations
  db:migrate:schema:timestamps:add  Update migration table to have timestamps
  db:migrate:status                 List the status of all migrations
  db:migrate:undo                   Reverts a migration
  db:migrate:undo:all               Revert all migrations ran
  db:seed                           Run specified seeder
  db:seed:undo                      Deletes data from the database
  db:seed:all                       Run every seeder
  db:seed:undo:all                  Deletes data from the database
  db:create                         Create database specified by configuration
  db:drop                           Drop database specified by configuration
  init                              Initializes project
  init:config                       Initializes configuration
  init:migrations                   Initializes migrations
  init:models                       Initializes models
  init:seeders                      Initializes seeders
  migration:generate|create         Generates a new migration file
  model:generate|create             Generates a model and its migration
  seed:generate|create              Generates a new seed file
```

#### 1.配置.sequelizerc

如果不配置.sequelizerc 的话，sequelize init 初始化的文件夹会出现在项目目录下面，如果配置了.sequelizerc 就可以指定到相应的目录

```
const path = require('path')

module.exports = {
    'config': path.resolve('./config/db.js'),
    'migrations-path': path.resolve('./migrations'),
    'models-path': path.resolve('./models'),
    'seeders-path': path.resolve('./seeders'),
}
```

执行 sequelize init 命令

```
sequelize init
```


#### 2.创建model (Todo)

```
$ sequelize model:create --name Todo --attibutes "text:string,flag:boolean,value:integer"
```

| 参数 | 说明 | 类型 |
| -- | -- | --: |
| --version | Show version number | [boolean]|
|--help | Show help | [boolean] |
|--env | The environment to run the command in | [string] [default: "development"]|
|--config | The path to the config file | [string]|
|--options-path | The path to a JSON file with additional options | [string]|
|--migrations-path | The path to the migrations folder | [string] [default: "migrations"]|
|--seeders-path | The path to the seeders folder | [string] [default: "seeders"]|
|--models-path | The path to the models folder | [string] [default: "models"]|
| --url | The database connection string to use. Alternative to using --config files | [string]|
|--debug | When available show various debug information | [boolean] [default: false]|
| --name | Defines the name of the new model | [string] [required]|
| --attributes |  A list of attributes | [string] [required] |
|--underscored | Use snake case for the timestamp's attribute names | [boolean] [default: false] |


#### 3.创建migrations

```
$ sequelize db:migrate:create --name add-testcolumn-to-todo
```

执行命令后，会在migrations文件夹中生成20170726122010-add-testcolumn-to-todo.js 修改文件里的内容。

```
'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        queryInterface.addColumn('Todos', 'test', {
            type: Sequelize.STRING,
            allowNull: false
        })
    },

    down: function(queryInterface, Sequelize) {
        queryInterface.removeColumn('Todos', 'test')
    }
};
```


#### 4.运行migrations

```
$ sequelize db:migrate
```


#### 5.回滚migrations

```
$ sequelize db:migrate:undo
$ sequelize db:migrate:undo:all
```

[Migrations](http://docs.sequelizejs.com/manual/tutorial/migrations.html)