flag = True

for _ in range(5):
    num = int(input())

    if (num % 3 != 0):
        flag = False

print(+flag)