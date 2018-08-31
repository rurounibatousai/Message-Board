const MessagesDao = require("../dao/Messages_dao.js")

const MessagesService = {
    //添加留言信息
    add(req, res, next) {
        const {
            contex
        } = req.body
        MessagesDao.save({
                contex
            })
            .then(data => {
                res.json({
                    res_code: 1,
                    res_error: "",
                    res_body: data

                })
            })
            .catch(err => {
                res.json({
                    res_code: -1,
                    res_error: "",
                    res_body: {}
                })
            });
    },
    delete(req, res, next) {
        const {
            _id
        } = req.body
        MessagesDao.delete({
                _id
            })
            .then(data => {
                res.json({
                    res_code: 1,
                    res_error: "",
                    res_body: data

                })
                console.log(data)
            })
            .catch(err => {
                res.json({
                    res_code: -1,
                    res_error: "",
                    res_body: {}
                })
            });
    },
    //分页查询留言内容
    listByPage(req, res, next) {
        //获取带查询的页码
        let {
            page
        } = req.query;
        page = page || 1;
        //调用数据库查询方法
        MessagesDao
            .count()
            .then((data) => {
                MessagesDao
                    .findByPage(page)
                    .then(pagesData => {
                        //总页数
                        const totalPages = Math.ceil(data / 5);
                        res.json({
                            res_code: 1,
                            res_error: "",
                            res_body: {
                                data: pagesData,
                                count: data,
                                totalPages
                            }
                        }).catch(err => {
                            res.json({
                                res_code: -1,
                                res_error: err,
                                res_body: {}
                            })
                        })
                    }).catch(err => {
                        res.json({
                            res_code: -1,
                            res_error: err,
                            res_body: {}
                        })
                    })
            })
    }
}
module.exports = MessagesService;