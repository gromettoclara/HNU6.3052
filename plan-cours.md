---
title: Atelier introduction à XML-TEI - Plan 
format:
  pdf:
    pdf-engine: lualatex
    include-in-header:
      - text: |
          \usepackage{style-cours}
          \courstitle{Atelier introduction à XML-TEI}
          \courssubtitle{Plan}
          \makeatletter
            \renewcommand{\maketitle}{\makecourstitle}
          \makeatother
          
    toc: false
    number-sections: false
    colorlinks: true
  html:
    toc: true
    colorlinks: true
---

Contacts : Clara Grometto ([clara.grometto@umontreal.ca](clara.grometto@umontreal.ca)).

## [🧭]{.content-visible when-format="html"} S'orienter 

### Liens vers les slides

[Cours 1](https://gromettoclara.github.io/HNU6.3052/cours1.slides.html#/) - [Cours 2](https://gromettoclara.github.io/HNU6.3052/cours2.slides.html#/) - [Cours 3](https://gromettoclara.github.io/HNU6.3052/cours3.slides.html#/) - [Cours 4](https://gromettoclara.github.io/HNU6.3052/cours4.slides.html#/) - [Cours 5 ](https://gromettoclara.github.io/HNU6.3052/cours5.slides.html#/)

### Exercices ([lien vers le git](https://github.com/gromettoclara/HNU6.3052))

**Cours 1** : [Édition des notes de Pierre Christofle](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours1/Christofle-septembre2016.xml)

**Cours 2** : [_Le Cid_](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours2/LeCid.txt) - _La Cantilène d'Eulalie_ ([texte](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours2/Eulalie_transcription.txt) + [image](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours2/Eulalie_numerisation.jpeg)) - [Template pour le teiHeader](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours2/header_template.xml)

**Cours 3** : [Template teiHeader](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours3/TEI_msDesc_template.xml) pour la description des sources manuscrites - [notice de catalogue de la BnF](https://archivesetmanuscrits.bnf.fr/ark:/12148/cc50522d) et [notice de l’IRHT](https://jonas.irht.cnrs.fr/manuscrit/45533) du Manuscrit 412

**Cours 4** : [_Notre-Dame de Paris_](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours4/Notre-Dame-de-Paris.xml) - [_Sonnet d'automne_](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours4/Sonnet_Automne_TEI.xml)

**Cours 5** : [Journal de Jean Le Fèvre](https://github.com/gromettoclara/HNU6.3052/blob/main/exs-cours5/journal-Lefevre.xml) - [Dossier _Journal d'un condamné_](https://github.com/gromettoclara/HNU6.3052/tree/main/exs-cours5/hugo)

## Objectifs de l'atelier

**S'initier à la Text Encoding Initiative, un cadre de travail pour la production d’édition structurée fondé sur le langage de balisage XML (eXtended Markup Language)**

- Expliquer les principes de l’édition structurée et la notion de balisage descriptif

- Connaître les principes et l'historique de XML et de la TEI

- Réaliser un encodage en XML-TEI

- Valider son encodage (document bien formé vs. document valide) et s'initier à la notion de schéma et aux technologies associées

- Utiliser les langages XPath et XSL pour exploiter son document

## Calendrier des séances
L’atelier se déroulera le mercredi de 12h30 à 15h30, du 4 novembre au 2 décembre 2026 au local A-2403 du Pavillon Maximilien-Caron.

### Séance 1 - mercredi 04 novembre

- introduction et installation technique ;
- qu'est-ce qu'une édition structurée ? ;
- XML : principes et syntaxe ;
- exercices pratiques d’encodage en XML ;

### Séance 2 - mercredi 11 novembre

- présentation de la Text Encoding Initiative (TEI) ;
- exercice de structuration de texte avec la TEI ;
- TEI pour l'édition scientifique : modélisation de l'édition d'une source manuscrite ;

### Séance 3 - mercredi 18 novembre

- application : modélisation de l'édition d'une source manuscrite (suite);
- méthodes de travail avec la TEI, exploration des guidelines ;
- notion d'espace de nom ;

### Séance 4 - mercredi 25 novembre

- XPath ;
- notion de schéma : technologies de validation ;
- application : personnalisation de la TEI ;

### Séance 5 - mercredi 02 décembre

- XSLT, introduction ;
- exercices d’application de transformation ;
- bilan.

## Évaluation

L’évaluation de l’atelier reposera sur des travaux pratiques d’encodage en XML/TEI :

1. Deux exercices d'encodage en XML-TEI réalisés en cours d'atelier (_Le Cid_ et _La Cantilène d'Eulalie_) (60%). 
2. Exercice d'encodage d'un texte de votre choix OU encodage de deux feuillets de l'_Oraison à Notre-Dame_ tirée du [_Livre de Christine_ de Christine de Pizan](https://gallica.bnf.fr/ark:/12148/btv1b60001038) (Bibliothèque nationale de France, manuscrit Français 12779) sur le modèle de l'exercice sur _La Cantilène de Sainte Eulalie_ (40%) à rendre le 06/01.

## Orientations bibliographiques principales

[Burnard, Lou. 2015. « Introduction ». Dans *Qu’est-ce que la Text Encoding Initiative ?* traduit par Marjorie Burghart. OpenEdition Press.](https://books.openedition.org/oep/1297?lang=fr)

[DeRose, Steven J., David G. Durand, Elli Mylonas, et Allen H. Renear. 1990. « What is text, really? » *Journal of Computing in Higher Education* 1 (2) : 3‑26.](https://link.springer.com/article/10.1007/BF02941632)

## Message d’accueil

Bonjour à toutes et à tous,

Je vous souhaite la bienvenue dans l’atelier HNU3052/HNU6052 – Introduction à la Text encoding initiative (TEI). J’aurai le plaisir d’être votre enseignante pour cette session.

Cet atelier vise à initier les étudiantes et les étudiants aux méthodes d’édition scientifique/critique avec la Text Encoding Encoding Initiative (TEI), un cadre de travail pour la production d’éditions structurées fondé sur le langage de balisage XML (eXtended Markup Language).

Ce cours ne nécessite aucune prérequis technique. Nous installerons ensemble le logiciel Oxygen, disposible dans la logitech de l'Université, lors du premier cours qui aura lieu le mercredi 04 novembre à 12h30, au local A-2403 du Pavillon Maximilien-Caron (3101, chemin de la tour). 

Au plaisir de faire votre connaissance.

Clara

## Références et ressources 

- *A gentle introduction to XML* : [http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/SG.html).
- Alsacreations, [XML en quelques mots](https://www.alsacreations.com/article/lire/609-XML-en-quelques-mots.html).
- American Historical Association (AHA), « The Text Encoding Initiative » : [https://www.historians.org/perspectives-article/the-text-encoding-initiative/](https://www.historians.org/perspectives-article/the-text-encoding-initiative/).
- [Atelier TEI, ANF Digital Areal | ERC-DHARMA](https://erc-dharma.github.io/digital-areal/2_schema.html).
- BERTRAND, Lauranne, GUILLOT, Céline, HEIDEN, Serge et LAVRENTIEV, Alexei, rev. BURNARD, Lou et FEKETE, Jean-Daniel, *Manuel d’encodage XML-TEI des textes de la Base de Français Médiéval*, 2009, (En ligne : [http://bfm.ens-lyon.fr/IMG/pdf/Manuel_Encodage_TEI.pdf](http://bfm.ens-lyon.fr/IMG/pdf/Manuel_Encodage_TEI.pdf)).
- BESHERO-BONDAR, Elisa et al., [*Document Modeling with the TEI Critical Apparatus*](http://slides.com/elisabeshero-bondar/app-crit), 2019.
- BOURGAIN, Pascale et VIELLIARD, Françoise, *Conseils pour l’édition des textes médiévaux. Fascicule III, Textes littéraires*, Paris, France, Comité des travaux historiques et scientifiques : École nationale des chartes, 2018, 254 p., (« Orientations et méthodes », 32).
- BUREAU, Bruno, « Quelques réflexions sur la notion de littérarité à partir de l’édition numérique de commentateurs anciens », *Interférences. Ars scribendi*, janvier 2012, (En ligne : [http://journals.openedition.org/interferences/186](http://journals.openedition.org/interferences/186)).
- BURGHART, Marjorie, [Éditer des sources historiques en ligne grâce à XML – Un guide pratique](http://mutec.huma-num.fr/sites/www.mutec-shs.fr/files/Guide%20Editer%20des%20sources%20historiques%20%20gr%C3%A2ce%20a%20XML.pdf).
- BURGHART, Marjorie, PIERAZZO, Elena et al., [*Online course: Digital Scholarly Editions: Manuscripts, Texts, and TEI Encoding – Digital Editing of Medieval Manuscripts*](https://www.digitalmanuscripts.eu/digital-editing-of-medieval-texts-a-textbook/).
- BURNARD, Lou, [Comment maîtriser le tigre TEI](https://cahier.hypotheses.org/files/2018/08/ODD-diapos.pdf).
- BURNARD, Lou, [La Text Encoding Initiative (TEI) C'est quoi ?](https://docasie.cnrs.fr/wp-content/uploads/PresentationPPT/DocAsie2013/DocAsie2013_LouBurnard_TEI.pdf).
- BURNARD, Lou et BURGHART, Marjorie, *Qu’est-ce que la Text Encoding Initiative ?*, 2015, (En ligne : [http://books.openedition.org/oep/1237](http://books.openedition.org/oep/1237)).
- CAMPS, Jean-Baptiste, [Structuration des données et des documents : balisage XML](https://halshs.archives-ouvertes.fr/cel-01706530).
- CARTON, Olivier, [Cours XML - Chapitre 7. Schematron](https://www.irif.fr/~carton/Enseignement/XML/Cours/Schematron/index.html).
- CHATEAU, Emmanuel, [L'encodage des textes](http://www.desgodets.net/edition-des-cours/model), Cours de Desgodets, 2012.
- CONSENTIN, Magali, [Cours XML](http://magali.contensin.free.fr/html/XML/index.php), 2007.
- Consortium ORIFLAMMS, [Spécification au format XML-TEI pour l'alignement texte-image. Bonnes pratiques d'encodage](https://oriflamms.hypotheses.org/1510), 2016.
- COOMBS, James H., RENEAR, Allen H. et DEROSE, Steven J., « Markup Systems and the Future of Scholarly Text Processing », *Communications of the ACM*, vol. 30, no. 11, 1987, pp. 933-947.
- DEROSE, Steven J. et al., « What Is Text, Really? », *Journal of Computing in Higher Education*, vol. 1, no. 2, Dec. 1990, pp. 3–26. Crossref, doi:[10.1007/BF02941632](https://doi.org/10.1007/BF02941632).
- *Digital Scholarly Editions*, [Manuscripts, Texts and TEI Encoding](https://www.youtube.com/playlist?list=PL77mHK9JuenN9NXeXQbVcUORz7HZk-9Pv).
- DUFOURNAUD, Nicole et GRASTAC-LEGENDRE, Valérie, *Manuel d’encodage XML-TEI - édition numérique de manuscrits baroques : Recommandations pour une application TEI*, 2012, hal-00718043, (En ligne : [https://hal.archives-ouvertes.fr/hal-00718043/document](https://hal.archives-ouvertes.fr/hal-00718043/document)).
- DUVAL, Frédéric, « Pour des éditions numériques critiques. L’exemple des textes français », in *Le texte à l’épreuve du numérique*, Saint-Denis, France, Presses universitaires de Vincennes, 2017, p. 13-30, (En ligne : [https://journals.openedition.org/medievales/8165](https://journals.openedition.org/medievales/8165)).
- GENEVÈS, Pierre, [*The XPath Language*](http://wam.inrialpes.fr/courses/PG-MoSIG12/xpath.pdf).
- HAROLD, Elliotte Rusty, MEANS, W. Scott, ENSARGUET, Philippe [et al.], [*XML en concentré*](https://www.oreilly.com/library/view/xml-in-a/0596007647/), Paris, O’Reilly, 2005.
- HAWKINS, Kevin S., [Introduction to the TEI Header](http://www.ultraslavonic.info/intro-to-tei-header/).
- *History of Information*, « The Text Encoding Initiative Begins » : [https://www.historyofinformation.com/detail.php?id=5007](https://www.historyofinformation.com/detail.php?id=5007).
- JOLIVET, Vincent, [Cours XML-TEI](https://github.com/architexte/cours-TEI).
- KAY, Michael R., *XPath 2.0 programmer’s reference*, Indianapolis, IN, Wrox Press, 2004.
- LAVIGNASSE, Sophie, « La DTD et son langage XML. Une application pour la lexicographie contemporaine », *Éla. Études de linguistique appliquée*, vol. nº137, 2005, pp. 73-94, (En ligne : [https://www.cairn.info/revue-ela-2005-1-page-73.htm](https://www.cairn.info/revue-ela-2005-1-page-73.htm)).
- Les Bibliothèques Virtuelles Humanistes, [Manuel d’encodage XML-TEI Renaissance et temps modernes (Imprimés - manuscrits)](http://www.bvh.univ-tours.fr/XML-TEI/index.asp).
- Master MIAGE Université de Nantes, [Ingénierie XML : concepts de base](https://miage.univ-nantes.fr/miage/D2X1/chapitre_presentation/chapitre.htm).
- MYLONAS, Elli et RENEAR, Allen, « The Text Encoding Initiative at 10: Not Just An Interchange Format Anymore — but a New Research Community », *Computers and the Humanities*, vol. 33, 1999.
- PALLUAULT, Florent, « Informatiser des descriptions complexes : l’utilisation de l’EAD et de la TEI pour les manuscrits et les livres anciens en France », *IFLA 2012* (Helsinki), (En ligne : [http://conference.ifla.org/past/2012/212-palluault-fr.pdf](http://conference.ifla.org/past/2012/212-palluault-fr.pdf)).
- PIERAZZO, Elena, *Digital scholarly editing: theories, models and methods*, Farnham Burlington (Vt.), Ashgate, 2015, (En ligne : [https://hal.univ-grenoble-alpes.fr/hal-01182162/document](https://hal.univ-grenoble-alpes.fr/hal-01182162/document)).
- PINCHE, Ariane, [Cours TNAH XML-TEI](https://github.com/ArianePinche/coursTNAH_XML-TEI).
- POUPEAU, Gautier, [L'édition critique des sources historiques : du support papier au Web](https://www.lespetitescases.net/node/1088), 2008.
- RAHTZ, Sebastian et BURNARD, Lou, « Reviewing the TEI ODD System », ACM, 2013, p. 193-196, (En ligne : [http://dx.doi.org/10.1145/2494266.2494321](http://dx.doi.org/10.1145/2494266.2494321)).
- ROBINSON, Peter, « Where We Are with Electronic Scholarly Editions, and Where We Want to Be », *Jahrbuch für Computerphilologie*, vol. 5 / 5, 2003, p. 126-146, (En ligne : [http://computerphilologie.digital-humanities.de/jg03/robinson.html](http://computerphilologie.digital-humanities.de/jg03/robinson.html)).
- SPERBERG-McQUEEN, Michael, « The Text Encoding Initiative: Its History, Goals, and Future Development », *Computers and the Humanities*, 1995, (texte disponible : [https://www.cs.vassar.edu/~ide/papers/teiHistory.pdf](https://www.cs.vassar.edu/~ide/papers/teiHistory.pdf)).
- [*TEI by Example*](https://teibyexample.org/exist/TBE.htm).
- TEI Consortium, « History », tei-c.org : [https://tei-c.org/about/history/](https://tei-c.org/about/history/).
- [*TEI GitHub repository*](https://github.com/TEIC/TEI).
- [*TEI guidelines*](http://www.tei-c.org/release/doc/tei-p5-doc/en/html/index.html).
- VIELLIARD, Françoise et GUYOTJEANNIN, Olivier, *Conseils pour l’édition des textes médiévaux. Fascicule I, Conseils généraux*, Paris, Comité des travaux historiques et scientifiques : École nationale des chartes, 2001.
- W3School, [*XML Tutorial*](https://www.w3schools.com/xml/default.asp).
- W3School, [*XPath Tutorial*](https://www.w3schools.com/xml/xpath_intro.asp).
- Wikipédia (français), article « Text Encoding Initiative » : [https://fr.wikipedia.org/wiki/Text_Encoding_Initiative](https://fr.wikipedia.org/wiki/Text_Encoding_Initiative).
- *Women Writers Online*, [*TEI Tutorials*](https://www.wwp.northeastern.edu/outreach/resources/tutorial_all.html).