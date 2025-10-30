from analyse_ia import ClassifierAnalyse

texts = [
    "Un salère issue sur le chantier en passant devant qu'il ne sort pass.",
    "La victime a dit : 'Je travaillais en casier, en cecho et page'.",
    "Le charion a regarde puis les procèos s'avuánerient mal."
]

classifier = ClassifierAnalyse()
res = classifier.classify(texts)

for t, c in res.items():
    print(f'"Extrait: {t}" -> Class: {$c}')