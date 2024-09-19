# Funksjonen vis_oversikt
def vis_oversikt():
    print("Oversikt")
    print("--------")
    for person in personer:
        fornavn = person["firstname"]
        etternavn = person["lastname"]
        mobil = person["mobile"]
        txt = f"{fornavn} {etternavn}, mobil: {mobil}"
        print(txt)
    print("--------")

def registrer_ny_ansatt():
    print("Hei")

personer = [{"gender":"M","firstname":"Oskar","lastname":"Hoffmann","email":"oskar8660@gmail.com","phone":"","mobile":"45594229","dateOfBirth":"1975-10-29T00:00:00+01:00","age":48},{"gender":"K","firstname":"Vilde","lastname":"Kalstad","email":"","phone":"","mobile":"49855460","dateOfBirth":"1988-12-01T00:00:00+01:00","age":35},{"gender":"K","firstname":"Marie","lastname":"Dahl","email":"mdahl@about.com","phone":"25542930","mobile":"44026729","dateOfBirth":"1999-10-08T00:00:00+02:00","age":24},{"gender":"M","firstname":"Sebastian","lastname":"Haugen","email":"shaugen@outlook.com","phone":"","mobile":"43824213","dateOfBirth":"1953-11-14T00:00:00+01:00","age":70},{"gender":"M","firstname":"Julian","lastname":"Standal","email":"julian3221@facebook.com","phone":"","mobile":"47763371","dateOfBirth":"1975-10-18T00:00:00+02:00","age":48}]

meny = """
Velkommen til Hansens Hønsefabrikk
----------------------------------
Gjør et valg:
1 - Vis oversikt over alle ansatte
2 - Registrer ny ansatt
3 - Søk etter ansatt (på mobilnr)
4 - Søk etter ansatt (på fornavn og etternavn)
5 - Slett en ansatt
6 - Vis antall ansatte
7 - Finn alle ansatte med utvidet ferie (60+)
0 - Avslutt
"""

while True:
    print(meny)
    valg = input("Ditt valg: \n->")
    if valg == "1":
        vis_oversikt()
    elif valg == "2":
        registrer_ny_ansatt()
    else:
        print("Ugyldig valg...Prøv på nytt")

    input("Trykk en tast for å gå tilbake til menyen...")

# TODO:
# 1 - Lag de resterende funksjonene, bruk ordet pass 
# som første linje i funksjonen
# def test():
#    pass
# 2 - Gjør ferdig valg 6, antall ansatte
# 3 - Gjør valg 2, ny ansatt
# 4 - Gjør deretter resten av funksjonene
# NB! Mye testing underveis
# CHALLENGE - Finn ut hvordan du kan lagre persondata i en egen python-fil, og deretter importere dette i python-programmet ditt. Bruk chatgpt og nettsøk. Utvid da til 500 ansatte ved å bruke api-lenken: https://webapi.no/api/v1/randomPersons/500
