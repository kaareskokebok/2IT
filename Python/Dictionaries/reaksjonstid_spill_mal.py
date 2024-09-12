import time
import random 

# På Level 1 må du reagere raskere enn 1 sekund for å 
# komme videre til level 2
levels = {
    "Level 1":1,
    "Level 2":0.8,
    "Level 3":0.5,
    "Level 4":0.35,
    "Level 5":0.25,
    "Level 6":0.15,
    "Final level":0.10
}

spill_info = """
Reaksjonstid - Teh GAME

Trykk ENTER for å starte en runde.
Trykk deretter ENTER igjen så fort du kan, etter du ser
*_* på skjermen.
Du får da vite reaksjonstiden din i sekunder.
"""

print(spill_info)

for level, maxtid in levels.items():
    print(level, maxtid)

    input("Trykk ENTER for å starte ny runde.")
    print(level + "...")
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

    # sjekk tid_s mot maxtid
    # hvis tid_s er mindre enn maxtid, gå til neste level
    # hvis ikke, game over og du har tapt
    # hvis du klarte final level, så vant du spillet