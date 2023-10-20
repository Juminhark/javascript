//? String.repeat()
//? 문자열을 주어진 횟수만큼 반복해 붙인 새로운 문자열 반환

//? str.repeat(count)


'abc'.repeat(-1);   // RangeError
'abc'.repeat(0);    // ''
'abc'.repeat(1);    // 'abc'
'abc'.repeat(2);    // 'abcabc'
'abc'.repeat(3.5);  // 'abcabcabc' (count will be converted to integer)
'abc'.repeat(1/0);  // RangeError