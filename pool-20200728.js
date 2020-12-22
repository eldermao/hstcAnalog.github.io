function loadMinionPool() {
   G.type = {
      0: '-',
      1: '野兽',
      2: '机械',
      3: '鱼人',
      4: '恶魔',
      5: '龙',
      6: '海盗',
      99: '*'
   };
   G.pool = [
      // Tier 1
      new Minion(101, 1, 1, 1, {}, 'alleycat'),
      new Minion(102, 2, 2, 6, {}, '甲板杂兵'),
      new Minion(103, 2, 3, 5, { taunt: true }, 'dragonspawn lieutenant'),
      new Minion(104, 2, 1, 4, {}, 'fiendish servant'),
      new Minion(105, 1, 1, 2, {}, 'mecharoo'),
      new Minion(106, 1, 2, 2, {}, 'micro machine'),
      new Minion(107, 1, 2, 3, {}, 'murloc tidecaller'),
      new Minion(108, 2, 1, 3, {}, 'murloc tidehunter'),
      new Minion(109, 1, 2, 5, {}, 'red whelp'),
      new Minion(110, 1, 1, 0, { taunt: true, shield: true }, 'righteous protector'),
      new Minion(111, 2, 3, 3, {}, 'rockpool hunter'),
      new Minion(112, 2, 1, 6, {}, 'scallywag'),
      new Minion(113, 2, 2, 1, {}, 'scaveging hyena'),
      new Minion(114, 2, 1, 0, {}, 'selfless hero'),
      new Minion(115, 2, 4, 4, {}, 'vulgar homunculus'),
      new Minion(116, 1, 1, 0, {}, 'wrath waver'),
      // Tier 2
      new Minion(201, 2, 2, 0, { noatk: true }, 'arcane cannon'),
      new Minion(202, 3, 3, 6, {}, 'freedealing gambler'),
      new Minion(203, 2, 4, 5, {}, 'glyph guardian'),
      new Minion(204, 2, 3, 2, {}, 'harvest golem'),
      new Minion(205, 3, 3, 4, { taunt: true }, 'imprisoner'),
      new Minion(206, 2, 2, 2, {}, 'kaboom bot'),
      new Minion(207, 1, 1, 1, {}, 'kindly grandmother'),
      new Minion(208, 3, 3, 2, {}, 'metaltooth leaper'),
      new Minion(209, 3, 3, 3, {}, 'murloc warleader'),
      new Minion(210, 2, 3, 4, {}, 'nathrezim overseer'),
      new Minion(211, 2, 4, 3, {}, 'old murk-eye'),
      new Minion(212, 1, 1, 2, {}, 'pogo-hopper'),
      new Minion(213, 3, 2, 1, {}, 'rabid saurolisk'),
      new Minion(214, 2, 2, 1, {}, 'rat pack'),
      new Minion(215, 3, 3, 6, {}, 'southsea captain'),
      new Minion(216, 2, 2, 0, {}, 'spawn of n\'zoth'),
      new Minion(217, 3, 4, 5, {}, 'steward of time'),
      new Minion(218, 1, 3, 0, { taunt: true }, 'unstable ghoul'),
      new Minion(219, 1, 2, 0, {}, 'waxrider togwaggle'),
      new Minion(220, 3, 3, 2, {}, 'zoobot'),
      // Tier 3
      new Minion(301, 4, 2, 6, {}, 'bloodsail cannoneer'),
      new Minion(302, 2, 1, 5, { shield: true, reborn: true }, 'bronze warden'),
      new Minion(303, 2, 3, 3, {}, 'coldlight seer'),
      new Minion(304, 4, 4, 0, {}, 'crowd favorite'),
      new Minion(305, 5, 4, 0, {}, 'crystalweaver'),
      new Minion(306, 3, 2, 2, { shield: true }, 'deflect-o-bot'),
      new Minion(307, 4, 4, 3, {}, 'felfin navigator'),
      new Minion(308, 4, 4, 5, {}, 'hangry dragon'),
      new Minion(309, 4, 3, 0, {}, 'houndmaster'),
      new Minion(310, 2, 4, 4, {}, 'imp gang boss'),
      new Minion(311, 3, 3, 1, {}, 'infested wolf'),
      new Minion(312, 2, 2, 0, {}, 'khadgar'),
      new Minion(313, 3, 2, 1, {}, 'monstrous macaw'),
      new Minion(314, 3, 3, 0, {}, 'pack leader'),
      new Minion(315, 4, 3, 2, {}, 'piloted shredder'),
      new Minion(316, 3, 1, 2, {}, 'replicating menace'),
      new Minion(317, 3, 3, 6, {}, 'salty looter'),
      new Minion(318, 2, 5, 2, {}, 'screwjank clunker'),
      new Minion(319, 1, 1, 0, {}, 'shifter zerus'),
      new Minion(320, 3, 3, 0, {}, 'soul juggler'),
      new Minion(321, 9, 7, 1, {}, 'the beast'),
      new Minion(322, 4, 4, 5, { taunt: true }, 'twilight emissary'),
      new Minion(323, 2, 8, 6, { taunt: true }, 'yo-ho-ogre'),
      // Tier 4
      new Minion(401, 2, 4, 2, { taunt: true, shield: true }, 'annoy-o-module'),
      new Minion(402, 1, 7, 0, { shield: true }, 'bolvar, fireblood'),
      new Minion(403, 2, 4, 1, {}, 'cave hydra'),
      new Minion(404, 5, 5, 5, {}, 'cobalt scalebane'),
      new Minion(405, 2, 3, 0, {}, 'defender of argus'),
      new Minion(406, 3, 6, 5, {}, 'drakonid enforcer'),
      new Minion(407, 4, 4, 4, {}, 'floating watcher'),
      new Minion(408, 2, 2, 6, {}, 'goldgrubber'),
      new Minion(409, 5, 6, 5, {}, 'herald of flame'),
      new Minion(410, 2, 2, 2, {}, 'iron sesei'),
      new Minion(411, 0, 5, 2, {}, 'mechano-egg'),
      new Minion(412, 4, 4, 0, {}, 'menagerie magician'),
      new Minion(413, 3, 4, 6, {}, 'ripsnarl captain'),
      new Minion(414, 6, 5, 1, {}, 'savannah highmane'),
      new Minion(415, 2, 6, 2, {}, 'security rover'),
      new Minion(416, 5, 8, 4, { taunt: true }, 'siegebreaker'),
      new Minion(417, 5, 4, 6, {}, 'southsea strongarm'),
      new Minion(418, 1, 2, 3, {}, 'toxfin'),
      new Minion(419, 4, 5, 0, {}, 'virmen sensei'),
      // Tier 5
      new Minion(501, 3, 1, 4, {}, 'annihilan battlemaster'),
      new Minion(502, 1, 7, 0, {}, 'baron rivendare'),
      new Minion(503, 2, 4, 0, {}, 'brann bronzebeard'),
      new Minion(504, 6, 6, 6, {}, 'cap\'n hoggarr'),
      new Minion(506, 7, 7, 1, {}, 'ironhide direhorn'),
      new Minion(507, 1, 5, 2, {}, 'junkbot'),
      new Minion(508, 6, 3, 3, {}, 'king bagurgle'),
      new Minion(509, 2, 2, 0, {}, 'lightfang enforcer'),
      new Minion(510, 9, 7, 4, {}, 'mal\'ganis'),
      new Minion(511, 5, 5, 5, {}, 'murozond'),
      new Minion(512, 8, 5, 6, {}, 'nat pagle, extreme angler'),
      new Minion(513, 3, 2, 3, {}, 'primalfin lookout'),
      new Minion(514, 2, 4, 5, {}, 'razorgore, the untamed'),
      new Minion(515, 6, 7, 6, { windfury: true }, 'seabreaker goliath'),
      new Minion(516, 5, 7, 2, {}, 'sneed\'s old shredder'),
      new Minion(517, 2, 3, 0, {}, 'strongshell scavenger'),
      new Minion(518, 3, 9, 4, { taunt: true }, 'voidlord'),
      // Tier 6
      new Minion(601, 6, 7, 6, {}, 'dread admiral eliza'),
      new Minion(602, 6, 9, 2, {}, 'foe reaper 4000'),
      new Minion(603, 5, 4, 1, {}, 'gentle megasaur'),
      new Minion(604, 7, 7, 2, {}, 'ghastcoiler'),
      new Minion(605, 6, 10, 4, {}, 'imp mama'),
      new Minion(606, 4, 12, 5, {}, 'kalecgos, arcane aspeet'),
      new Minion(607, 3, 6, 0, {}, 'kangor\'s apprentiee'),
      new Minion(608, 2, 8, 1, { poison: true }, 'maexxna'),
      new Minion(609, 5, 5, 1, {}, 'mama bear'),
      new Minion(610, 7, 4, 0, {}, 'nadina the red'),
      new Minion(611, 6, 4, 0, {}, 'the tide razor'),
      new Minion(612, 7, 10, 0, { windfury: true, atk: 'min' }, 'zapp slywick'),
      new Minion(613, 4, 4, 1, {}, 'goldrinn, the great wolf'), // move goldrinn to Tier 6
      new Minion(614, 6, 6, 99, {}, 'amalgadon'),
      // Unpurchsable
      new Minion(1, 3, 2, 1, {}, 'big bad wolf'),
      new Minion(2, 2, 1, 2, {}, 'damaged golem'),
      new Minion(3, 3, 3, 0, {}, 'finkle einhorn'),
      new Minion(4, 2, 3, 2, { taunt: true }, 'guard bot'),
      new Minion(5, 2, 2, 1, {}, 'hyena'),
      new Minion(6, 1, 1, 4, {}, 'imp'),
      new Minion(7, 5, 5, 1, {}, 'ironhide runt'),
      new Minion(8, 1, 1, 2, {}, 'jo-e bot'),
      new Minion(9, 1, 1, 2, {}, 'microbot'),
      new Minion(10, 1, 1, 3, {}, 'murloc scout'),
      new Minion(11, 1, 1, 0, {}, 'plant'),
      new Minion(12, 1, 1, 1, {}, 'rat'),
      new Minion(13, 8, 8, 2, {}, 'robosaur'),
      new Minion(14, 1, 1, 6, {}, 'sky pirate'),
      new Minion(15, 1, 1, 1, {}, 'spider'),
      new Minion(16, 1, 1, 1, {}, 'tabbycat'),
      new Minion(17, 0, 2, 0, {}, 'treasure chest'),
      new Minion(18, 1, 3, 4, { taunt: true }, 'voidwalker'),
      new Minion(19, 1, 1, 99, {}, 'amalgam'),
      new Minion(20, 2, 3, 1, { poison: true }, 'emperor cobra'),
      new Minion(21, 1, 1, 1, {}, 'snake'),
      // functions
      new Minion(-4, 2, 1, 0, { immune: true, dead: true }, 'arcane cannon # shot'),
      new Minion(-3, 3, 1, 0, { immune: true, dead: true }, 'soul juggler # spell'),
      new Minion(-2, 3, 1, 5, { immune: true, dead: true }, 'herald of flame # overkill'),
      new Minion(-1, 0, 0, 0, {}, '#seeds') // summon 2 (plant)s
   ];
}