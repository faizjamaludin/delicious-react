import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

function Recipe() {

    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');
    const params = useParams();

    // function to fetch data from api
    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
        console.log(detailData);

    };

    // use useEffect to run the process
    useEffect(() => {
        fetchDetails();
    }, [params.name])

    return (
        <DetailWrapper>
            {/* Left box starts here */}
            <LeftBox>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </LeftBox>

            {/* right box starts here */}
            <Info>
                <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
                <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
                {activeTab === 'instructions' && (
                    <div>
                        <h2>Summary</h2>
                        <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                        <h2>Instructions</h2>
                        <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
                    </div>
                )}
                {activeTab === 'ingredients' && (
                    <>
                        <h2>Ingredients</h2>
                        <ul>
                            {details.extendedIngredients.map((item) => (
                                <li key={item.id}>{item.original}</li>
                            ))}
                        </ul>
                    </>
                )}

            </Info>
        </DetailWrapper>
    )
}

const DetailWrapper = styled.div`
    margin-top: 10rem;
    margin-bottom: 5rem;
    display: flex;

    .active{
        background: linear-gradient(to right, #f27121, #e94057);
        color: white; 
    }
    p {
        font-size: 1rem;
        line-height: 2rem;
    }
    h2 {
        margin-bottom: 2rem;
        margin-top: 3rem;
    }
    li {
        font-size: 1rem;
        line-height: 2rem;
        margin-top: 1rem;
    }
    ul {
        margin-top: 2rem;
    }
`;

const Button = styled.button`
    padding: 1rem 2rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600; 
`

const Info = styled.div`
    margin-left: 5rem; 

    h3{
        font-size: 1rem;
        line-height: 1.5rem;
    }
`

const LeftBox = styled.div`
    width: 50%;

    img {
        border-radius: 1rem;
    }
`
export default Recipe