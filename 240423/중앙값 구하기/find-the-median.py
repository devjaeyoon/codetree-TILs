a, b, c = map(int, input().split())

if a > b:
    if a > c:
        if b > c:
            print(c)
        else:
            print(b)
    else:
        print(a)
else:
    if b > c:
        if a > c:
            print(c)
        else:
            print(a)
    else:
        print(b)