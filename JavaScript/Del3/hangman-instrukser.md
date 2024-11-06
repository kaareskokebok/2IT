# Installere template for hangman
- [Instrukser for Linux](#linux) 
- [Instrukser for Windows](#windows-instrukser)

## Linux
1. Åpne terminalen og bruk en teksteditor som nano eller vi for å opprette filen.
```bash
nano setup_hangman.sh
```
1. Kopier og lim inn følgende kode i teksteditoren:

```bash
#!/bin/bash
git clone https://github.com/kej83/hangman-template.git
cd hangman-template
git remote remove origin
```
#!/bin/bash er shebang-linjen som forteller systemet at skriptet skal kjøres med Bash.
1. I `nano` trykk `Ctrl + O` for å lagre, trykk `ENTER` for å godkjenne filnavnet, og til sist `Ctrl + X` for å avslutte.
1. Gjør skriptet kjørbart:
```bash
chmod +x setup_project.sh
```
1. Kjør skriptet:
```bash
./setup_project.sh
```

Dette vil utføre kommandoene i skriptet:

1. Klone repositoriet.
1. Gå inn i prosjektmappen.
1. Fjerne koblingen til det originale fjernrepositoriet.

## Windows instrukser

1. Åpne Notepad, og skriv inn følgende:
```batch
@echo off
git clone https://github.com/kej83/hangman-template.git
cd hangman-template
git remote remove origin
```
1. Lagre filen:

- Gå til Fil > Lagre som.
- Velg Alle filer (*.*) i filtypefeltet.
- Gi filen et navn, for eksempel `setup_hangman.bat`.

1. Kjør filen ved å dobbelttrykke på den. Hvis det ikke fungere høyreklikk og velg "Kjør som admin..".
**Fortsatt problemer?**: Åpen terminalen og kjør filen ved å skrive `setup_hangman.bat`
