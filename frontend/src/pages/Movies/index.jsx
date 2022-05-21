import { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "../../adapters";
import { Container, Item, WindowContainer } from "./styles";

export default function Movies () {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const promise = Axios.get('/movie')
        promise.then(({data}) => {
            setMovies(data)
        })
    },[]);

    return (
        <Container>
            <ul>
                {movies.map((movie) => {
                    
                    return (
                        <MovieCard
                            title={movie.title}
                            description={movie.description}
                            video={movie.video}/>
                    )
                })}
            </ul>
        </Container>
    );
}

function MovieCard ({title, description, video}) {
    const [enabled, setEnabled] = useState(false);
    return (
        <>
            {enabled && <MovieWindow
                            title = {title}
                            description={description}
                            video={video}
                            setEnabled={setEnabled}/>}
            <Item onClick={ () => setEnabled(true)}>
                Video
                <h4>{title}</h4>
                <p>{description}</p>
            </Item>
        </>
    )

}

function MovieWindow ({title,description,video,setEnabled}) {
    return (
        <WindowContainer onClick={ () => setEnabled(false) }>
            <div>
                <iframe src={video} frameBorder="0"></iframe>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </WindowContainer>
    );
}