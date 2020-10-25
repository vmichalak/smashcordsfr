Smashcords.fr
=============

Annuaire des serveurs discord Smash Bros francophone.

## Ajouter un discord

Si vous souhaitez ajouter un discord a smashcords.fr, il vous suffit de faire une Pull Request sur ce repo Github.

La base de donnée des discords est dans le fichier `src/app/shared/services/smashcord-hub/smashcord-hub.service.ts`.
Pour ajouter un discord il suffit donc d'éditer ce fichier et d'ajouter au bon endroit votre discord.

## Mise à jour

Le site se met à jour automatiquement grâce a Github Action à partir du moment ou il y a un nouveau commit sur la branche `main`.
Toute Pull Request validée sera donc en ligne dans les minutes qui suiveront.

La branche `gh-pages` contient le site compilé, elle se met à jour automatiquement à chaque commit dans `main`, cela ne sert a rien de la modifier.

## Réutilisation

Si vous souhaitez utiliser le code source de smashcords.fr pour faire un autre site, merci de contact @Humanbomb sur Twitter.
