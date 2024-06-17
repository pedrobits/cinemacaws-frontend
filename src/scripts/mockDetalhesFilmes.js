const mockDetalhesFilmes = (id) => {
    const filmes = [
        {
            "_id": {
                "$oid": "6670336e4fbfd210a2997e53"
            },
            "name": "A Semente do Mal",
            "genre": "Terror",
            "rating": "16",
            "summary": "Ao lado de sua namorada, Edward decide desvendar os segredos a respeito de sua família biológica, com quem nunca teve contato. No entanto, o que parecia ser uma jornada de descobertas pelo Norte de Portugal rapidamente se transforma em um pesadelo indescritível. Edward logo percebe que os laços que o unem a sua família estão mergulhados em um segredo macabro, capaz de atormentar até mesmo os mais corajosos.",
            "poster": "https://image.tmdb.org/t/p/w500/2v3Yukqm3gAnhz2uPSzQjq6qojE.jpg",
            "image": "https://image.tmdb.org/t/p/original/eVPMCjjZ3kDRIYrTooNKwjZnUl.jpg"
        },
        {
            "_id": {
                "$oid": "667033b54fbfd210a2997e55"
            },
            "name": "Planeta dos Macacos: O Reinado",
            "genre": "Ação",
            "rating": "16",
            "summary": "Várias gerações no futuro, após o reinado de César, os macacos são agora a espécie dominante e vivem harmoniosamente, enquanto os humanos foram reduzidos a viver nas sombras. À medida que um novo líder símio tirânico constrói o seu império, um jovem macaco empreende uma jornada angustiante que o levará a questionar tudo o que sabia sobre o passado e a fazer escolhas que definirão um futuro tanto para os macacos como para os humanos.",
            "poster": "https://image.tmdb.org/t/p/w500/dzDK2TMXsxrolGVdZwNGcOlZqrF.jpg",
            "image": "https://image.tmdb.org/t/p/original/fqv8v6AycXKsivp1T5yKtLbGXce.jpg"
        },
        {
            "_id": {
                "$oid": "667033d64fbfd210a2997e57"
            },
            "name": "Retratos Fantasmas",
            "genre": "Documentário",
            "rating": "14",
            "summary": "Como em tantas cidades do mundo ao longo do século XX, milhões de pessoas foram ao cinema no centro do Recife. Com a passagem do tempo, as ruínas dos grandes cinemas revelam algumas verdades sobre a vida em sociedade.",
            "poster": "https://image.tmdb.org/t/p/w500/bmscUBnrI9KrwdxdmvpOYAo8dBp.jpg",
            "image": "https://image.tmdb.org/t/p/original/fz4wnEWbY3V137tlk9T1NbX1xkD.jpg"
        },
        {
            "_id": {
                "$oid": "667034154fbfd210a2997e59"
            },
            "name": "Mallandro - O Errado Que Deu Certo",
            "genre": "Comédia",
            "rating": "14",
            "summary": "Mallandro perde uma competição de reality show. Incapaz de se deixar abater, Mallandro tenta conseguir novos trabalhos, sempre recorrendo aos seus bordões inimitáveis: rá!,iéié e glu-glu.",
            "poster": "https://image.tmdb.org/t/p/w500/kfp2Rmsc5z0KZSBw8DdcwpgcvcM.jpg",
            "image": "https://image.tmdb.org/t/p/original/z8tvRmo7LvV8P5T9R2GhtUc4MVL.jpg"
        },
        {
            "_id": {
                "$oid": "6670342a4fbfd210a2997e5b"
            },
            "name": "Assassino por Acaso",
            "genre": "Comédia",
            "rating": "14",
            "summary": "Fingindo ser um assassino de aluguel para prender seus contratantes, o policial Gary Johnson quebra seus protocolos profissionais, assim se colocando em risco, ao salvar uma mulher de seu namorado abusivo.",
            "poster": "https://image.tmdb.org/t/p/w500/q3aYbKPczQrae0N142XHYXbWbT5.jpg",
            "image": "https://image.tmdb.org/t/p/original/nv6F6tz7r61DUhE7zgHwLJFcTYp.jpg"
        },
        {
            "_id": {
                "$oid": "6670344e4fbfd210a2997e5d"
            },
            "name": "Garfield - Fora de Casa",
            "genre": "Animação",
            "rating": "L",
            "summary": "Garfield, o mundialmente famoso gato de interior que odeia segundas-feiras e adora lasanha, está prestes a ter uma aventura selvagem ao ar livre! Depois de um reencontro inesperado com seu pai há muito perdido – o desalinhado gato de rua Vic – Garfield e seu amigo canino Odie são forçados a deixar sua vida perfeitamente mimada para se juntarem a Vic em um assalto hilariante e de alto risco.",
            "poster": "https://image.tmdb.org/t/p/w500/rC5RqXtFoTkBhNWE1dczwi4dZrX.jpg",
            "image": "https://image.tmdb.org/t/p/original/vWzJDjLPmycnQ42IppEjMpIhrhc.jpg"
        }
    ];

    const filmeEncontrado = filmes.find(filme => filme._id.$oid === id);
    return filmeEncontrado || null;
}

export default mockDetalhesFilmes;
