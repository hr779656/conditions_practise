function myfunc(num1,num2,opreator){
    num1 = prompt("put in first number")
    num2 = prompt("put in second number")
    opreator = prompt (" put in opreator")

    if(opreator == "+"){
        document.write(`this is plus : ${num1 + num2} `)
    }else if(opreator == "-"){
        document.write(`this is minus : ${num1 - num2} `)
    }else if(opreator == "/"){
        document.write(`this is divide : ${num1 / num2} `)
    }else if(opreator == "*"){
        document.write(`this is multi : ${num1 * num2} `)
    }else if(opreator == "<"){
        document.write(`this is greater then : ${num1 < num2} `)
    }else if(opreator == ">"){
        document.write(`this is less then : ${num1 > num2} `)
    }else{
        document.write("sir! put in only opreators")
    }
}

myfunc()