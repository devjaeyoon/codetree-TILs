value = input()
arr = value.split(" ")
a = int(arr[0])
b = int(arr[1])

print("{:.2f}".format((a + b) / (a - b)))