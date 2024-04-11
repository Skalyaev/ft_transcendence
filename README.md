# ft_transcendence
Ce projet est quelque chose que vous n’avez jamais fait auparavant.

Rappelez-vous du début de votre voyage en programmation. Regardez-vous maintenant. C’est le temps de briller !

## Preview
![](https://github.com/Skalyaeve/images-tmp/blob/main/screenshot/tsd.gif)

## Checklist
- [x] User profile
    * [x] 42 API login
    * [x] 2FA
    * [x] User infos management
    * [x] Friends list
    * [x] Match history
    * [x] Achievements
- [x] Leadboard
- [x] Chat
    * [x] Direct messages
    * [x] Channel management
- [x] Game
    * [x] Matchmaking
    * [x] Responsive
    * [x] Spectator mode
    * [x] Multiple characters
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
- Recupère ta clé API 42.
- Édite `backend/files/.env`:
    * FortyTwoClientID
    * FortyTwoSecret
```bash
make
# Ça va prendre un certain temps.
```
> http://localhost:8080

## Uninstall
```bash
name=ft_transcendence

cd $name && sudo make fclean
rm -r $name
```
