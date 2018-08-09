import db from '../db';

// 后台页面接口
import Router from 'koa-router';

const router = new Router()

/* router.get('/api/getProjectType', (ctx, next) => {
    ctx.body = 'path: /api/getProjectType'
}) */

router.post('/add/user', async (ctx, next) => {
    return db.sequelize.transaction(t => {
        return db.User.create({
            username: ctx.request.body.name,
            age: ctx.request.body.age,
        },{
            transaction: t
        }).then(result => {
            ctx.body = {
                code: 200,
                msg: '添加成功',
                data: {}
            };
        }).catch(err => {
            console.log("发生错误：" + err);
            ctx.body = {
                code: -200,
                message: '添加失败'
            }
        });
    })
});

router.get('/delete/user/:userid', async (ctx, next) => {
    return db.sequelize.transaction(t => {
        return db.User.destroy({
            where: {
                id: ctx.params.userid
            }
        }, {
            transaction: t
        }).then(result => {
            ctx.body = {
                code: 200,
                msg: '删除成功',
                data: {}
            };
        }).catch(err => {
            ctx.body = {
                code: -200,
                message: '删除失败'
            }
        });
    })
});

router.get('/get/user/:userid', async (ctx, next) => {
    return db.sequelize.transaction(t => {
        return db.User.findOne({
            id: ctx.params.userid
        },{ 
            transaction: t
        }).then(result => {
            ctx.body = {
                code: 200,
                msg: '查询成功',
                data: result
            };
        }).catch(err => {
            ctx.body = {
                code: -200,
                message: '查询失败'
            }
        });
    });
});

router.post('/update/user/age', async (ctx, next) => {
    return db.sequelize.transaction(t => {
        return db.User.findById(ctx.request.body.id, {
            transaction: t
        }).then(user => {
            return user.update({
                age:ctx.request.body.age
            },{
                transaction:t
            });
        }).then(result => {
            ctx.body = {
                code: 200,
                msg: '修改成功',
                data: {}
            };
        }).catch(err => {
            ctx.body = {
                code: -200,
                message: '修改失败'
            }
        });
    })
});

export default router;