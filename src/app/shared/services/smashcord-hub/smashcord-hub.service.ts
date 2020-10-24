import {Discord} from './models/discord';

export class SmashcordHubService {
  public readonly characters: Discord[] = [
    new Discord(
      'Mario',
      'assets/stock_icons/Mario.png',
      ['Periklès', 'LaiSun', 'Miko', 'MarioError'],
      '3b2v576'
    ),
    new Discord(
      'Donkey Kong',
      'assets/stock_icons/DonkeyKong.png',
      ['Casy', 'Mar'],
      'bt72UvP'
    ),
    new Discord(
      'Link',
      'assets/stock_icons/Link.png',
      ['Pan', 'SwuShy', 'Kuha', 'Iwa', 'Ennaria'],
      '8pm4FBB'
    ),
    new Discord(
      'Samus & Dark Samus',
      'assets/stock_icons/Samus.png',
      ['Aba'],
      'e9vyVF2'
    ),
    new Discord(
      'Yoshi',
      'assets/stock_icons/Yoshi.png',
      ['BlueSky', 'Verdigri'],
      'A88DP87'
    ),
    new Discord(
      'Kirby',
      'assets/stock_icons/Kirby.png',
      ['Gashomy', 'Peeka', 'ChèvreDeFeu'],
      'AjFA47Q'
    ),
    new Discord(
      'Fox',
      'assets/stock_icons/Fox.png',
      ['Suake', 'NS-Abel', 'Origin_Fox', 'Lambda'],
      '4JfXSG9'
    ),
    new Discord(
      'Pikachu',
      'assets/stock_icons/Pikachu.png',
      ['FRNK', 'Reiko_SAc'],
      '4Zu58Q5'
    ),
    new Discord(
      'Luigi',
      'assets/stock_icons/Luigi.png',
      ['Réhann', 'FireQuast'],
      'DzKnQeX'
    ),
    new Discord(
      'Ness',
      'assets/stock_icons/Ness.png',
      ['Scal', 'Pandaroux'],
      '3c5JPBh'
    ),
    new Discord(
      'Captain Falcon',
      'assets/stock_icons/CaptainFalcon.png',
      ['Pmousse', 'Giratsu'],
      'zxxdHxU'
    ),
    new Discord(
      'Rondoudou',
      'assets/stock_icons/Jigglypuff.png',
      ['Feilex'],
      'dFySWuP'
    ),
    new Discord(
      'Peach & Daisy',
      'assets/stock_icons/Peach.png',
      ['Kirino', 'Hoka'],
      '5EDcCC9'
    ),
    new Discord(
      'Bowser',
      'assets/stock_icons/Bowser.png',
      ['Ampha', 'Brouseur'],
      'nF9kx7W'
    ),
    new Discord(
      'Ice Climbers',
      'assets/stock_icons/IceClimbers.png',
      ['Neibaf'],
      'eDqA2Xp'
    ),
    new Discord(
      'Sheik',
      'assets/stock_icons/Sheik.png',
      ['Mitsu', 'Karnaj'],
      'edvYN57'
    ),
    new Discord(
      'Zelda',
      'assets/stock_icons/Zelda.png',
      ['powarman', 'Kirino', 'Leaf'],
      'ke3SBMC'
    ),
    new Discord(
      'Dr. Mario',
      'assets/stock_icons/DrMario.png',
      ['Periklès', 'Laisun', 'Miko', 'Mocra'],
      '3b2v576'
    ),
    new Discord(
      'Pichu',
      'assets/stock_icons/Pichu.png',
      ['Mocra', 'NaetorU'],
      '5NBk3MT'
    ),
    new Discord(
      'Falco',
      'assets/stock_icons/Falco.png',
      ['Destadik'],
      'EdBwraB'
    ),
    new Discord(
      'Marth & Lucina',
      'assets/stock_icons/Lucina.png',
      ['TS | Astna', 'Remew'],
      'XRA9RkM'
    ),
    new Discord(
      'Link Enfant',
      'assets/stock_icons/YoungLink.png',
      ['Tigrlou', 'Reddy', 'Draver'],
      'zcZFt7x'
    ),
    new Discord(
      'Ganondorf',
      'assets/stock_icons/Ganondorf.png',
      ['LethalJoke', 'Nergalix'],
      '3G7akxP'
    ),
    new Discord(
      'Mewtwo',
      'assets/stock_icons/Mewtwo.png',
      ['Zequar', 'Piwix'],
      'JFtDMph'
    ),
    new Discord(
      'Roy & Chrom',
      'assets/stock_icons/Roy.png',
      ['SkyChaosiaae', 'Ytekk', 'Lahao'],
      'wwnhVjS'
    ),
    new Discord(
      'Mr. Game & Watch',
      'assets/stock_icons/MrGame&Watch.png',
      ['Phyel le bg de la EL', 'Nakū'],
      'MUMcDJF'
    ),
    new Discord(
      'Meta Knight',
      'assets/stock_icons/MetaKnight.png',
      ['Nessteruk', 'Ninoctali'],
      'THs9u5f'
    ),
    new Discord(
      'Pit & Pit Maléfique',
      'assets/stock_icons/Pit.png',
      ['Naptec', 'Mysthogame', 'Pratys', 'Natsirt', 'Achama', 'Keyno'],
      'tRzaFXP'
    ),
    new Discord(
      'Samus sans armure',
      'assets/stock_icons/ZeroSuitSamus.png',
      ['IB', 'Seril', 'SoSalGriN'],
      'vHTu5sQ'
    ),
    new Discord(
      'Wario',
      'assets/stock_icons/Wario.png',
      ['Echo | Tapstar', 'SI | Arthur'],
      'jTDGUC2'
    ),
    new Discord(
      'Snake',
      'assets/stock_icons/Snake.png',
      ['Astrat'],
      'WgWhze4'
    ),
    new Discord(
      'Ike',
      'assets/stock_icons/Ike.png',
      ['Flynn', 'Niko'],
      'hT6zdue'
    ),
    new Discord(
      'Dresseur de Pokémon',
      'assets/stock_icons/PokémonTrainer.png',
      ['Reunart'],
      'Y6dhCsM'
    ),
    new Discord(
      'Diddy Kong',
      'assets/stock_icons/DiddyKong.png',
      ['Demo'],
      'xEPP8WC'
    ),
    new Discord(
      'Lucas',
      'assets/stock_icons/Lucas.png',
      ['Xrider',  'Clément'],
      'yWV5NN8'
    ),
    new Discord(
      'Sonic',
      'assets/stock_icons/Sonic.png',
      ['AS', 'Sonaku Mazzer', 'Sorcier Savoyard'],
      'NVWzs5M'
    ),
    new Discord(
      'Roi DaDiDou',
      'assets/stock_icons/KingDedede.png',
      ['Rasciong', 'Meigamorse'],
      'rcseuAP'
    ),
    new Discord(
      'Olimar',
      'assets/stock_icons/Olimar.png',
      ['Demo', 'AidenVersus', 'Murciel4go', 'Ramoloss', 'Mattsounds'],
      '6yWuNQa'
    ),
    new Discord(
      'Lucario',
      'assets/stock_icons/Lucario.png',
      ['Brayz'],
      'ptKYD7v'
    ),
    new Discord(
      'R.O.B.',
      'assets/stock_icons/ROB.png',
      ['LoXi', 'Ali'],
      'rSx8MSf'
    ),
    new Discord(
      'Link Cartoon',
      'assets/stock_icons/ToonLink.png',
      ['Mutra', 'Pom', 'Law', 'Demo'],
      'mSU95AB'
    ),
    new Discord(
      'Wolf',
      'assets/stock_icons/Wolf.png',
      ['Volfe', 'NetrozZ_', 'DenisIP'],
      'esk7R3H'
    ),
    new Discord(
      'Villageois',
      'assets/stock_icons/Villager.png',
      ['Orso', 'Volya'],
      '9N6Rr3B'
    ),
    new Discord(
      'Mega Man',
      'assets/stock_icons/MegaMan.png',
      ['Master.M', 'Thunder', 'Jejex', 'Waxy'],
      'sKp954t'
    ),
    new Discord(
      'Entraîneuse Wii Fit',
      'assets/stock_icons/WiiFitTrainer.png',
      ['McQuell'],
      'NcGbfek'
    ),
    new Discord(
      'Harmonie & Luma',
      'assets/stock_icons/Rosalina.png',
      ['Gloupie', 'Zomberly'],
      'zfvA8xV'
    ),
    new Discord(
      'Little Mac',
      'assets/stock_icons/LittleMac.png',
      ['FrenchPotato'],
      'fUmq4cJ'
    ),
    new Discord(
      'Amphinobi',
      'assets/stock_icons/Greninja.png',
      ['Agent Jenny', 'Varuna', 'Burrakauchy'],
      'ERX3BSr'
    ),
    new Discord(
      'Mii',
      'assets/stock_icons/MiiFighter.png',
      ['Tournesol', 'Choumiel'],
      '2TRzK6U'
    ),
    new Discord(
      'Palutena',
      'assets/stock_icons/Palutena.png',
      ['SuntMad-Wolf'],
      '2hSRYg2'
    ),
    new Discord(
      'Pac-Man',
      'assets/stock_icons/PacMan.png',
      ['Sorbexos'],
      'CmDjRXz'
    ),
    new Discord(
      'Daraen',
      'assets/stock_icons/Robin.png',
      ['Nep', 'Goomba_Man', 'Kuro Stayford'],
      'Gpc7Dbu'
    ),
    new Discord(
      'Shulk',
      'assets/stock_icons/Shulk.png',
      ['LeyKoO'],
      'GneEZAC'
    ),
    new Discord(
      'Bowser Jr.',
      'assets/stock_icons/BowserJr.png',
      ['Ryuto', 'Blite'],
      'eFDYEfG'
    ),
    new Discord(
      'Duo Duck Hunt',
      'assets/stock_icons/DuckHunt.png',
      ['DiaMinGer', 'Pomme', 'NoRajFanDogs'],
      'MEmd3C3'
    ),
    new Discord(
      'Ryu & Ken',
      'assets/stock_icons/Ryu.png',
      ['Guilshark', 'OursOuzbek', 'ReVerse'],
      'CPptRsR'
    ),
    new Discord(
      'Cloud',
      'assets/stock_icons/Cloud.png',
      ['Lambda', 'Satoshi', 'Otomaï'],
      'acHKeyQ'
    ),
    new Discord(
      'Corrin',
      'assets/stock_icons/Corrin.png',
      ['batô', 'ChaosControl'],
      'F98MKp8'
    ),
    new Discord(
      'Bayonetta',
      'assets/stock_icons/Bayonetta.png',
      ['Farore', 'Raphi'],
      'DC36FXc'
    ),
    new Discord(
      'Inkling',
      'assets/stock_icons/Inkling.png',
      ['Hylocery', 'Bravir', 'Arima'],
      'TjRTWhz'
    ),
    new Discord(
      'Ridley',
      'assets/stock_icons/Ridley.png',
      ['Spartcon', 'Human', 'Aurablast'],
      'yenwRqm'
    ),
    new Discord(
      'Simon & Richter',
      'assets/stock_icons/Simon.png',
      ['Flaos', 'Seovania', 'Syy'],
      'ZDvJWdz'
    ),
    new Discord(
      'King K. Rool',
      'assets/stock_icons/KingKRool.png',
      ['BonneJoure', 'Misterzix'],
      'sQCDnKx'
    ),
    new Discord(
      'Marie',
      'assets/stock_icons/Isabelle.png',
      ['Yato', 'Sinkryz'],
      'YNdU5B8'
    ),
    new Discord(
      'Félinferno',
      'assets/stock_icons/Incineroar.png',
      ['Otarie Libertine', 'Ugfire'],
      'QhyTjn7'
    ),
    new Discord(
      'Plante Piranha',
      'assets/stock_icons/PiranhaPlant.png',
      ['Fabayou', 'GreeFoss'],
      'xrHCvpX'
    ),
    new Discord(
      'Joker',
      'assets/stock_icons/Joker.png',
      ['Gwem', 'Shogeki', 'Réhann'],
      'x6cHgmM'
    ),
    new Discord(
      'Héros',
      'assets/stock_icons/Hero.png',
      ['Anoter', 'Dreekius'],
      'sevQSfS'
    ),
    new Discord(
      'Banjo & Kazooie',
      'assets/stock_icons/Banjo&Kazooie.png',
      ['Dracau', 'Lorinato'],
      'fEyhZrn'
    ),
    new Discord(
      'Terry Bogard',
      'assets/stock_icons/Terry.png',
      ['Bakannibal'],
      'WXW26zN'
    ),
    new Discord(
      'Byleth',
      'assets/stock_icons/Byleth.png',
      ['YnT | Selford'],
      'KDTPNfs'
    ),
    new Discord(
      'Min Min',
      'assets/stock_icons/MinMin.png',
      ['EL | Warlon', 'Lao'],
      'phqePSW'
    ),
    new Discord(
      'Steve',
      'assets/stock_icons/Steve.png',
      ['Patoo', 'Kely'],
      '7nK7ADz'
    )
  ];
}
