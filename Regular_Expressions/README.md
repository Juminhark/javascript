# Regular Expressions(정규 표현식)

- 특정한 규칙을 가진 문자열의 집합을 표현하기 위해 사용하는 formal language(형식 언어)이다
- 간단히 regexp
- js의 고유문법이 아니며, 대부분의 프로그램 언어와 코드 에디터에 내장되어 있다
- js는 정규표현식 문법을 es3부터 도입

```sh
숫자
[0 - 9]

소문자
[a - z]

대문자
[A - Z];
```

### Groups and ranges

| Character | 뜻                                     |
| --------- | -------------------------------------- |
| `\|`      | 또는                                   |
| `()`      | 그룹                                   |
| `[]`      | 문자셋, 괄호안의 어떤 문자든           |
| `[^]`     | 부정 문자셋, 괄호안의 어떤 문가 아닐때 |
| `(?:)`    | 찾지만 기억하지는 않음                 |

### Quantifiers

| Character   | 뜻                                  |
| ----------- | ----------------------------------- |
| `?`         | 없거나 있거나 (zero or one)         |
| `*`         | 없거나 있거나 많거나 (zero or more) |
| `+`         | 하나 또는 많이 (one or more)        |
| `{n}`       | n번 반복                            |
| `{min,}`    | 최소                                |
| `{min,max}` | 최소, 그리고 최대                   |

### Boundary-type

| Character | 뜻               |
| --------- | ---------------- |
| `\b`      | 단어 경계        |
| `\B`      | 단어 경계가 아님 |
| `^`       | 문장의 시작      |
| `$`       | 문장의 끝        |

### Character classes

| Character | 뜻                           |
| --------- | ---------------------------- |
| `\`       | 특수 문자가 아닌 문자        |
| `.`       | 어떤 글자 (줄바꿈 문자 제외) |
| `\d`      | digit 숫자                   |
| `\D`      | digit 숫자 아님              |
| `\w`      | word 문자                    |
| `\W`      | word 문자 아님               |
| `\s`      | space 공백                   |
| `\S`      | space 공백 아님              |

## Reference

- [정규식 정리 - 드림코딩](https://github.com/dream-ellie/regex)
- [pattren 연습](https://regexr.com/5mhou)
- [js 숫자체크 정규식 - Fabric](https://fabric004.tistory.com/20)
