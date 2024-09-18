import requests 

# 500 personer
response = requests.get("https://webapi.no/api/v1/randomPersons/900") 
data = response.json()  # javascript object notation, som dictionary

# Søk på alder
# Alle som er minst 75 år
# Skriv ut fornavn og alder
minst75 = []
# print(data["data"][0])

# Løpe gjennom personene
# Legge til personer som er minst 75 år
for person in data["data"]:
    if person["age"] >= 75:
        minst75.append(person)

for gamling in minst75:
    print(gamling["firstname"], gamling["age"])

# Søke etter og skrive ut fornavn som begynner på e
for person in data["data"]:
    fornavn = person["firstname"]
    if fornavn[0].lower() == "e":
        print(fornavn)

# Søke etter alle hvis fornavn begynner på er
for person in data["data"]:
    fornavn = person["firstname"]
    # if fornavn[0].lower() == "e" and fornavn[1].lower() == "r":
    #     print(fornavn)
    if fornavn[0:2].lower() == "er":
        print(fornavn)

# Alle personer som har .com epost og er yngre enn 50 år
# test = "arne@gensern.com"
# print(test[-4:])
for person in data["data"]:
    epost = person["email"]
    alder = person["age"]
    if epost[-4:] == ".com" and alder < 50:
        print(epost, alder)

# Skriv ut fornavn og etternavn til alle som har mer enn 20 bokstaver i 
# etternavn og fornavn til sammen, og tell opp antallet
antall = 0
for person in data["data"]:
    fornavn = person["firstname"]
    etternavn = person["lastname"]
    antall_bokstaver = len(fornavn + etternavn)
    if antall_bokstaver > 20:
        antall += 1
        print(fornavn, etternavn)

print(f"{antall = }")

