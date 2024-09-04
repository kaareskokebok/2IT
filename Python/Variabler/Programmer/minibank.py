# ## Minibank-oppgave
# Lag et program der en bruker kan holde styr på pengene på sin bankkonto. Han skal kunne sette inn penger, ta ut penger og sjekke saldo. Programmet starter med at brukeren har en saldo på 12 000 kr. 

# Krav til programmet:
# - Det skal vises en meny med brukerens valgmuligheter, f.eks. "Tast i for innskudd, u for uttak osv."
# - Innskudd: Når brukeren velger innskudd, skal det spørres etter størrelsen på beløpet. Når pengene settes inn, oppdateres saldoen.
# - Vis saldo: Når brukeren velger vis saldo, skal saldoen vises på formen "Din saldo er xxx kr."
# - Uttak: Når brukeren velger uttak, skal beløpet på uttaket tas imot, og det må kontrolleres at det er tilstrekkelig saldo på kontoen for å gjennomføre uttaket. Saldoen oppdateres.
# - Avslutning: Når brukeren velger avslutt, skal det vises en beskjed "Takk for at du brukte Bernts Bank".

# *Ekstra*: Hold styr på alle bevegelser, og legg til mulighet for å vise de 5 siste bevegelser på kontoen.

# Øke lesbarhet med _
saldo = 12_000

meny = """
Dine valg:
----------
(1) Innskudd
(2) Uttak
(3) Saldo
(a) Avslutt
Gjør et valg og trykk enter...
"""
ferdig = False

while not ferdig:
    # Skriv ut meny
    print(meny)
    
    # Lese inn valget
    valg = input("Ditt valg: ")
    
    if valg == "a":
        ferdig = True
    elif valg == "1":
        print("Innskudd:")
        belop = float(input("Skriv inn beløp:"))
        # Øke saldoen
        print(belop)
        saldo += belop
        print(f"Du satte inn {belop} kr.")
    elif valg == "2":
        print("Uttak:")
    elif valg == "3":
        print("Saldo:")
        print(f"Din saldo er {saldo} kr.")
    else:  # Alle andre tilfeller
        print("Prøv på nytt, ugyldig valg...")
    # Behandle valg
    # Ta imot nytt input (innskudd og uttak)

print("------------------------\nMorna Jens, takk for nå.")