spm_svar = {
    "Hva heter hovedstaden i Ukraina?": "Kiev",
    "10*4": "40",
    "2+3 = ":"5"
}
# print(len(spm_svar))  # 3
total_poeng = 0

for spm, fasitsvar in spm_svar.items():
    # 1 - Still spm til brukeren vha. input
    brukersvar = input(spm + " ")
    # 2 - lagre brukersvar i en variabel
    # 3 - bruk if til å sjekke brukersvar mot fasitsvar
    if brukersvar == fasitsvar:
        print("Riktig")
        total_poeng += 1
    # 4 - Gi tilbakemelding
    # 5 - Øk antall poeng hvis riktig
    else:
        print("feil")

# 6 - Skriv ut antall riktige

print(f"Du fikk {total_poeng} riktige av {len(spm_svar)}. ")