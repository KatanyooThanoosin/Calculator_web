let curText = document.getElementById("cur")
let curNum = 0
let isFloat = false
let fCount = 1
let curOper = ""
let previousNum = 0
let countDigit = 0

addNumber = (el) => {
    if (countDigit == 8 || (el=="." && isFloat))return
    if (el == '.') {
        curNum = parseFloat(curNum)
        isFloat = true
        curText.innerHTML = curNum.toString() + "."
        return
    }
    else if (isFloat) {
        if(el==0){
            curText.innerHTML += "0"
            countDigit = countDigit +1
            fCount *= 10
            return
        }
        curNum = parseInt(curNum*fCount)
        curNum = curNum * 10 + el
        fCount *= 10
        curNum /= fCount
    }
    else {
        curNum = curNum * 10 + el
    }
    countDigit = countDigit +1
    console.log(curNum)
    curText.innerHTML = curNum
}

function allClear() {
    curNum = 0;
    countDigit = 0;
    previousNum = 0;
    curOper = ""
    isFloat = false;
    fCount = 1;
    curText.innerHTML = curNum;
}

function dataOper(el) {
    if(previousNum == 0) {
        previousNum = curNum;
        curNum = 0;
        countDigit = 0;
        isFloat = false;
        fCount = 1;
    }
    else if (curNum != 0) equalHandler()
    curOper = el;
}

function equalHandler() {
    if (curOper == "*") {
        previousNum = previousNum * curNum;
    }
    else if (curOper == "/") {
        previousNum = previousNum / curNum;
        previousNum = parseInt(previousNum*10000000)/10000000
    }
    else if (curOper == "-") {
        previousNum = previousNum - curNum;
    }
    else if (curOper == "+") {
        previousNum = previousNum + curNum;
    }
    if (previousNum == 0) {
        curText.innerHTML = curNum
        previousNum = curNum
    }

    else {
        curText.innerHTML = previousNum
    }

    curOper = ""
    curNum = 0;
    countDigit = 0;
    isFloat = false;
    fCount = 1;
}

function delNumber() {
    if (isFloat == false) {
        curNum = parseInt(curNum / 10)
        curText.innerHTML = curNum
    }

    else {
        curNum = curNum * fCount
        fCount /= 10
        curNum = parseInt(curNum / 10)
        curNum = curNum / fCount
        curText.innerHTML = curNum
        isFloat = fCount != 1
    }
    countDigit-=1
}

function buakLob() {
    curNum = curNum * (-1);
    curText.innerHTML = curNum;
}

function percent(){
    if(countDigit>6)return
    if(previousNum==0)previousNum = curNum
    previousNum = previousNum / 100;
    previousNum = parseInt(previousNum*10000000)/10000000
    curText.innerHTML = previousNum

    let sNum=""+previousNum;
    sNum=sNum.replace(".","")
    countDigit = sNum.length
    
    curOper = ""
    curNum = 0;
    isFloat = false;
    fCount = 1;
}