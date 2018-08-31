//头部对象构造函数
function Header() {
    this.createDom();
}
//头部导航的模板字符串内容
Header.template = `<nav class="navbar navbar-default navbar-inverse">
<div class="container-fluid">
    <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="./manage.html">留言板管理系统</a>
    </div>
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
            <li><a href="./manage.html">查看留言 <span class="sr-only">(current)</span></a></li>
            <li><a href="./users.html">看看还有哪些人在用留言板</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
            <li><a href="#">欢迎您,XXX</a></li>
            <li class="logout">
                <a href="#" class="dropdown-toggle">注销</a>
            </li>
    </div>
</div>
</nav>`;
//原型
$.extend(Header.prototype, {
    //创建DOM元素并且渲染
    createDom() {
        $(Header.template).appendTo("header")
    }
});
//创建头部对象实例
new Header();