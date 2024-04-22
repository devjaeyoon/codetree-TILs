a, b = map(int, input().split(' '))

result = ''

if a < b:
    result += '1 '
else:
    result += '0 '

if a == b:
    result += '1'
else:
    result += '0'

print(result)