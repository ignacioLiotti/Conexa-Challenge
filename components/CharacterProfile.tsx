import { type } from 'os';
import React, { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';
// import character data from https://rickandmortyapi.com/api REST API

interface CharacterProps {
    character: object;
    setCharacter: Function;
}

const CharacterProfie: FC<CharacterProps> = ({character, setCharacter}) => {

    const handleSetCharacter = () => {
        setCharacter({})
    }

    const [coordX, setX] = React.useState(0)
    const [coordY, setY] = React.useState(0)

    const handleEvent = (event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - ( bounds.left + bounds.width/2 ); 
        const y = event.clientY - ( bounds.top + bounds.height/2 );
        setX(x)
        setY(y)
    }

  return (
    <Wrapper>
      <Card 
        onMouseMove={handleEvent}
        style={{'--x': `${coordX}`, '--y': `${coordY}`, '--t': 25}}
      >
        <Header>
            <h1>{character.name}</h1>
            <p>Species: {character.species}</p>
        </Header>
        <img src={character.image} alt="" />
        <Stats>
            <Data>Gender: <span>{character.gender}</span></Data>
            <Data>Status: <span>{character.status}</span></Data>
            {character.type ? <Data>Subspecies: <span>${character.type}</span> </Data> : '' }
            <Data>Origin: <span> {character.origin?.name}</span></Data>
            <Data>Last seen at:  <span>{character.location?.name}</span></Data>
        </Stats>
      </Card>
        <Button onClick={handleSetCharacter}>SELECT ANOTHER CHARACTER</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
`

const Card = styled.div`
  display: flex; 
  flex-direction: column; 
  justify-content: space-around;
  align-items: flex-start; 
  background-color: #000;
  overflow: hidden;
  width: 450px;
  height: 700px;
  border-radius: 25px;
  border: 1px solid #333;
  padding: 20px;
  transition: transform .25s cubic-bezier(.34,1.85,.66,1),-webkit-transform .25s cubic-bezier(.34,1.85,.66,1);
  &:hover {
    transform: scale(1.15) translate3d(calc(var(--x)/var(--t) * 1px), calc(var(--y)/var(--t) * 1px), 2rem) rotateX(calc(var(--y)/var(--t) * -1deg)) rotateY(calc(var(--x)/var(--t) * 1deg));
    }
  &:after{
    content: "";

    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    opacity: 0;
    background: #fff;
    border-radius: 100%;
    filter: blur(100px);

    width: 150px;
    height: 150px;
    margin: auto;
    /* padding-bottom: 50%; */
    
    z-index: 1;
    pointer-events: none;
    transform: translateZ(0);
    transform-style: preserve-3d;
    will-change: transform,opacity;
}

  &:hover:after{
    opacity: 0.5;
    transform: translate(calc(var(--x) * 1px), calc(var(--y) * 1px));
    }
  img{
    width: 100%;
    border-radius: 8px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`; 

const Data = styled.p`
    color: #cecece;
    span {
        color: #fff;
        font-size: var(--font-base-mdsm);
        font-weight: 600;
    }
`

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `

const Stats = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    p{
        color: #fff;
    }
`

const Separator = styled.div`
  content: 'asdasd';
  width: 10px;
  height: 100%;
  background-color: black;
`;	


export default CharacterProfie;