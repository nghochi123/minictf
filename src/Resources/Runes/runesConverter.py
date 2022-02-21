runes = {chr(ord('a')+i): chr(0x16A0+i) for i in range(26)}
alphabet = {value: item for item, value in runes.items()}

string = input("Enter text: ")
output = ""
if string[0].lower() >= 'a' and string[0].lower() <= 'z':
    for char in string:
        try:
            output += runes[char.lower()]
        except KeyError:
            output += char
    print("Encoded string:", output)
else:
    for char in string:
        try:
            output += alphabet[char]
        except KeyError:
            output += char
    print("Decoded string:", output)

