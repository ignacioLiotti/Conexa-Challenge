import React, { FC } from 'react';
import Image from 'next/image';
import Button from './Button';
import styled from 'styled-components';

interface CharacterProps {
  setCharacter: Function;
}

const CharacterSelector: FC<CharacterProps> = ({setCharacter}) => {
 
    const [characterPage, setCharacterPage] = React.useState([1,2,3,4,5,6]);
    const [characterData, setCharacterData] = React.useState<Array<any>>([])

    async function getCharacterData(url:string) {
        const response = await fetch(url)
        const data = await response.json()
        return data
    }
    
    const handleNextPage = () => {
        setCharacterPage(prev=> prev.map((char)=> char + 6))
    }
    const handlePreviousPage = () => {
        setCharacterPage(prev=> prev.map((char)=> char - 6))
    } 
    const handleSetCharacter = (character: any) => {
        setCharacter(character)
    }

     
    // react useState with array of objects 


    React.useEffect(() => {
        getCharacterData('https://rickandmortyapi.com/api/character/' + characterPage.toString()).then((data) => {
            setCharacterData(data)
        })
    }, [characterPage])

  return (
    <Wrapper>
        <CharacterSelectorWrapper>
            {characterData?.map((character:any) => (
                <CharacterCard key={character.id} onClick={()=>handleSetCharacter(character)} tabindex={0}>
                    <img src={character.image} alt="" />
                    <CharInfo status={character.status}>
                        <h1>{character.name}</h1>
                        <p>{character.status} - {character.species}</p>
                    </CharInfo>
                </CharacterCard>
            ))}
        </CharacterSelectorWrapper>

        <ButtonWrapper>
            {characterPage[0]!==1 ? <Button onClick={handlePreviousPage}>PREVIOUS</Button> : ''}
            <Button onClick={handleNextPage}>NEXT</Button>
        </ButtonWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    max-width: 49%;
    flex-grow: 1;
    height: 100%;
    
    @media (max-width: 768px) {
        max-width: 100%;
    }
    `

const CharacterSelectorWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    width: 100%;
    height: 100%;
    transition: all 0.2s ease-in-out;
    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
    }
    `
const CharacterCard = styled.div`
    display: flex;
    height: 150px;
    width: 100%;
    border: 1px solid #333;
    overflow : hidden;
    background: black;
    border-radius: 8px;
    transition: all 0.2s ease-in-out;
    img {
        width: 150px;
    }
    &:hover, &:focus {
        cursor: pointer;
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
    }
`
const CharInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 8px;
    padding-left: 16px;
    gap: 8px;
    p::before {
        content: '';
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: ${props => props.status === 'Alive' ? '#00ff80' : props.status === 'Dead' ? '#ff0000' : '#ffcc00'};
        margin-right: 8px;
    }

`

const ButtonWrapper = styled.div`
    display: flex;
    align-self: flex-end;
    justify-content: space-between;
    margin-top: 16px;
    gap: 16px;
`

export default CharacterSelector;