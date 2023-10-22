# Assignment_operators(할당 연산자)

- 할당 연산자는 오른쪽 피연산자의 값을 왼쪽 피연산자에 할당
- 아래 표에서 볼수 있듯, 연산과 할당을 동시에 수행하는 복합 할당 연산자도 존재

- [Assigning to properties](Assigning_to_properties/README.md)
- [Destructuring assignment](Destructuring_assignment/README.md)
- [Evaluation and nesting](Evaluation&nesting/README.md)

| name                            | shorthand operator | meaning          |
| ------------------------------- | ------------------ | ---------------- |
| Assignment                      | x = f()            | x = f()          |
| Addition assignment             | x += f()           | x = x + f()      |
| Subtraction assignment          | x -= f()           | x = x - f()      |
| Multiplication assignment       | x \*= f()          | x = x \* f()     |
| Division assignment             | x /= f()           | x = x / f()      |
| Remainder assignment            | x %= f()           | x = x % f()      |
| Exponentiation assignment       | x \*\*= f()        | x = x \*\* f()   |
| Left shift assignment           | x <<= f()          | x = x << f()     |
| Right shift assignment          | x >>= f()          | x = x >> f()     |
| Unsigned right shift assignment | x >>>= f()         | x = x >>> f()    |
| Bitwise AND assignment          | x &= f()           | x = x & f()      |
| Bitwise XOR assignment          | x ^= f()           | x = x ^ f()      |
| Bitwise OR assignment           | x \|= f()          | x = x \| f()     |
| Logical AND assignment          | x &&= f()          | x && (x = f())   |
| Logical OR assignment           | x \|\|= f()        | x \|\| (x = f()) |
| Nullish coalescing assignment   | x ??= f()          | x ?? (x = f())   |
