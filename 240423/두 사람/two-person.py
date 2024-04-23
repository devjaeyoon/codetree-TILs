firstAge, firstSex = input().split()
secondAge, secondSex = input().split()
firstAge = int(firstAge)
secondAge = int(secondAge)

if (firstAge >= 19 and firstSex == 'M') or (secondAge >= 19 and secondSex == 'M'):
    print(1)
else:
    print(0)