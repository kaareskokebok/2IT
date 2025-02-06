# Oppgavesett MySQL feb. 2025 2IT
Nedenfor finner du **20 MySQL-oppgaver** i stigende vanskelighetsgrad. De første oppgavene fokuserer på enkle operasjoner (opprette tabeller, sette inn data, enkle spørringer), mens de siste oppgavene innebærer **JOIN**-setninger, **fremmednøkler** og mer komplekse spørringer.

---

## Oppgave 1: Opprett en database

1. Lag en ny database med et passende navn.  
   - **Eksempel**: `CREATE DATABASE IF NOT EXISTS oppgavedb;`  
2. Bruk databasen:  
   - **Eksempel**: `USE oppgavedb;`  
---

## Oppgave 2: Opprett en tabell

1. Opprett en tabell `kunder` med kolonnene:
   - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
   - `fornavn` (VARCHAR(50))
   - `etternavn` (VARCHAR(50))
   - `alder` (INT)

2. Sjekk at tabellen ble opprettet:
   ```sql
   SHOW TABLES;
   ```
3. Se på tabellstrukturen:
   ```sql
   DESCRIBE kunder;
   ```

---

## Oppgave 3: Sett inn data

1. Sett inn 3–5 eksemplerader i tabellen `kunder`.  
   - **Eksempel**:
     ```sql
     INSERT INTO kunder (fornavn, etternavn, alder)
     VALUES
       ('Ola', 'Nordmann', 30),
       ('Kari', 'Normann', 25),
       ('Petter', 'Pettersen', 45);
     ```
2. Kjør en spørring for å se dataene:
   ```sql
   SELECT * FROM kunder;
   ```
---

## Oppgave 4: Bruke `WHERE`-klausul

1. Hent alle kunder som har alder over 28.
   ```sql
   SELECT * FROM kunder
   WHERE alder > 28;
   ```
2. Hent alle kunder der `fornavn` = 'Kari'.

3. Legg inn et par ekstra rader først, og test ulike WHERE-betingelser.

---

## Oppgave 5: Oppdater data med `UPDATE`

1. Oppdater en av kundene, slik at alderen økes med 1.
   ```sql
   UPDATE kunder
   SET alder = alder + 1
   WHERE id = 1;
   ```
2. Bekreft at radene ble oppdatert.

3. Oppdater fornavnet/etternavnet på én av kundene.

---

## Oppgave 6: Slett data med `DELETE`

1. Slett en av kundene fra `kunder`-tabellen basert på `id`.
   ```sql
   DELETE FROM kunder
   WHERE id = 2;
   ```
2. Pass på å bruke en bestemt `WHERE` for å unngå å slette hele tabellen.

---

## Oppgave 7: Aggregering (`COUNT`, `MIN`, `MAX`, `AVG`)

1. Tell hvor mange kunder du har i tabellen:
   ```sql
   SELECT COUNT(*) FROM kunder;
   ```
2. Finn gjennomsnittsalderen (`AVG`) for alle kundene.
3. Finn høyeste alder (`MAX`) og laveste alder (`MIN`).

Formål: Øve på enkle aggregeringsfunksjoner.

---

## Oppgave 8: Bruk `GROUP BY`

1. Legg til en kolonne `by` (VARCHAR(50)) i tabellen `kunder`:
   ```sql
   ALTER TABLE kunder
   ADD COLUMN by VARCHAR(50);
   ```
2. Fyll inn `by` for hver kunde (f.eks. 'Oslo', 'Bergen', 'Trondheim').
3. Kjør en spørring som teller antall kunder **per** by:
   ```sql
   SELECT by, COUNT(*) AS antall
   FROM kunder
   GROUP BY by;
   ```

---

## Oppgave 9: Sortering (`ORDER BY`)

1. Hent alle kunder, sortert på alder stigende (`ASC`).
2. Hent alle kunder, sortert på etternavn synkende (`DESC`).
3. Kombiner `WHERE`, `GROUP BY` og `ORDER BY` hvis du vil eksperimentere.

---

## Oppgave 10: Begrens antall resultater (`LIMIT`)

1. Hent kun de 2 første kundene i tabellen, sortert på alder.
   ```sql
   SELECT * FROM kunder
   ORDER BY alder DESC
   LIMIT 2;
   ```
2. Test med ulike tall for `LIMIT`.


---

## Oppgave 11: Opprett en ny tabell for lagring av ordrer

1. Opprett en tabell `ordrer` med kolonnene:
   - `id` (INT, AUTO_INCREMENT, PRIMARY KEY)
   - `kunde_id` (INT) – skal peke på `kunder.id` (fremmednøkkel).
   - `produkt` (VARCHAR(100))
   - `antall` (INT)
   - `dato` (DATE)
2. Ikke legg til fremmednøkkelen riktig enda, bare lag kolonnen `kunde_id`.

---

## Oppgave 12: Fyll tabellen `ordrer` med testdata

1. Sett inn minst 5 ordrekjøp:
   - `kunde_id` skal matche gyldige `id` i `kunder`.
   - Varier `produkt`, `antall`, `dato`.
2. Kontroller at du har fått inn radene korrekt ved `SELECT * FROM ordrer;`.

---

## Oppgave 13: Opprett fremmednøkkel

1. Endre `ordrer`-tabellen for å legge til en **FOREIGN KEY**:
   ```sql
   ALTER TABLE ordrer
   ADD CONSTRAINT fk_kunde
   FOREIGN KEY (kunde_id) REFERENCES kunder(id);
   ```
2. Sjekk med `SHOW CREATE TABLE ordrer;` for å se at fremmednøkkel er satt opp.
---

## Oppgave 14: Enkel `JOIN` mellom `kunder` og `ordrer`

1. Hent alle ordrer sammen med kundenes **fornavn** og **etternavn**.  
   - Bruk en `JOIN`:
     ```sql
     SELECT
       ordrer.id,
       kunder.fornavn,
       kunder.etternavn,
       ordrer.produkt,
       ordrer.antall
     FROM ordrer
     JOIN kunder ON ordrer.kunde_id = kunder.id;
     ```
2. Test også `LEFT JOIN` eller `RIGHT JOIN` og se hva som skjer.
---

## Oppgave 15: `JOIN` + filtrering

1. Hent kun ordrer der `antall` er større enn 2, og vis kundens navn.
2. Sorter resultatet på `antall` synkende.

Formål: Kombinere JOIN med WHERE og ORDER BY.


## Oppgave 18: Flere tabeller, to fremmednøkler

1. Opprett en tabell `lagerbeholdning` med:
   - `id` (INT, AUTO_INCREMENT, PK)
   - `produkt` (VARCHAR(100))
   - `antall_pa_lager` (INT)
   - `leverandor_id` (INT) – peker på en ny tabell `leverandor`.
2. Opprett en tabell `leverandor` med:
   - `id` (INT, AUTO_INCREMENT, PK)
   - `navn` (VARCHAR(100))
   - `adresse` (VARCHAR(100))
3. Sett inn en fremmednøkkel for `leverandor_id`.

---

## Oppgave 19: JOIN på tvers av tre tabeller

1. Opprett en runde ordrer der `ordrer.produkt` (fra `ordrer`) matcher `lagerbeholdning.produkt`, og `lagerbeholdning.leverandor_id` peker til `leverandor`.
2. Lag en spørring som JOINer **ordrer**, **kunder**, **lagerbeholdning** og **leverandor** for å få oversikt i én spørring:  
   - Hvilken kunde bestilte (kunder-tabellen).
   - Hvilket produkt og antall (ordrer-tabellen).
   - Hvor mange er på lager (lagerbeholdning-tabellen).
   - Hvem er leverandør (leverandor-tabellen).  


