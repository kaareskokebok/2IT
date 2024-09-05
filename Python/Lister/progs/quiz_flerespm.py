import random

spm_geografi = [
    "Hva heter Norges lengste elv?",
    "Hva kalles den største byen i Troms?",
    "Hvor høyt er Norges høyeste fjell (i m)?",
    "Hvilken by har Norges største kirke?"
]

svar_geografi = [
    "glomma",
    "tromsø",
    "2469",
    "trondheim"
]

# Velg tilfeldig spm
# print(random.choice(spm_geografi))
# Velg tilfeldig index
antall_spm = len(spm_geografi)
# TODO 1: tell opp antall riktige svar og skriv det ut
# TODO 2: endre slik at du må ha 4 riktige svar før quizen
# avsluttes. Bruk while-løkke Skriv også ut antall spm og riktig svar i prosent (riktige * 100 / antall_spm )
# TODO 3: endre slik at du må ha 3 riktige svar på rad,før quizen avsluttes
antall_riktige = 0
antall_svar = 0
while antall_riktige < 4:
    antall_svar += 1

    nytt_spm_index = random.randrange(0, antall_spm)
    nytt_spm = spm_geografi[nytt_spm_index]
    nytt_spm_fasit = svar_geografi[nytt_spm_index]
    nytt_spm_brukersvar = input(nytt_spm +"\n>").casefold().strip()  # eller lower()

    # Sjekk svar mot fasit, og gi tilbakemelding
    if nytt_spm_brukersvar == nytt_spm_fasit:
        print("Riktig")
        antall_riktige += 1
    else:
        print(f"Feil, rett svar er {nytt_spm_fasit}")

print(f"Du fikk {antall_riktige} av {antall_svar} riktige.")
print(f"Du fikk {100*antall_riktige/antall_svar:.1f} % riktig")

