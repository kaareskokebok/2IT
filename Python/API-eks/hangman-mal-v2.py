import requests 

response = requests.get("https://webapi.no/api/v1/randomPersons/20") 
data = response.json()  # javascript object notation, som dictionary

fasit = data["data"][0]["firstname"].lower()
antall_bokstaver = len(fasit)
gjettede_bokstaver = [ ]  # Her lagres bokstavene brukeren har gjettet
# Skriv ut *** tilsvarende antall bokstaver
resultat = "*" * antall_bokstaver

print(fasit)  # Kommenter ut når det funker, bare for testing
print(resultat)

for _ in range(3):
    gjett = input("Gjett en bokstav: ")
    gjettede_bokstaver.append(gjett)
    resultat = ""
    for bokstav in fasit:
        if bokstav in gjettede_bokstaver:
            resultat += bokstav
        else:
            resultat += "*"

    print("Resultat så langt:\n" + resultat)

