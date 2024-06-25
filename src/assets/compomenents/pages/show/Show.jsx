import React, { useState, useEffect } from 'react';
import axios from 'axios';
import showPageStyles from './show.module.scss';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Show = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Funzione per formattare la data
    const formatDate = (dateString) => {
        return dateString.slice(0, 10);
    }

    // Chiamata per ottenere il dettaglio del post
    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${slug}`)
            .then(response => {
                setPost(response.data);
                setIsLoading(false);
            })
            .catch(error => {
                console.error('Qualcosa è andato storto', error);
                setIsLoading(false);
            });
    }, [slug]);

    if (isLoading) {
        return <div>Caricamento...</div>;
    }

    // Mi è servito per debbugare
    if (!post) {
        return <div>Post non trovato</div>;
    }

    return (
        <main >
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-4 mb-3">
                        <h1 className={showPageStyles.blu}>Il nostro post</h1>
                    </div>
                    <div className="col-6">
                        <figure >
                            <img src={post.image} alt={post.title} className={showPageStyles.image} />
                        </figure>
                    </div>
                    <div className="col-6 d-flex align-items-center">
                        <div className={showPageStyles.blu}>
                        <h3>{post.title}</h3>
                        <p className={showPageStyles.nero}>{post.content}</p>
                        <h5 className={showPageStyles.nero}><strong className={showPageStyles.blu}>Pubblicato il:</strong> {formatDate(post.createdAt)}</h5>
                        <h5 className={showPageStyles.nero}><strong className={showPageStyles.blu}>Ultima modifica il:</strong> {formatDate(post.updatedAt)}</h5>

                        </div>
                    </div>
                    <div className="col-12 text-center mt-5">
                        <button><h1><Link to={"http://localhost:5173/lista"}>Torna su tutti i post</Link></h1></button>
                    </div>
                </div>
            </div>

        </main>
    );
}

export default Show;
