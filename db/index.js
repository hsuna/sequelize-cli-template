import fs from "fs";
import path from "path";
import Sequelize from "sequelize";
import { DATABASE } from '../config';

const sequelize = new Sequelize(
    DATABASE.database,  // 数据库名
    DATABASE.username,  // 用户名
    DATABASE.password,  // 用户密码
    {
        ...DATABASE,
        define: {
            underscored: true    // 字段以下划线（_）来分割（默认是驼峰命名风格）
        }
    }
);

const modelDir = path.resolve(__dirname, '../models');
let db = {};
//遍历模型文件夹，导入模型
fs
    .readdirSync(modelDir)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js')
    })
    .forEach(file => {
        let model = sequelize['import'](path.join(modelDir, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

db.Sequelize = Sequelize;
db.sequelize = sequelize;

export default db;