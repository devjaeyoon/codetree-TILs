fS, fT = input().split()
sS, sT = input().split()
tS, tT = input().split()

fT = int(fT)
sT = int(sT)
tT = int(tT)

cnt = 0

if fS == 'Y' and fT >= 37:
    cnt += 1

if sS == 'Y' and sT >= 37:
    cnt += 1

if tS == 'Y' and tT >= 37:
    cnt += 1

if cnt >= 2:
    print('E')
else:
    print('N')