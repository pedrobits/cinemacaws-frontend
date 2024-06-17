import { useParams } from "react-router-dom";
import NavBar from "../../components/navBar";
import mockDetalhesFilmes from "../../scripts/mockDetalhesFilmes.js";
import Indicacao from "../../components/indicacaoLivre";
import { useEffect, useState } from "react";
import ChipGenres from "../../components/chipGenres"

const MoviePage = () => {
    const { id } = useParams();
    const [filme, setFilme] = useState(null);

    useEffect(
        () => {
            window.scrollTo(0, 0);
            setFilme(mockDetalhesFilmes(id));
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
                className="relative bg-cover bg-center flex p-8 h-[40rem]"
                style={{
                    backgroundImage: `url(${filme.image})`,
                }}
            >
                <div className="absolute inset-0 bg-black opacity-55 z-[1]"></div>
                <div className="flex-shrink-0 z-20 drop-shadow-md hover:drop-shadow-xl">
                    <img src={filme.poster} alt={filme.name} className="h-auto max-w-[300px]" />
                </div>
                <div className="flex flex-col gap-5 ml-8 z-20">
                    <h1 className="text-4xl font-bold text-white mb-8">{filme.name}</h1>
                    <p className="text-xl text-white text-justify italic">{filme.summary}</p>
                    <ChipGenres valor={filme.genre}/>
                    <Indicacao
                        classification={filme.rating}
                        width="60px"
                        height="60px"
                        textSize="20px"
                    />
                </div>
            </div>
        </div>
    );
};

export default MoviePage;
