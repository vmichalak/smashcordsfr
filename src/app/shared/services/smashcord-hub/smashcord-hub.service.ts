import {Discord} from './models/discord';

export class SmashcordHubService {
  public readonly characters: Discord[] = [
    new Discord(
      'Mario',
      'assets/character_icons/Mario.png',
      ['Periklès', 'LaiSun', 'Miko', 'MarioError'],
      '3b2v576'
    ),
    new Discord(
      'Donkey Kong',
      'assets/character_icons/DonkeyKong.png',
      ['Casy', 'Mar'],
      'bt72UvP'
    ),
    new Discord(
      'Link',
      'assets/character_icons/Link.png',
      ['Pan', 'SwuShy', 'Kuha', 'Iwa', 'Ennaria'],
      '8pm4FBB'
    ),
    new Discord(
      'Samus & Dark Samus',
      'assets/character_icons/Samus.png',
      ['Aba'],
      'e9vyVF2'
    ),
    new Discord(
      'Yoshi',
      'assets/character_icons/Yoshi.png',
      ['BlueSky', 'Verdigri'],
      'A88DP87'
    ),
    new Discord(
      'Kirby',
      'assets/character_icons/Kirby.png',
      ['Gashomy', 'Peeka', 'ChèvreDeFeu'],
      'AjFA47Q'
    ),
    new Discord(
      'Fox',
      'assets/character_icons/Fox.png',
      ['Suake', 'NS-Abel', 'Origin_Fox', 'Lambda'],
      '4JfXSG9'
    ),
    new Discord(
      'Pikachu',
      'assets/character_icons/Pikachu.png',
      ['FRNK', 'Reiko_SAc'],
      '4Zu58Q5'
    ),
    new Discord(
      'Luigi',
      'assets/character_icons/Luigi.png',
      ['Réhann', 'FireQuast'],
      'DzKnQeX'
    ),
    new Discord(
      'Ness',
      'assets/character_icons/Ness.png',
      ['Scal', 'Pandaroux'],
      '3c5JPBh'
    ),
    new Discord(
      'Captain Falcon',
      'assets/character_icons/CaptainFalcon.png',
      ['Pmousse', 'Giratsu'],
      'zxxdHxU'
    ),
    new Discord(
      'Rondoudou',
      'assets/character_icons/Jigglypuff.png',
      ['Feilex'],
      'dFySWuP'
    ),
    new Discord(
      'Peach & Daisy',
      'assets/character_icons/Peach.png',
      ['Kirino', 'Hokà', 'Raivals'],
      '5EDcCC9'
    ),
    new Discord(
      'Bowser',
      'assets/character_icons/Bowser.png',
      ['Ampha', 'Brouseur'],
      'nF9kx7W'
    ),
    new Discord(
      'Ice Climbers',
      'assets/character_icons/IceClimbers.png',
      ['Neibaf'],
      'eDqA2Xp'
    ),
    new Discord(
      'Sheik',
      'assets/character_icons/Sheik.png',
      ['Mitsu', 'Karnaj'],
      'edvYN57'
    ),
    new Discord(
      'Zelda',
      'assets/character_icons/Zelda.png',
      ['powarman', 'Kirino', 'Leaf'],
      'ke3SBMC'
    ),
    new Discord(
      'Dr. Mario',
      'assets/character_icons/DrMario.png',
      ['Periklès', 'Laisun', 'Miko', 'Mocra'],
      '3b2v576'
    ),
    new Discord(
      'Pichu',
      'assets/character_icons/Pichu.png',
      ['Mocra', 'NaetorU'],
      '5NBk3MT'
    ),
    new Discord(
      'Falco',
      'assets/character_icons/Falco.png',
      ['Destadik'],
      'EdBwraB'
    ),
    new Discord(
      'Marth & Lucina',
      'assets/character_icons/Lucina.png',
      ['TS | Astna', 'Remew'],
      'XRA9RkM'
    ),
    new Discord(
      'Link Enfant',
      'assets/character_icons/YoungLink.png',
      ['Tigrlou', 'Reddy', 'Draver'],
      'zcZFt7x'
    ),
    new Discord(
      'Ganondorf',
      'assets/character_icons/Ganondorf.png',
      ['LethalJoke', 'Nergalix'],
      '3G7akxP'
    ),
    new Discord(
      'Mewtwo',
      'assets/character_icons/Mewtwo.png',
      ['Zequar', 'Piwix'],
      'JFtDMph'
    ),
    new Discord(
      'Roy & Chrom',
      'assets/character_icons/Roy.png',
      ['SkyChaosiaae', 'Ytekk', 'Lahao'],
      'wwnhVjS'
    ),
    new Discord(
      'Mr. Game & Watch',
      'assets/character_icons/MrGame&Watch.png',
      ['Phyel le bg de la EL', 'Nakū'],
      'MUMcDJF'
    ),
    new Discord(
      'Meta Knight',
      'assets/character_icons/MetaKnight.png',
      ['Nessteruk', 'Ninoctali'],
      'THs9u5f'
    ),
    new Discord(
      'Pit & Pit Maléfique',
      'assets/character_icons/Pit.png',
      ['Naptec', 'Mysthogame', 'Pratys', 'Natsirt', 'Achama', 'Keyno'],
      'tRzaFXP'
    ),
    new Discord(
      'Samus sans armure',
      'assets/character_icons/ZeroSuitSamus.png',
      ['IB', 'Seril', 'SoSalGriN'],
      'vHTu5sQ'
    ),
    new Discord(
      'Wario',
      'assets/character_icons/Wario.png',
      ['Echo | Tapstar', 'SI | Arthur'],
      'jTDGUC2'
    ),
    new Discord(
      'Snake',
      'assets/character_icons/Snake.png',
      ['Astrat'],
      'WgWhze4'
    ),
    new Discord(
      'Ike',
      'assets/character_icons/Ike.png',
      ['Flynn', 'Niko'],
      'hT6zdue'
    ),
    new Discord(
      'Dresseur de Pokémon',
      'assets/character_icons/PokémonTrainer.png',
      ['Reunart'],
      'Y6dhCsM'
    ),
    new Discord(
      'Diddy Kong',
      'assets/character_icons/DiddyKong.png',
      ['Demo', 'Nahé', 'Neath', 'Lemonke', 'Ouiyam'],
      'xEPP8WC'
    ),
    new Discord(
      'Lucas',
      'assets/character_icons/Lucas.png',
      ['Xrider',  'Clément'],
      'yWV5NN8'
    ),
    new Discord(
      'Sonic',
      'assets/character_icons/Sonic.png',
      ['AS', 'Sonaku Mazzer', 'Sorcier Savoyard'],
      'NVWzs5M'
    ),
    new Discord(
      'Roi DaDiDou',
      'assets/character_icons/KingDedede.png',
      ['Rasciong', 'Meigamorse'],
      'rcseuAP'
    ),
    new Discord(
      'Olimar',
      'assets/character_icons/Olimar.png',
      ['Demo', 'AidenVersus', 'Murciel4go', 'Ramoloss', 'Mattsounds'],
      '6yWuNQa'
    ),
    new Discord(
      'Lucario',
      'assets/character_icons/Lucario.png',
      ['Brayz'],
      'ptKYD7v'
    ),
    new Discord(
      'R.O.B.',
      'assets/character_icons/ROB.png',
      ['LoXi', 'Ali'],
      'rSx8MSf'
    ),
    new Discord(
      'Link Cartoon',
      'assets/character_icons/ToonLink.png',
      ['Pom', 'Slonail'],
      'mSU95AB'
    ),
    new Discord(
      'Wolf',
      'assets/character_icons/Wolf.png',
      ['Volfe', 'NetrozZ_', 'DenisIP'],
      'esk7R3H'
    ),
    new Discord(
      'Villageois',
      'assets/character_icons/Villager.png',
      ['Orso', 'Volya'],
      '9N6Rr3B'
    ),
    new Discord(
      'Mega Man',
      'assets/character_icons/MegaMan.png',
      ['Master.M', 'Thunder', 'Jejex', 'Waxy'],
      'sKp954t'
    ),
    new Discord(
      'Entraîneuse Wii Fit',
      'assets/character_icons/WiiFitTrainer.png',
      ['McQuell'],
      'NcGbfek'
    ),
    new Discord(
      'Harmonie & Luma',
      'assets/character_icons/Rosalina.png',
      ['Gloupie', 'Zomberly'],
      'zfvA8xV'
    ),
    new Discord(
      'Little Mac',
      'assets/character_icons/LittleMac.png',
      ['FrenchPotato'],
      'fUmq4cJ'
    ),
    new Discord(
      'Amphinobi',
      'assets/character_icons/Greninja.png',
      ['Agent Jenny', 'Varuna', 'Burrakauchy'],
      'ERX3BSr'
    ),
    new Discord(
      'Mii',
      'assets/character_icons/MiiFighter.png',
      ['Tournesol', 'Choumiel'],
      '2TRzK6U'
    ),
    new Discord(
      'Palutena',
      'assets/character_icons/Palutena.png',
      ['SuntMad-Wolf'],
      '2hSRYg2'
    ),
    new Discord(
      'Pac-Man',
      'assets/character_icons/PacMan.png',
      ['Sorbexos'],
      'CmDjRXz'
    ),
    new Discord(
      'Daraen',
      'assets/character_icons/Robin.png',
      ['Nep', 'Goomba_Man', 'Kuro Stayford', 'Verzal'],
      'Gpc7Dbu'
    ),
    new Discord(
      'Shulk',
      'assets/character_icons/Shulk.png',
      ['LeyKoO'],
      'GneEZAC'
    ),
    new Discord(
      'Bowser Jr.',
      'assets/character_icons/BowserJr.png',
      ['Ryuto', 'Blite'],
      'eFDYEfG'
    ),
    new Discord(
      'Duo Duck Hunt',
      'assets/character_icons/DuckHunt.png',
      ['DiaMinGer', 'Pomme', 'NoRajFanDogs'],
      'MEmd3C3'
    ),
    new Discord(
      'Ryu & Ken',
      'assets/character_icons/Ryu.png',
      ['Guilshark', 'OursOuzbek', 'ReVerse'],
      'CPptRsR'
    ),
    new Discord(
      'Cloud',
      'assets/character_icons/Cloud.png',
      ['Lambda', 'Satoshi', 'Otomaï'],
      'acHKeyQ'
    ),
    new Discord(
      'Corrin',
      'assets/character_icons/Corrin.png',
      ['batô', 'ChaosControl', 'KM'],
      'F98MKp8'
    ),
    new Discord(
      'Bayonetta',
      'assets/character_icons/Bayonetta.png',
      ['Farore', 'Raphi'],
      'DC36FXc'
    ),
    new Discord(
      'Inkling',
      'assets/character_icons/Inkling.png',
      ['Hylocery', 'Bravir', 'Arima'],
      'TjRTWhz'
    ),
    new Discord(
      'Ridley',
      'assets/character_icons/Ridley.png',
      ['Spartcon', 'Human', 'Aurablast'],
      'yenwRqm'
    ),
    new Discord(
      'Simon & Richter',
      'assets/character_icons/Simon.png',
      ['Flaos', 'Seovania', 'Syy'],
      'ZDvJWdz'
    ),
    new Discord(
      'King K. Rool',
      'assets/character_icons/KingKRool.png',
      ['NeoSkyBlue'],
      'sQCDnKx'
    ),
    new Discord(
      'Marie',
      'assets/character_icons/Isabelle.png',
      ['Yato', 'Sinkryz'],
      'YNdU5B8'
    ),
    new Discord(
      'Félinferno',
      'assets/character_icons/Incineroar.png',
      ['Otarie Libertine', 'Ugfire'],
      'QhyTjn7'
    ),
    new Discord(
      'Plante Piranha',
      'assets/character_icons/PiranhaPlant.png',
      ['Fabayou', 'GreeFoss'],
      'xrHCvpX'
    ),
    new Discord(
      'Joker',
      'assets/character_icons/Joker.png',
      ['Gwem', 'Shogeki', 'Réhann'],
      'x6cHgmM'
    ),
    new Discord(
      'Héros',
      'assets/character_icons/Hero.png',
      ['Anoter', 'Dreekius'],
      'sevQSfS'
    ),
    new Discord(
      'Banjo & Kazooie',
      'assets/character_icons/Banjo&Kazooie.png',
      ['Dracau', 'Lorinato'],
      'fEyhZrn'
    ),
    new Discord(
      'Terry Bogard',
      'assets/character_icons/Terry.png',
      ['Bakannibal'],
      'WXW26zN'
    ),
    new Discord(
      'Byleth',
      'assets/character_icons/Byleth.png',
      ['YnT | Selford'],
      'KDTPNfs'
    ),
    new Discord(
      'Min Min',
      'assets/character_icons/MinMin.png',
      ['EL | Warlon', 'Lao'],
      'phqePSW'
    ),
    new Discord(
      'Steve',
      'assets/character_icons/Steve.png',
      ['Patoo', 'Kely'],
      '7nK7ADz'
    )
  ];

  public readonly local: Discord[] = [
    new Discord(
      'Belgique',
      'assets/local_icons/Belgique.png',
      [],
      'SWxWtZx'
    ),
    new Discord(
      'Bourgogne-Franche-Comte',
      'assets/local_icons/BourgogneFrancheComte.png',
      [],
      '6JSSzvA'
    ),
    new Discord(
      'Bretagne',
      'assets/local_icons/Bretagne.png',
      [],
      'ZWp9tW9'
    ),
    new Discord(
      'Corse',
      'assets/local_icons/Corse.png',
      [],
      'DqdYNud'
    ),
    new Discord(
      'Grand-Est',
      'assets/local_icons/GrandEst.png',
      [],
      'F45w43p'
    ),
    new Discord(
      'Normandie',
      'assets/local_icons/Normandie.png',
      [],
      'vwzWMPj'
    ),
    new Discord(
      'Picardie',
      'assets/local_icons/Picardie.png',
      [],
      'RTRtnnh'
    ),
    new Discord(
      'Réunion',
      'assets/local_icons/Reunion.png',
      [],
      '3gc7u27'
    ),
  ];

  public readonly others: Discord[] = [
    new Discord(
      'Chez Tamalou',
      'assets/others_icons/Smashtheque.png',
      ['Tamalou', 'IceSlimGuys', 'Inkkuid'],
      'nXhBfhZ'
    ),
    new Discord(
      'DashProf',
      'assets/others_icons/DashProf.png',
      ['Cherushi', 'Miraph89', 'Naturiu', 'SoSamus Arab'],
      'PCy3Jfn'
    ),
    new Discord(
      'FC Weeklies',
      'assets/others_icons/FCWeeklies.png',
      ['Furamoh', 'Kyrow', 'Marin'],
      'jX5gvf3'
    ),
    new Discord(
      'Glutonny & NtK',
      'assets/others_icons/NtKGluto.png',
      ['Glutonny', 'NtK', 'Zatsu', 'Amadeus', 'Champi_S'],
      'KD8jzCJ'
    ),
    new Discord(
      'La Ligue des Smasheurs',
      'assets/others_icons/Smashtheque.png',
      ['Kirino', 'AS'],
      'W3eYf3j'
    ),
    new Discord(
      'Legend of Sheikah',
      'assets/others_icons/Smashtheque.png',
      ['red', 'kaak', 'Yumé'],
      'fx6AGJb'
    ),
    new Discord(
      'Le Potager de Pierrot',
      'assets/others_icons/Smashtheque.png',
      ['Pierrot', 'Azertite'],
      'FKhVzkg'
    ),
    new Discord(
      'Mystery Team',
      'assets/others_icons/MysteryTeam.png',
      ['Vildox'],
      'uyE4dHp'
    ),
    new Discord(
      'One Punch Smash',
      'assets/others_icons/Smashtheque.png',
      ['Barrakauchy', 'Sanah'],
      'f9agCSx'
    ),
    new Discord(
      'Onirique',
      'assets/others_icons/Smashtheque.png',
      ['Chazzzing', 'Junkhead'],
      'hAcxaVs'
    ),
    new Discord(
      'Pugilat des Etoiles',
      'assets/others_icons/PDE.png',
      ['Draco', 'DineAuZor', 'Pastaike'],
      'CzsRN83'
    ),
    new Discord(
      'Rdv dans l\'Octogone',
      'assets/others_icons/Smashtheque.png',
      ['LoXi', 'Fabayou', 'Orso', 'Reunart'],
      'jVREASf'
    ),
    new Discord(
      'Roket Team',
      'assets/others_icons/Smashtheque.png',
      ['Origin_Fox'],
      '4AygTet'
    ),
    new Discord(
      'Salty Community',
      'assets/others_icons/SaltyCommunity.png',
      ['Natroxguy', 'Shaka', 'Chachuke', 'Faladop'],
      'PaKB777'
    ),
    new Discord(
      'Smash Académie',
      'assets/others_icons/Smashtheque.png',
      ['Toyohoru', 'Ennaria'],
      'y8DbFjg'
    ),
    new Discord(
      'Smash Series',
      'assets/others_icons/SmashSeries.png',
      ['Zatsu', 'NtK', 'MamanDesSmasheurs'],
      'kbr83H6'
    ),
    new Discord(
      'Smashthèque',
      'assets/others_icons/Smashtheque.png',
      ['Jochen', 'red', 'MIDZ'],
      '2HwUAyw'
    ),
    new Discord(
      'Squirtle Family',
      'assets/others_icons/Smashtheque.png',
      ['MaxouLeGlouglou'],
      'bHbdACK'
    ),
    new Discord(
      'Super Smash Bronol',
      'assets/character_icons/Ness.png',
      ['Bronol', 'Addictio', 'El Laggron', 'Mr Cast'],
      'bronol'
    ),
    new Discord(
      'Throw Your Stocks',
      'assets/others_icons/Smashtheque.png',
      ['Grandserein', 'BGITS'],
      'gKhAUFs'
    ),
    new Discord(
      'Tilt Together',
      'assets/others_icons/TiltTogether.png',
      ['Guilshark', 'Allen', 'Blitzfire', 'Hamtagro'],
      'ebcwTWU'
    ),
    new Discord(
      'True Combo!',
      'assets/others_icons/Smashtheque.png',
      ['Speedroide', 'Diaminderino', 'Ice-Walker'],
      'ytVvdn2'
    ),
    new Discord(
      'Trinity Janken',
      'assets/others_icons/TrinityJanken.png',
      ['Allen', 'Champi_S', 'White'],
      'Ab7fKAv'
    ),
  ];
}
