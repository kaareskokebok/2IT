import requests 

response = requests.get("https://webapi.no/api/v1/randomPersons/20") 
data = response.json()  # javascript object notation, som dictionary
print(data)
print(data["authenticated"])
print(data["timeTaken"])
print(data["data"][0])  # Den første personen som dictionary
print(data["data"][0].keys())
# data["data"] gir alle personene, data["data"][0] gir den første personen
# data["data"][0]["firstname"] gir fornavnet til den første personen
print(data["data"][0]["firstname"])

fasit = data["data"][0]["firstname"].lower()
antall_bokstaver = len(fasit)

# Skriv ut *** tilsvarende antall bokstaver
print("*" * antall_bokstaver)

gjett = input("Gjett en bokstav: ")

# Sjekk om bokstaven er i ordet
resultat = "*" * antall_bokstaver
if gjett in fasit:
    resultat = ""
    for bokstav in fasit:
        if gjett == bokstav:
            resultat += gjett
        else:
            resultat += "*"


print("Resultat så langt:\n" + resultat)

