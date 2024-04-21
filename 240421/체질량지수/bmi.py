import math

h, w = map(int, input().split(" "))
b = (10000 * w) / (h * h)

if (b > 25):
    print(math.floor(b))
    print("Obesity")
else:
    print(math.floor(b))