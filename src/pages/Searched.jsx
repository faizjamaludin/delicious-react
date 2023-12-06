import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';

function Searched() {

    const [searchRecipe, setSearchRecipe] = useState([]);
    const params = useParams();

    // fetch data from api. also use params for query
    const getSearched = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`)
        const recipes = await data.json();
        setSearchRecipe(recipes.results);

    }

    // get search function and pass params to function
    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <Grid>
            {searchRecipe.map((item) => {
                return (
                    <SLink to={'/recipe/' + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    </SLink>
                );
            })}
        </Grid>
    );
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
`

const Card = styled.div`
    img {
        width: 100%;
        border-radius: 2rem;
    }

    a {
        text-decoration: none;
    }
    
    h4 {
        text-align: center;
        padding: 1rem;
    }
`;


const SLink = styled(Link)`
    text-decoration: none;
`


export default Searched