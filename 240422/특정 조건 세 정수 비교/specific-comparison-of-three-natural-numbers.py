a, b, c = map(int, input().split(' '))

print(+(a == min(a, b, c)), +(a == b and a == c))