middle, final = map(int, input().split())

if middle >= 90:
    if final >= 95:
        print(100000)
    elif final >= 90:
        print(50000)
    else:
        print(0)
else:
    print(0)