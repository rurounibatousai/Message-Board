const {
    Messages
} = require("./modal.js");
const MessagesDao = {
    save(MessagesInfo) {
        return new Messages(MessagesInfo).save();
    },
    //总记录条数
    count() {
        return Messages.find().count();
    },
    //按页查找留言信息
    findByPage(page) {
        //假定每页显示5条数据
        const pageSize = 5;
        //查询
        return Messages.find().skip((page - 1) * pageSize).limit(pageSize)
    },
    find(currpage, limitcount) {
        let a = Number(currpage),
            b = Number(limitcount);
        return Messages.find().skip((a - 1) * b).limit(b);
    },
    delete(_id) {
        return Messages.deleteOne({
            _id
        });
    },
}
module.exports = MessagesDao;