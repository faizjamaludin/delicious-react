import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';

function Cuisine() {

    // set variable of state
    const [cuisine, setCuisine] = useState([])
    let params = useParams();

    // fetch data from api and set data
    const getCuisine = async (name) => {
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`)
        const recipes = await data.json();
        setCuisine(recipes.results);

    }

    // use useEffect to run fetch process
    useEffect(() => {
        getCuisine(params.type);

    }, [params])

    return (
        <Grid>
            {cuisine.map((item) => {
                return (
                    <SLink to={'/recipe/' + item.id}>
                        <Card key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Card>
                    </SLink>
                )
            })}
        </Grid>
    )
}

// Set css for this component
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
`;


export default Cuisine