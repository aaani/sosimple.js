var template = "hey how are you <% if(x===1){ %>Ani<%} else {%>Bunny<% } %>? How was your day?";

function render(tpl, model){
    re1 = /<%(?:\s*)(.*?)(?:\s*)%>/ig;
    var aux;
    while ((aux = re1.exec(tpl)) !== null) {
        tpl = tpl.replace(aux[0], "';"+aux[1]+"; str+='");
        re1.lastIndex = re1.lastIndex - (aux[0].length - 2);

    }
    var new_tpl = "var str='"+tpl+"'; return str";
    var fn = new Function("x",new_tpl);

    return  fn;
}

var f = render(template, {});
console.log(f(1));