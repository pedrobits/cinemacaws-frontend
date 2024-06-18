import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar";
import mockDetalhesFilmes from "../../scripts/mockDetalhesFilmes.js";
import Indicacao from "../../components/indicacaoLivre";
import { useEffect, useState } from "react";
import ChipGenres from "../../components/chipGenres"
import mockSessoesPorFilme from "../../scripts/mockSessoesPorID.js"
import Footer from "../../components/Footer/index.jsx";

const MoviePage = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);
    const [sessions, setSessions] = useState([]);

    useEffect(
        () => {
            window.scrollTo(0, 0);
            setFilme(mockDetalhesFilmes(id));
            setSessions(mockSessoesPorFilme(id));
        },
        []
    )

    if (!filme) {
        return (
            <div>
                <NavBar />
                <div>
                    <p>Filme não encontrado!</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <NavBar />
            <div
                className="flex flex-col h-full gap-10 relative bg-cover bg-center p-8 md:flex-row md:h-[40rem]"
                style={{
                    backgroundImage: `url(${filme.image})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-65 z-[1]"></div>
                <div className="flex-shrink-0 z-20 drop-shadow-md hover:drop-shadow-xl">
                    <img src={filme.poster} alt={filme.name} className="h-auto max-w-[300px]" />
                </div>
                <div className="flex flex-col gap-5 ml-8 z-20">
                    <h1 className="text-4xl font-bold text-white mb-8">{filme.name}</h1>
                    <p className="text-xl text-white text-justify italic">{filme.summary}</p>
                    <ChipGenres valor={filme.genre} />
                    <Indicacao
                        classification={filme.rating}
                        width="60px"
                        height="60px"
                        textSize="20px"
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MoviePage;
