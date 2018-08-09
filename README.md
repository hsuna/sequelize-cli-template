
创建表 Todo
| a | b | c |
| -- | -- | -- |
| --version          | Show version number                                       |                                                           [boolean]|
|--help             | Show help                                                                   |                                         [boolean]|
|--env              | The environment to run the command in                                       |                 [string] [default: "development"]|
|--config           | The path to the config file                                                 |                                          [string]|
|--options-path     | The path to a JSON file with additional options                             |                                          [string]|
|--migrations-path  | The path to the migrations folder                                           |                  [string] [default: "migrations"]|
|--seeders-path     | The path to the seeders folder                                              |                     [string] [default: "seeders"]|
|--models-path      | The path to the models folder                                               |                      [string] [default: "models"]|
|--url             | The database connection string to use. Alternative to using --config files   |                                         [string]|
|--debug            | When available show various debug information                               |                        [boolean] [default: false]|
|--name             | Defines the name of the new model                                           |                               [string] [required]|
|--attributes      |  A list of attributes                                                        |                               [string] [required]|
|--underscored      | Use snake case for the timestamp's attribute names                          |                        [boolean] [default: false]|

```
 


node_modules\.bin\sequelize model:create --name Todo --attibutes "text:string,flag:boolean,value:integer"
```


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
  migration:generate                Generates a new migration file                                                                                                        [aliases: migration:create]
  model:generate                    Generates a model and its migration                                                                                                       [aliases: model:create]
  seed:generate                     Generates a new seed file                                                                                                                  [aliases: seed:create]

Options:
  --version  Show version number                                                                                                                                                            [boolean]
  --help     Show help                                                                                                                                                                      [boolean]


```
/**db:migrate                        Run pending migrations
db:migrate:schema:timestamps:add  Update migration table to have timestamps
db:migrate:status                 List the status of all migrations
db:migrate:undo                   Reverts a migration
/db:migrate:undo:all               Revert all migrations ran
node_modules\.bin\sequelize db:migrate
```