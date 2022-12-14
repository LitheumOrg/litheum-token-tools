#!/bin/python
bitcount = 64
bitcounts = [0] * bitcount
results = [0] * 8192
resultshex = [""] * 8192
resultsset = set()
for j in range(0, 8192):
    # a brilliant hash function
    # out = ((j * j + 13) * (13**13))
    out = ((j * j * j * j + 13) * (13**13))
    # out = ((out * out + 13) * (13**13))
    out = out & ((2**bitcount) - 1)
    results[j] = out
    if out in resultsset:
        print("ERROR duplicate 'hash'")
        exit()        
    resultsset.add(out)
    for bit in range(0, bitcount):
        if (out & (2**bit)) > 0:
            bitcounts[bit] = bitcounts[bit] + 1 
maxhexout = 0
for index in range(0, 8192):
    hexout = "{:016X}".format(results[index])
    if len(hexout) > maxhexout:
        maxhexout = len(hexout)
    resultshex[index] = hexout

hexcounts = [
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    {"0":0, "1":0, "2":0, "3":0, "4":0, "5":0, "6":0, "7":0, "8":0, "9":0, "A":0, "B":0, "C":0, "D":0, "E":0, "F":0},
    ]
for index in range(0, 8192):
    print(str(index) + " - " + resultshex[index])
    for hexindex in range(0, 16):
        # print(hexindex)
        # print(hexcounts[hexindex])
        # print(resultshex[index][hexindex])
        hexcounts[hexindex][resultshex[index][hexindex]] = hexcounts[hexindex][resultshex[index][hexindex]] + 1

for hexindex in range(0, 16):
    msg = "hex " + str(hexindex) + " "
    for char in ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]:
        msg += char + ":" + str(hexcounts[hexindex][char]) + " "
        #  
    print(msg)
print("max hex length: " + str(maxhexout))

