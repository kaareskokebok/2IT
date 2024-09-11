import time
import random 
import matplotlib.pyplot as plt
# pip install matplotlib

spill_info = """
Reaksjonstid - Teh GAME

Trykk ENTER for å starte en runde.
Trykk deretter ENTER igjen så fort du kan, etter du ser
*_* på skjermen.
Du får da vite reaksjonstiden din i sekunder.
"""
reaksjonstider = [ ]

rundenr = 0
max_runder = 3

print(spill_info)

while rundenr < max_runder:
    rundenr += 1
    
    input("Trykk ENTER for å starte ny runde.")
    # Random sleep fra 1-3 sekunder
    tid = random.random()*2 + 1
    time.sleep(tid)
    # Start timer
    tid_start = time.time_ns()
    input("*_*")
    tid_slutt = time.time_ns()

    # Reaksjonstiden i ns (nanosekunder), 0.000000001 sekunder (10^-9)
    tid_ns = tid_slutt - tid_start
    print(tid_ns)
    tid_s = tid_ns / (10**9)
    print(str(tid_s) + " sekunder")

    # Lagre reaksjonstiden
    reaksjonstider.append(tid_s)

# Skrive ut resultatet
print(reaksjonstider)

# Gjennomsnittlig reaksjonstid
# summen av alle tidene, delt på antall runder
gjsnitt_tid = sum(reaksjonstider) / len(reaksjonstider)
print(f"Gjsnitt tid: {gjsnitt_tid:.3f}")  # 3 desimaler

forsoknr_liste = [1, 2, 3]
plt.xlabel("Forsøk nr")
plt.ylabel("Reaksjonstid i sekunder")
plt.plot(forsoknr_liste, reaksjonstider)
plt.savefig("plot.png")
