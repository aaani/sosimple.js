function renderSoSimple(tpl, model){
    tpl = tpl.replace(/[\r\t\n]/g, " ");
    var re1 = /<%(?:=?)(?:\s*)(.*?)(?:\s*)%>/ig,aux;
    while ((aux = re1.exec(tpl)) !== null) {
        tpl = tpl.replace(aux[0], (aux[0].charAt(2) === "="?"'+":"';")+aux[1]+"; str+='");
        re1.lastIndex = re1.lastIndex - (aux[0].length - 2);
    }
    var fn = new Function("model","with(model){var str='"+tpl+"';} return str");
    return  fn(model);
}