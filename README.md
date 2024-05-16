# ECF 2 & 3 "air2java"

## Notes

La documentation de l'API est réalisée par swagger disponible à l'adresse:  
[https://127.0.0.1:3000/api](https://127.0.0.1:3000/api)  


## Back

Vous réaliserez le back-end sous forme d'API en JS. (avec express) Les infos de connexions à la base seront
dans un fichier de variables d'environnement
Vous intégrerez des tests unitaires et fonctionnels (ou tests d'intégration) quand ce sera nécessaire. L'accès à
l'api sera sécurisé par l'utilisation d'un token pour les écritures. Vous réaliserez des routeurs dans des fichiers
différents pour chaque route principale (groupe, musicien, login, etc...)


## Front

Vous réaliserez le front en react. Sans ou avec framework
Cette application est destinée à un public restreint et qui connaît bien le principe d'organisation de festival.
Néanmoins, les volontaires ayant peu de disponibilités en dehors des temps de festival, on ne pourra assurer
de formation à l'utilisation du logiciel en dehors des quelques conseils de base. L'interface doit donc être
simple et claire. Si possible avec une documentation (idéalement intégrée dans l'application).
Liste des écrans à produire :  
 * Accueil avec une liste des x prochains festivals et un menu qui mène vers :
 * La connexion
 * Les outils si rôle admin
 * Les groupes / musiciens si rôle utilisateur et +
 * Les festivals
 * Connexion
 * Groupes : comprenant la liste des membres, les morceaux ou un accès vers ceux-ci (avec une option
d'édition si rôle utilisateur et +)
 * Musiciens : comprenant la liste des groupes dont il fait partie et les instruments pratiqués (avec une
option d'édition et les détails personnels (adresse, téléphone, etc..) si rôle utilisateur ou +)
 * Festivals : tous les détails du festival
 * Création de groupes (si rôle utilisateur et +)
 * Création de Musiciens (si rôle utilisateur et +)
 * Création de festival (si rôle utilisateur et +)

Vous produirez à minima, pour l'écran d'accueil, l'affichage des groupes et la création d'un musicien une
maquette "fil de fer" avec un outil de type balsamiq.
L'accent sera mis sur l'utilisabilité. L'équipe préfère une app un peu moche si nécessaire, mais intuitive.
vous réaliserez des tests sur les composants principaux des "pages" groupes et Connexion


## CI/CD
Vous utiliserez Git idéalement avec les Vous ferez des commits réguliers. Vous ferez en sorte que vos tests
s'exécutent à chaque push du code sur github.

## Généralités
Le code produit devra respecter certaines normes :
 * Tous les noms d'objets devront respecter le domaine métier. (Festival sera une festival, pas un
évènement ou autres).  
 * Tous les noms utilisés pour les fonctions et variables seront parlant.
 * Si la compréhension du code le nécessite, vous ajouterez des commentaires.

Vous aurez un projet Front nommé : __nom_prenom_adj_front__ Vous aurez un projet Back nommé :
__nom_prenom_adj_api__ Vous ferez en sorte de bien organiser votre code avec des dossiers et sous-dossiers. Le
code source (Back et Front) sera placé dans un dossier __./src__ Vous placerez vos différentes maquettes dans un
dossier __mockups__ à la racine du projet.  

Points importants :
 * Je suis dispo par discord ou physiquement pour répondre à TOUTES VOS QUESTIONS pendant la
durée de l'ECF.
 * Préférez quelques fonctionnalités complètes que toutes les pages qui ne fonctionnent pas par exemple.
 * La partie CI/CD sera à réaliser vers la fin, que nous puissions faire le cours avant, je vous donnerai les
scripts YAML.


## Délais, règles, etc...
Vous aurez jusqu'au __17 mai__ (dernier délai) pour réaliser cet ECF Si je n'ai pas de soucis à ce que vous
échangiez, __cet ECF est personnel__. J'attends donc un rendu par personne. Avant le 17 mai donc, vous
m'ajouterez à vos projets.
