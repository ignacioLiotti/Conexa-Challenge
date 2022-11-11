import React, { FC } from 'react';
import CharacterSelector from './CharacterSelector';
import CharacterProfile from './CharacterProfile';
import Episodes from './Episodes/Episodes';
import styled from 'styled-components';
// import character data from https://rickandmortyapi.com/api REST API

const CharacterMain: FC = () => {

  const [firstCharacter, setFirstCharacter] = React.useState<object>({})
  const [secondCharacter, setSecondCharacter] = React.useState<object>({});


  return ( 
    <Wrapper>

      {firstCharacter.id && secondCharacter.id ? '' : <><h1>Wanna know if these character have meet? then...</h1>
      <h2>SELECT TWO CHARACTERS AND FIND OUT!</h2></> }

      <Selector>
        { firstCharacter.id ? <CharacterProfile character={firstCharacter} setCharacter={setFirstCharacter} />  : <CharacterSelector setCharacter={setFirstCharacter}/>}
        { secondCharacter.id ? <CharacterProfile character={secondCharacter} setCharacter={setSecondCharacter} /> : <CharacterSelector setCharacter={setSecondCharacter}/>}
      </Selector>
      {!firstCharacter.id || !secondCharacter.id ? '' : <Episodes firstChar={firstCharacter} secondChar={secondCharacter}/> }
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  color: #f5f5f5;
  padding: 20px;
  h1 {
    font-size: var(--font-base-lgmd);
    font-weight: 600;
  }
  h2 {
    font-size: var(--font-clamp-xllg);
    font-weight: 800;
  }

`;

const Selector = styled.div`
  display: flex;  
  justify-content: space-around;
  flex-direction: row; 
  /* flex-wrap: wrap; */
  gap: 45px;
  width: 100%;
  margin-top: 50px;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`; 

export default CharacterMain;