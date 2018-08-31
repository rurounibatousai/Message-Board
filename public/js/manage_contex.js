//添加留言
function Messages() {
    this.addListenre();
    this.getMessagesHandler();
}
var q = 1;
$.extend(Messages.prototype, {
    //注册事件监听
    addListenre() {
        $(".btn-add-pos").on("click", $.proxy(this.addMessagesHandler, this));
        //翻页
        $(".pagination").on("click", "a", $.proxy(this.loadByPage, this))
        //让一个选项被选中
        $("#bs-example-navbar-collapse-1 ul:first li:eq(0)").addClass("active").siblings("li").removeClass("active");
        $("tbody").on("click", "button", $.proxy(this.delMessages, this))
    },
    //添加留言
    addMessagesHandler() {
        const data = $("#contex_form").serialize();
        if ($("#userText").val() == "") {
            return alert("心里好像空荡荡的")
        };
        $.post("/manages/add", data, (data) => {
            if (data.res_code === 1) {
                $("#startLeave").modal("hide")
                $("#userText").val("");
                this.getMessagesHandler(q);
            }
        }, "json")
    },
    //获取留言
    getMessagesHandler(page, pageSize) {
        page = page || 1,
            pageSize = 5;
        $.getJSON("/manages/list", {
            page,
            pageSize
        }, data => {
            // console.log(data)
            let html = "";
            for (let i of data.res_body.data) {
                html += `<tr>
                <td>李白</td>
                <td class="hide">${i._id}</td>
                <td>2018-9-1</td>
                <td>${i.contex}</td>
                <td><button style="border:none;background:none;" class="del">删除</button></td>
                </tr>`;
            };
            $("tbody").html(html);
            let x = "";
            for (var a = 1; a <= data.res_body.totalPages; a++) {
                x += `<li><a href="javascript:void(0)">${a}</a></li>`
            }
            $(".pagination").html(x)
            $(`.pagination li:eq(${page-1})`).addClass("active")
        });
    },
    //按页加载数据
    loadByPage(event) {
        let page;
        if (typeof event === "number")
            page = event;
        else //获取待加载的页码
            page = $(event.target).text();
        q = page;
        this.getMessagesHandler(page);
    },
    //删除留言
    delMessages(e) {
        let obj = e.target
        let result = $(obj).parent().siblings("td[class='hide']").text();
        $.post("/manages/delete", {
            _id: result
        }, (data) => {
            if (data.res_code === 1) {
                this.getMessagesHandler();
            }
        })
    }
});
new Messages();