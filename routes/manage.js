const express = require('express');
const router = express.Router();
const MessagesService = require("../services/MessagesService.js")
//添加留言
router.post("/add", MessagesService.add);
// router.get("/get", MessagesService.huoqu);
//按页查询
router.get("/list", MessagesService.listByPage)
//删除留言
router.post("/delete", MessagesService.delete)
module.exports = router;