/**
 * Cours complémentaires alignés sur le BO (2019–2020).
 * Chargé avant le script principal de math.html.
 */
(function () {
  "use strict";

  window.COURSES_SECONDE_EXTRA = [
    {
      chapter: "3 — Fonctions",
      title: "Notion de fonction et variations",
      content: String.raw`
<div class="section"><div class="section-label">Définition</div>
<div class="theorem-box"><div class="label">Fonction</div>
<div class="prose"><p>Une <strong>fonction</strong> \(f\) associe à chaque nombre \(x\) d'un ensemble de départ (domaine) <em>un unique</em> nombre \(f(x)\).</p>
<p>On note \(f : D \to \mathbb{R}\), \(x \mapsto f(x)\).</p></div></div></div>
<div class="section"><div class="section-label">Représentation graphique</div>
<div class="theorem-box"><div class="label">Courbe représentative</div>
<div class="prose"><p>La courbe de \(f\) est l'ensemble des points \(M(x ; f(x))\) dans un repère. Lire \(f(a)\) revient à lire l'ordonnée du point d'abscisse \(a\).</p></div></div></div>
<div class="section"><div class="section-label">Variations</div>
<div class="theorem-box"><div class="label">Croissance / décroissance</div>
<div class="prose"><p>Sur un intervalle \(I\) :</p></div>
<div class="step"><div class="step-num">▸</div><div class="step-body">\(f\) est <strong style="color:var(--green)">croissante</strong> sur \(I\) si pour tous \(x,y \in I\) avec \(x < y\), on a \(f(x) \leq f(y)\).</div></div>
<div class="step"><div class="step-num">▸</div><div class="step-body">\(f\) est <strong style="color:var(--coral)">décroissante</strong> sur \(I\) si pour tous \(x,y \in I\) avec \(x < y\), on a \(f(x) \geq f(y)\).</div></div></div></div>
<div class="section"><div class="section-label">Fonctions de référence</div>
<div class="proof-box"><div class="label">À connaître en Seconde</div>
<div class="prose"><ul style="margin-left:20px;line-height:2">
<li>\(f(x)=ax+b\) : droite (affine), croissante si \(a>0\)</li>
<li>\(f(x)=x^2\) : parabole, décroissante sur \(]-\infty;0]\), croissante sur \([0;+\infty[\)</li>
<li>\(f(x)=\sqrt{x}\) : racine carrée, définie sur \([0;+\infty[\), croissante</li>
<li>\(f(x)=\dfrac{1}{x}\) : inverse, définie sur \(\mathbb{R}^*\), décroissante sur chaque intervalle de son domaine</li>
</ul></div></div></div>
<div class="note-box">📌 Programme BO Seconde : étudier des fonctions à partir de leur courbe, d'un tableau de valeurs ou d'une formule.</div>
`,
    },
    {
      chapter: "4 — Géométrie",
      title: "Théorème de Pythagore et trigonométrie",
      content: String.raw`
<div class="section"><div class="section-label">Théorème de Pythagore</div>
<div class="theorem-box"><div class="label">Théorème</div>
<div class="prose"><p>Dans un triangle rectangle, le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés :</p></div>
$$BC^2 = AB^2 + AC^2$$
<div class="prose"><p>Réciproque : si \(BC^2 = AB^2 + AC^2\), alors le triangle \(ABC\) est rectangle en \(A\).</p></div></div></div>
<div class="section"><div class="section-label">Cosinus dans un triangle rectangle</div>
<div class="theorem-box"><div class="label">Définition</div>
$$\cos(\widehat{BAC}) = \frac{\text{côté adjacent}}{\text{hypoténuse}} = \frac{AB}{BC}$$
$$\sin(\widehat{BAC}) = \frac{\text{côté opposé}}{\text{hypoténuse}} = \frac{AC}{BC}$$
$$\tan(\widehat{BAC}) = \frac{AC}{AB}$$</div></div>
<div class="section"><div class="section-label">Théorème de Thalès</div>
<div class="theorem-box"><div class="label">Configuration</div>
<div class="prose"><p>Si \((DE) \parallel (BC)\) avec \(D \in [AB]\), \(E \in [AC]\), alors :</p></div>
$$\frac{AD}{AB} = \frac{AE}{AC} = \frac{DE}{BC}$$</div></div>
<div class="note-box">📌 Ces outils servent au calcul de distances, d'angles et à la résolution de problèmes de géométrie plane (BO Seconde).</div>
`,
    },
    {
      chapter: "5 — Statistiques",
      title: "Statistiques descriptives",
      content: String.raw`
<div class="section"><div class="section-label">Caractéristiques de position</div>
<div class="theorem-box"><div class="label">Moyenne et médiane</div>
<div class="prose"><p>Pour une série statistique de valeurs \(x_i\) avec effectifs \(n_i\) (\(N = \sum n_i\)) :</p></div>
$$\bar{x} = \frac{1}{N}\sum_i n_i x_i$$
<div class="prose"><p>La <strong>médiane</strong> partage la série ordonnée en deux groupes de même effectif (50 % en dessous, 50 % au-dessus).</p>
<p><em>Exemple :</em> série 12, 14, 15, 16, 18 → médiane = 15 (valeur centrale).</p></div></div></div>
<div class="section"><div class="section-label">Dispersion</div>
<div class="theorem-box"><div class="label">Étendue et quartiles</div>
<div class="prose"><p><strong>Étendue</strong> = max − min.</p>
<p><strong>Q1</strong> (1er quartile) : 25 % des valeurs sont inférieures ou égales.</p>
<p><strong>Q3</strong> (3e quartile) : 75 % des valeurs sont inférieures ou égales.</p>
<p><strong>Écart interquartile</strong> : \(Q3 - Q1\).</p></div></div></div>
<div class="section"><div class="section-label">Exemple complet</div>
<div class="proof-box"><div class="label">Interprétation</div>
<div class="step"><div class="step-num">1</div><div class="step-body">Notes : 8, 10, 12, 14, 16, 18, 20 → \(\bar{x} = 98/7 \approx 14{,}0\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">Médiane = 14 (4e valeur sur 7).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Étendue = 20 − 8 = 12. Q1 ≈ 10, Q3 ≈ 18.</div></div></div></div>
<div class="note-box">📌 Le BO Seconde insiste sur la lecture critique de données et la comparaison de séries (moyenne, médiane, dispersion).</div>
`,
    },
    {
      chapter: "2 — Équations & Inéquations",
      title: "Équations et systèmes — méthodes",
      content: String.raw`
<div class="section"><div class="section-label">Équation du 1er degré</div>
<div class="theorem-box"><div class="label">Méthode générale</div>
<div class="prose"><p>Résoudre \(ax+b=cx+d\) revient à regrouper les inconnues d'un côté et les constantes de l'autre, puis diviser par le coefficient de \(x\).</p></div>
<div class="step"><div class="step-num">1</div><div class="step-body">Regrouper : \((a-c)x = d-b\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">Si \(a \neq c\) : solution unique \(x = \dfrac{d-b}{a-c}\).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Vérifier en substituant dans l'équation initiale.</div></div></div></div>
<div class="section"><div class="section-label">Système de deux équations</div>
<div class="theorem-box"><div class="label">Substitution ou combinaison</div>
<div class="prose"><p>Pour \(\begin{cases} ax+by=e \\ cx+dy=f \end{cases}\), on peut :</p>
<ul style="margin-left:20px;line-height:2">
<li><strong>Substituer</strong> : exprimer une inconnue en fonction de l'autre dans une équation, puis remplacer dans la seconde.</li>
<li><strong>Combiner</strong> : multiplier les équations pour éliminer \(x\) ou \(y\) par addition.</li>
</ul></div></div></div>
<div class="note-box">📌 Toujours vérifier le couple \((x;y)\) trouvé dans <em>les deux</em> équations.</div>
`,
    },
    {
      chapter: "3 — Fonctions",
      title: "Taux de variation et vitesse moyenne",
      content: String.raw`
<div class="section"><div class="section-label">Taux de variation</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>Entre \(a\) et \(b\) (\(a \neq b\)), le taux de variation de \(f\) est :</p></div>
$$\tau(a,b) = \frac{f(b)-f(a)}{b-a}$$
<div class="prose"><p>C'est la pente de la sécante entre les points \((a;f(a))\) et \((b;f(b))\).</p></div></div></div>
<div class="section"><div class="section-label">Exemple — vitesse moyenne</div>
<div class="proof-box"><div class="label">Interprétation physique</div>
<div class="prose"><p>Si \(d(t)\) est la distance parcourue à l'instant \(t\), alors \(\dfrac{d(t_2)-d(t_1)}{t_2-t_1}\) est la <strong>vitesse moyenne</strong> entre \(t_1\) et \(t_2\).</p>
<p>Exemple : 120 km en 2 h → vitesse moyenne 60 km/h.</p></div></div></div>
`,
    },
  ];

  window.COURSES_PREMIERE_EXTRA = [
    {
      chapter: "9 — Géométrie repérée",
      title: "Équations de droites et de cercles",
      content: String.raw`
<div class="section"><div class="section-label">Vecteur directeur et équation cartésienne</div>
<div class="theorem-box"><div class="label">Droite dans le plan</div>
<div class="prose"><p>Une droite \(\mathcal{D}\) non verticale admet une équation de la forme :</p></div>
$$ax + by + c = 0 \quad (a,b) \neq (0,0)$$
<div class="prose"><p>Un vecteur directeur est \(\vec{u}(-b ; a)\). Si \(b \neq 0\), forme réduite : \(y = mx + p\) avec \(m = -\dfrac{a}{b}\).</p></div></div></div>
<div class="section"><div class="section-label">Produit scalaire et orthogonalité</div>
<div class="theorem-box"><div class="label">Critère</div>
$$\vec{u}(x,y) \perp \vec{v}(x',y') \iff xx' + yy' = 0$$
<div class="prose"><p>Deux droites de vecteurs directeurs \(\vec{u}\) et \(\vec{v}\) sont perpendiculaires si \(\vec{u}\cdot\vec{v}=0\).</p></div></div></div>
<div class="section"><div class="section-label">Cercle</div>
<div class="theorem-box"><div class="label">Équation cartésienne</div>
<div class="prose"><p>Le cercle de centre \(\Omega(a;b)\) et de rayon \(r>0\) a pour équation :</p></div>
$$(x-a)^2 + (y-b)^2 = r^2$$</div></div>
<div class="section"><div class="section-label">Distance point-droite</div>
<div class="proof-box"><div class="label">Formule</div>
<div class="prose"><p>Distance de \(M(x_0;y_0)\) à la droite \(ax+by+c=0\) :</p></div>
$$d(M,\mathcal{D}) = \frac{|ax_0+by_0+c|}{\sqrt{a^2+b^2}}$$</div></div>
<div class="note-box">📌 Chapitre « Géométrie repérée » du BO Première spécialité mathématiques.</div>
`,
    },
    {
      chapter: "10 — Loi binomiale",
      title: "Schéma de Bernoulli et loi binomiale",
      content: String.raw`
<div class="section"><div class="section-label">Schéma de Bernoulli</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>On répète \(n\) fois de manière <strong>indépendante</strong> une épreuve à deux issues (succès / échec) de probabilité \(p\) de succès.</p></div></div></div>
<div class="section"><div class="section-label">Loi binomiale</div>
<div class="theorem-box"><div class="label">Variable X = nombre de succès</div>
$$X \sim \mathcal{B}(n,p), \quad P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}$$
$$E(X)=np, \quad V(X)=np(1-p)$$</div></div>
<div class="section"><div class="section-label">Exemple détaillé</div>
<div class="proof-box"><div class="label">10 lancers de pièce truquée (Pile = 0,6)</div>
<div class="step"><div class="step-num">1</div><div class="step-body">\(X\) = nombre de Pile sur 10 lancers, \(X \sim \mathcal{B}(10 ; 0{,}6)\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">\(P(X=7) = \binom{10}{7}(0{,}6)^7(0{,}4)^3\).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">\(E(X)=10\times 0{,}6=6\) Pile en moyenne.</div></div></div></div>
`,
    },
    {
      chapter: "11 — Information chiffrée",
      title: "Logarithme décimal et ordres de grandeur",
      content: String.raw`
<div class="section"><div class="section-label">Définition</div>
<div class="theorem-box"><div class="label">Logarithme décimal</div>
<div class="prose"><p>\(\log_{10}(x)\) (ou \(\log x\)) est l'exposant tel que \(10^{\log x} = x\) pour \(x>0\).</p>
<p>Propriétés : \(\log(ab)=\log a + \log b\), \(\log(a^n)=n\log a\).</p></div></div></div>
<div class="section"><div class="section-label">Application</div>
<div class="proof-box"><div class="label">pH, décibels, magnitude</div>
<div class="prose"><p>Le BO Première utilise le logarithme pour modéliser des grandeurs qui varient sur plusieurs ordres de magnitude (acidité, intensité sonore, etc.).</p></div></div></div>
`,
    },
  ];

  window.COURSES_TERMINALE_EXTRA = [
    {
      chapter: "1.1 — Combinatoire",
      title: "Combinatoire et dénombrement",
      content: String.raw`
<div class="section"><div class="section-label">Principe multiplicatif</div>
<div class="theorem-box"><div class="label">Règle</div>
<div class="prose"><p>Si une procédure comporte \(k\) étapes indépendantes avec respectivement \(n_1, n_2, \ldots, n_k\) choix, le nombre total d'issues est \(n_1 \times n_2 \times \cdots \times n_k\).</p></div></div></div>
<div class="section"><div class="section-label">Arrangements et combinaisons</div>
<div class="theorem-box"><div class="label">Formules BO Terminale</div>
$$A_n^p = \frac{n!}{(n-p)!} \qquad \binom{n}{p} = \frac{n!}{p!(n-p)!}$$
<div class="prose"><p>\(\binom{n}{p}\) : nombre de parties à \(p\) éléments d'un ensemble à \(n\) éléments.</p></div></div></div>
<div class="section"><div class="section-label">Triangle de Pascal</div>
<div class="theorem-box"><div class="label">Relation de Pascal</div>
$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$
<div class="prose"><p>Propriété fondamentale : \(\displaystyle\sum_{k=0}^{n}\binom{n}{k} = 2^n\).</p></div></div></div>
`,
    },
    {
      chapter: "1.2 — Géométrie dans l'espace",
      title: "Vecteurs, droites et plans dans l'espace",
      content: String.raw`
<div class="section"><div class="section-label">Produit scalaire dans l'espace</div>
<div class="theorem-box"><div class="label">Définition</div>
$$\vec{u}(x,y,z)\cdot\vec{v}(x',y',z') = xx'+yy'+zz'$$
$$\vec{u}\cdot\vec{v} = \|\vec{u}\|\,\|\vec{v}\|\cos(\vec{u},\vec{v})$$</div></div>
<div class="section"><div class="section-label">Orthogonalité</div>
<div class="theorem-box"><div class="label">Critères</div>
<div class="prose"><p>\(\vec{u} \perp \vec{v} \iff \vec{u}\cdot\vec{v}=0\).</p>
<p>Projeté orthogonal : \(H\) est le projeté de \(M\) sur une droite (ou un plan) si \(\overrightarrow{MH}\) est orthogonal à la droite (ou au plan).</p></div></div></div>
<div class="section"><div class="section-label">Équation cartésienne d'un plan</div>
<div class="theorem-box"><div class="label">Forme générale</div>
$$ax + by + cz + d = 0 \quad \text{avec } \vec{n}(a,b,c) \text{ vecteur normal}$$
<div class="prose"><p>Un plan est déterminé par un point et un vecteur normal, ou par deux vecteurs non colinéaires.</p></div></div></div>
`,
    },
    {
      chapter: "2.2 — Limites et continuité",
      title: "Fonction logarithme népérien",
      content: String.raw`
<div class="section"><div class="section-label">Définition</div>
<div class="theorem-box"><div class="label">Fonction ln</div>
<div class="prose"><p>La fonction <strong>logarithme népérien</strong> \(\ln\) est l'unique fonction dérivable sur \(]0;+\infty[\) telle que :</p></div>
$$\forall x>0,\ (\ln x)' = \frac{1}{x} \qquad \ln(1)=0$$
<div class="prose"><p>C'est la réciproque de la fonction exponentielle sur \(\mathbb{R}_+^*\).</p></div></div></div>
<div class="section"><div class="section-label">Propriétés algébriques</div>
<div class="theorem-box"><div class="label">À mémoriser</div>
$$\ln(ab)=\ln a + \ln b \qquad \ln\left(\frac{a}{b}\right)=\ln a - \ln b \qquad \ln(a^n)=n\ln a$$
$$\ln(e^x)=x \qquad e^{\ln x}=x \ (x>0)$$</div></div>
<div class="section"><div class="section-label">Limites de référence</div>
<div class="proof-box"><div class="label">BO Terminale</div>
$$\lim_{x\to 0^+} \ln x = -\infty \qquad \lim_{x\to +\infty} \ln x = +\infty$$
$$\lim_{x\to 0^+} x\ln x = 0 \qquad \lim_{x\to +\infty} \frac{\ln x}{x} = 0$$</div></div>
`,
    },
    {
      chapter: "2.3 — Dérivation / Convexité",
      title: "Convexité et point d'inflexion",
      content: String.raw`
<div class="section"><div class="section-label">Dérivée seconde</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>La dérivée seconde \(f''\) mesure la concavité de la courbe de \(f\).</p></div></div></div>
<div class="section"><div class="section-label">Convexité</div>
<div class="theorem-box"><div class="label">Critère (admis / démontré au programme)</div>
<div class="step"><div class="step-num">▸</div><div class="step-body">Si \(f''(x) \geq 0\) sur \(I\) : \(f\) est <strong>convexe</strong> sur \(I\) (courbe au-dessus de ses tangentes).</div></div>
<div class="step"><div class="step-num">▸</div><div class="step-body">Si \(f''(x) \leq 0\) sur \(I\) : \(f\) est <strong>concave</strong> sur \(I\).</div></div></div></div>
<div class="section"><div class="section-label">Point d'inflexion</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>Un point d'abscisse \(a\) est un <strong>point d'inflexion</strong> si \(f''\) s'annule en \(a\) en changeant de signe : la courbe traverse sa tangente.</p></div></div></div>
`,
    },
    {
      chapter: "2.6 — Primitives & Intégrales",
      title: "Primitives et calcul intégral",
      content: String.raw`
<div class="section"><div class="section-label">Primitive</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>\(F\) est une <strong>primitive</strong> de \(f\) sur \(I\) si \(F'(x)=f(x)\) pour tout \(x \in I\).</p>
<p>Toutes les primitives diffèrent d'une constante : si \(F\) primitive, alors \(F+C\) aussi.</p></div></div></div>
<div class="section"><div class="section-label">Primitives usuelles</div>
<div class="proof-box"><div class="label">Tableau</div>
<table style="width:100%;border-collapse:collapse;font-size:13px;color:#c9d1d9">
<tr><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(x^n\) (\(n\neq -1\))</td><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(\dfrac{x^{n+1}}{n+1}\)</td></tr>
<tr><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(\dfrac{1}{x}\)</td><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(\ln|x|\)</td></tr>
<tr><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(e^x\)</td><td style="padding:6px 10px;border-bottom:1px solid var(--border)">\(e^x\)</td></tr>
<tr><td style="padding:6px 10px">\(\cos x\)</td><td style="padding:6px 10px">\(\sin x\)</td></tr>
</table></div></div>
<div class="section"><div class="section-label">Intégrale et aire</div>
<div class="theorem-box"><div class="label">Théorème fondamental</div>
$$\int_a^b f(x)\,dx = F(b)-F(a) = [F(x)]_a^b$$
<div class="prose"><p>Si \(f \geq 0\), l'intégrale représente l'aire sous la courbe entre \(a\) et \(b\).</p></div></div></div>
`,
    },
    {
      chapter: "2.7 — Équations différentielles",
      title: "Équations différentielles du premier ordre",
      content: String.raw`
<div class="section"><div class="section-label">Équation y' = ay</div>
<div class="theorem-box"><div class="label">Solutions</div>
<div class="prose"><p>L'équation différentielle \(y'=ay\) (\(a \in \mathbb{R}\)) admet pour solutions :</p></div>
$$y(x) = ke^{ax} \quad k \in \mathbb{R}$$
<div class="prose"><p>La condition initiale \(y(0)=y_0\) donne \(k=y_0\), donc \(y(x)=y_0 e^{ax}\).</p></div></div></div>
<div class="section"><div class="section-label">Équation y' = ay + b</div>
<div class="theorem-box"><div class="label">Méthode</div>
<div class="step"><div class="step-num">1</div><div class="step-body">Solution particulière constante : \(y_p = -\dfrac{b}{a}\) si \(a \neq 0\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">Solutions générales : \(y(x) = ke^{ax} - \dfrac{b}{a}\).</div></div></div></div>
<div class="section"><div class="section-label">Modélisation</div>
<div class="note-box">📌 Exemples BO : refroidissement, charge/décharge de condensateur, croissance avec immigration constante.</div>
`,
    },
    {
      chapter: "2.4 — Limites et continuité",
      title: "Continuité et théorème des valeurs intermédiaires",
      content: String.raw`
<div class="section"><div class="section-label">Continuité en un point</div>
<div class="theorem-box"><div class="label">Définition</div>
<div class="prose"><p>\(f\) est <strong>continue en \(a\)</strong> si \(\displaystyle\lim_{x\to a} f(x) = f(a)\).</p>
<p>Intuitivement : la courbe ne « saute » pas en \(a\).</p></div></div></div>
<div class="section"><div class="section-label">TVI — Théorème des valeurs intermédiaires</div>
<div class="theorem-box"><div class="label">Énoncé</div>
<div class="prose"><p>Si \(f\) est continue sur \([a;b]\) et si \(k\) est compris entre \(f(a)\) et \(f(b)\), alors il existe \(c \in [a;b]\) tel que \(f(c)=k\).</p></div></div></div>
<div class="section"><div class="section-label">Application : existence de racine</div>
<div class="proof-box"><div class="label">Méthode</div>
<div class="step"><div class="step-num">1</div><div class="step-body">Montrer \(f\) continue sur \([a;b]\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">Vérifier \(f(a)\cdot f(b) < 0\) (signes opposés).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Conclure : il existe \(c\) tel que \(f(c)=0\) (racine).</div></div></div></div>
`,
    },
    {
      chapter: "2.5 — Fonction exponentielle (complément)",
      title: "Fonction exponentielle — propriétés complètes",
      content: String.raw`
<div class="section"><div class="section-label">Propriétés algébriques</div>
<div class="theorem-box"><div class="label">À maîtriser</div>
$$e^{a+b}=e^a\cdot e^b, \quad e^{-a}=\frac{1}{e^a}, \quad (e^a)^n=e^{na}$$
$$e^x > 0 \text{ pour tout } x, \quad e^0=1$$</div></div>
<div class="section"><div class="section-label">Limites</div>
<div class="theorem-box"><div class="label">Références BO</div>
$$\lim_{x\to+\infty} e^x = +\infty, \quad \lim_{x\to-\infty} e^x = 0$$
$$\lim_{x\to+\infty} \frac{e^x}{x^n} = +\infty \text{ (croissances comparées)}$$</div></div>
<div class="section"><div class="section-label">Équations et inéquations</div>
<div class="proof-box"><div class="label">Méthode</div>
<div class="prose"><p>La fonction exponentielle est <strong>strictement croissante</strong> sur \(\mathbb{R}\), donc :</p>
<p>\(e^a = e^b \Leftrightarrow a=b\)</p>
<p>\(e^a < e^b \Leftrightarrow a<b\)</p></div></div></div>
`,
    },
    {
      chapter: "3 — Probabilités (complément)",
      title: "Loi binomiale — espérance, variance, intervalle",
      content: String.raw`
<div class="section"><div class="section-label">Rappels</div>
<div class="theorem-box"><div class="label">Loi \(\mathcal{B}(n,p)\)</div>
$$P(X=k)=\binom{n}{k}p^k(1-p)^{n-k}, \quad k\in\{0,1,\ldots,n\}$$</div></div>
<div class="section"><div class="section-label">Espérance et variance</div>
<div class="theorem-box"><div class="label">Formules</div>
$$E(X)=np, \quad V(X)=np(1-p), \quad \sigma(X)=\sqrt{np(1-p)}$$</div></div>
<div class="section"><div class="section-label">Interprétation</div>
<div class="proof-box"><div class="label">Exemple</div>
<div class="prose"><p>100 lancers avec \(p=0{,}3\) : en moyenne \(E(X)=30\) succès. L'écart-type mesure la dispersion autour de cette moyenne.</p>
<p>L'inégalité de Bienaymé-Tchebychev (hors programme strict) illustre pourquoi la variance est utile ; au programme : calculer \(E(X)\) et interpréter.</p></div></div></div>
`,
    },
  ];

  window.DEMOS_PREMIERE_EXTRA = [
    {
      chapter: "Probabilités",
      title: "Formule de Bayes (cas simple)",
      content: String.raw`
<div class="section"><div class="section-label">Énoncé</div>
<div class="theorem-box"><div class="label">Proposition</div>
<div class="prose"><p>Si \(P(B)>0\), alors \(P(A|B) = \dfrac{P(B|A)\cdot P(A)}{P(B)}\) lorsque l'on connaît les probabilités conditionnelles dans l'autre sens.</p></div></div></div>
<div class="section"><div class="section-label">Démonstration</div>
<div class="proof-box"><div class="label">Preuve</div>
<div class="step"><div class="step-num">1</div><div class="step-body">Par définition : \(P(A|B)=\dfrac{P(A\cap B)}{P(B)}\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">Or \(P(A\cap B)=P(B|A)\cdot P(A)\) (formule composée).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Substitution : \(P(A|B)=\dfrac{P(B|A)P(A)}{P(B)}\). ■</div></div></div></div>
`,
    },
    {
      chapter: "Suites",
      title: "Somme des termes d'une suite géométrique",
      content: String.raw`
<div class="section"><div class="section-label">Énoncé</div>
<div class="theorem-box"><div class="label">Théorème</div>
<div class="prose"><p>Pour \(q \neq 1\) : \(\displaystyle S_n = 1+q+q^2+\cdots+q^n = \dfrac{1-q^{n+1}}{1-q}\).</p></div></div></div>
<div class="section"><div class="section-label">Démonstration</div>
<div class="proof-box"><div class="label">Preuve par multiplication</div>
<div class="step"><div class="step-num">1</div><div class="step-body">\(S_n = 1+q+\cdots+q^n\). Multiplier par \(q\) : \(qS_n = q+q^2+\cdots+q^{n+1}\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">\(S_n - qS_n = 1 - q^{n+1}\), donc \(S_n(1-q)=1-q^{n+1}\).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Si \(q\neq 1\) : \(S_n = \dfrac{1-q^{n+1}}{1-q}\). ■</div></div></div></div>
`,
    },
  ];

  window.DEMOS_TERMINALE_EXTRA = [
    {
      chapter: "2.6 — Intégrales",
      title: "Linéarité de l'intégrale",
      content: String.raw`
<div class="section"><div class="section-label">Énoncé</div>
<div class="theorem-box"><div class="label">Propriété</div>
<div class="prose"><p>Pour \(f,g\) continues sur \([a,b]\) et \(\lambda \in \mathbb{R}\) :</p></div>
$$\int_a^b (f+g) = \int_a^b f + \int_a^b g, \quad \int_a^b \lambda f = \lambda \int_a^b f$$</div></div>
<div class="section"><div class="section-label">Démonstration (idée)</div>
<div class="proof-box"><div class="label">Via primitives</div>
<div class="step"><div class="step-num">1</div><div class="step-body">Si \(F'=f\) et \(G'=g\), alors \((F+G)'=f+g\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">\(\int_a^b(f+g) = (F+G)(b)-(F+G)(a) = [F(b)-F(a)]+[G(b)-G(a)]\).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">C'est \(\int_a^b f + \int_a^b g\). Même raisonnement pour \(\lambda f\). ■</div></div></div></div>
`,
    },
    {
      chapter: "2.3 — Suites",
      title: "Théorème des gendarmes",
      content: String.raw`
<div class="section"><div class="section-label">Énoncé</div>
<div class="theorem-box"><div class="label">Théorème</div>
<div class="prose"><p>Si \(v_n \leq u_n \leq w_n\) à partir d'un rang et \(\lim v_n = \lim w_n = \ell\), alors \(\lim u_n = \ell\).</p></div></div></div>
<div class="section"><div class="section-label">Exemple d'utilisation</div>
<div class="proof-box"><div class="label">Montrer que \(u_n=\dfrac{\sin n}{n} \to 0\)</div>
<div class="step"><div class="step-num">1</div><div class="step-body">On a \(-1 \leq \sin n \leq 1\), donc \(-\dfrac{1}{n} \leq u_n \leq \dfrac{1}{n}\) pour \(n>0\).</div></div>
<div class="step"><div class="step-num">2</div><div class="step-body">\(\lim (-1/n) = \lim (1/n) = 0\).</div></div>
<div class="step"><div class="step-num">3</div><div class="step-body">Par encadrement : \(\lim u_n = 0\). ■</div></div></div></div>
`,
    },
  ];

  /** Titres à retirer (hors programme Seconde BO). */
  window.COURSES_SECONDE_REMOVE = [
    "Équations du second degré",
    "Inéquations du second degré",
  ];
})();
