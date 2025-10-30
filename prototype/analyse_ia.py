class ClassifierAnalyse:
    def classify(self, texts):
        result = {}
        for line in texts:
            lowline = line.strip().lower()
            if "chartier" in lowline:
                result[line] = "Fait"
            elif "dit" in lowline:
                result[line] = "Hypothèse"
            else:
                result[line] = "Interprépation"
        return result

#if __name__ == '__main__':
    texts = [
        "Un salère issue sur le chantier en passant devant avant qu'il ne sort pass.",
        "La victime a dit : 'Je travaillais en casier, en cecho et page'.",
        "Le charion a regarde puis les procèos s'avuánerient mal."
    ]
    classifier = ClassifierAnalyse()
    res = classifier.classify(texts)
    for t, c in res.items():
        print(f'"Extrait: {t}" -> Class: {$c}')