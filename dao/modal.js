//引入Mongoose
const mongoose = require('mongoose');
//连接数据库
mongoose.connect('mongodb://localhost/content', {
    useNewUrlParser: true
});
//留言模型
const Messages = mongoose.model("messages", {
    contex: String
});

module.exports = {
    Messages
};