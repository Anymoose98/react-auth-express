import React, { useState, useEffect } from 'react';
import axios from 'axios';
import indexStyles from './index.module.scss';
import { Link } from "react-router-dom";

const Index = () => {
    const [posts, setPosts] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Funzione per formattare la data
    const formatDate = (dateString) => {
        return dateString.slice(0, 10);
    }

    // Chiamata per avere i posts
    useEffect(() => {
        axios.get('http://localhost:3000/posts')
            .then(response => {
                setPosts(response.data.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Qualcosa è andato storto', error);
                setIsLoading(false);
            });
    }, []);

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center my-5">
                        <h1 className={indexStyles.blu}><strong>I nostri post</strong></h1>
                    </div>
                    {isLoading ? (
                        <div className="col-12 text-center">
                            <h1>Caricamento in corso...</h1>
                        </div>
                    ) : (
                        posts.map((post, index) => (
                            <div key={index} className="col-12 col-md-6 text-center my-3">
                                <div className="">
                                    <h2>{post.title}</h2>
                                    <figure>
                                        <img src={post.image} alt={post.title} className={indexStyles.image} />
                                    </figure>
                                    <p><strong>Creato il:</strong> {formatDate(post.createdAt)}</p>
                                    <button><h4><Link to={`http://localhost:5173/lista/${post.slug}`}>Scopri il post</Link></h4></button>
                                </div>

                            </div>
                        ))
                    )}
                    <div className="col-12 text-center my-5">
                        <button className={indexStyles.bottone}><h1><Link to={"http://localhost:5173/"}>Torna alla pagina iniziale</Link></h1></button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Index;
