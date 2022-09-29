//? 정규식

//? i : 대소문자 구분하지않음
//? g : 전역탐색


//? /regex?/i
//? / / : slashes
//? regex? : pattern
//? i : flag : 옵션


//? Groups and ranges

// | : 또는
/Hi| Hello/g

// () : 그룹
/(Hi| Hello) | (And)/g
/ gr(e | a)y/g

// (?:) : 찾지만 기억하지는 않음
/ gr(?: e | a)y/g // not group 

// [] : 문자셋, 괄호안의 어떤 문자든
/gr[aed]y/g
/[a-zA-Z0-9]/g

// ^ : 제외
/[^a-zA-Z0-9]/g


// ? : 있거나 없거나
/gra?y/g

// * : 있거나 없거나 많거나
/gra*y/g


// 특수문자
/\./g

// 반복
/\.{2,}/g
