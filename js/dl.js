window.onload=function(){
    // 获取页面中的input元素
    let user=document.querySelector(".yhm");
    let pass=document.querySelector(".m");
    let btn=document.querySelector(".ture");
    pass.onblur=function () {
        if (user.value=="111" && pass.value=="123456"){
            ture.style.backgroundColor="#0ecf98";

        }
    }
    btn.onclick=function () {
        if (user.value=="111" && pass.value=="123456"){
            window.open("index.html");
		}
    }
}