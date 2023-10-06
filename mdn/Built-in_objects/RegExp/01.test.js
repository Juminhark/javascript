//? RegExp.prototype.test()

//? 주어진 문자열이 정규 표현신을 만족하는지 판별하고, true, false return

const solution = (my_string) => {
    let answer = []
    let regexp = new RegExp(/[0-9]/,'i')
    
    for(let e of my_string) {
        if(regexp.test(e)) answer.push(Number(e))
    }
    
    return answer.sort();
}

console.log(solution("hi12392"))