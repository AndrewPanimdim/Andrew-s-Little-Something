plus = 1
space = 4
for i in range(5):
    print(space*' '  + i*'*' + plus * '*')
    plus +=1
    space -=1
    