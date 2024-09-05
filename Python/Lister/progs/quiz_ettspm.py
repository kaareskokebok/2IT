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
nytt_spm_index = random.randrange(0, antall_spm)
nytt_spm = spm_geografi[nytt_spm_index]
nytt_spm_fasit = svar_geografi[nytt_spm_index]
nytt_spm_brukersvar = input(nytt_spm +"\n>").casefold().strip()  # eller lower()

# Sjekk svar mot fasit, og gi tilbakemelding
if nytt_spm_brukersvar == nytt_spm_fasit:
    print("Riktig")
else:
    print(f"Feil, rett svar er {nytt_spm_fasit}")



