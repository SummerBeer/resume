
function getVertifyCode(len){
    var code = ""
    for(var i=0; i<len; i++){
        code += _.random(0,9)
    }
    return code
}