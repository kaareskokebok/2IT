import random

ssp = ['stein', 'saks', 'papir']

max_runder = 10
antall_runder = 0
antall_vinner_player = 0

while antall_runder < max_runder:
    antall_runder += 1
    
    cpu_valg = random.choice(ssp)
    spiller_valg_index = int(input("Velg stein(0), saks(1) eller papir(2): \n>"))
    spiller_valg = ssp[spiller_valg_index]

    print(f"CPU: {cpu_valg}, Spiller: {spiller_valg}")

    if cpu_valg == spiller_valg:
        print("Uavgjort")
    elif cpu_valg == "stein" and spiller_valg == "papir" or \
         cpu_valg == "saks" and spiller_valg == "stein" or \
         cpu_valg == "papir" and spiller_valg == "saks":
        print("Spiller vant")
        antall_vinner_player += 1
    else:
        print("CPU vant.")

print(f"Du vant {antall_vinner_player} av {max_runder} runder.")
if antall_vinner_player > 5:
    print("Spiller vant")
else:
    print("CPU vant")
    