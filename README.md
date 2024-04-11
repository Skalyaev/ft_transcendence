# <p align="center">ft_transcendence</p>
> *Ce projet est quelque chose que vous n’avez jamais fait auparavant.*
>
> *Rappelez-vous du début de votre voyage en programmation. Regardez-vous maintenant. Il est temps de briller !*

## Aperçu
![](https://media.githubusercontent.com/media/Skalyaeve/images-2/main/tsd.gif)

## Checklist
- [x] Profil utilisateur
   * Connexion via l'API 42
   * 2FA
   * Gestion de compte
   * Liste d'amis
   * Historique des matchs
   * Achievements
- [x] Classement
- [x] Tchat
   * Messages directs
   * Canaux de discussion
- [x] Jeu
   * Matchmaking
   * Réactif
   * Mode spectateur
   * Plusieurs personnages
- [x] SQLi protected
- [x] No crash

## Installer `42stud only`
```bash
sudo apt update -y
sudo apt install -y make
sudo apt install -y docker.io
sudo apt install -y docker-compose
```
```bash
link=Skalyaeve/ft_transcendence
name=ft_transcendence

git clone https://github.com/$link.git $name
cd $name
```
- Recupère ta clé API 42
- Édite `backend/files/.env`:
    * FortyTwoClientID
    * FortyTwoSecret
```bash
sudo make
# ca va prendre du temps
# ensuite -> http://localhost:8080
```

## Désinstaller
```bash
name=ft_transcendence

cd $name && sudo make fclean
rm -r $name
```
