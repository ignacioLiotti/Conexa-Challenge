import React, { FC } from 'react';
import EpisodeList from './EpisodeList';
import styled from 'styled-components';
// import character data from https://rickandmortyapi.com/api REST API

interface CharacterEpisodes {
    firstChar: Array;
    secondChar: Array;
}

const Episodes: FC<CharacterEpisodes> = ({firstChar,secondChar}) => {

  const filterEpisodes = (episodes: Array) => {
    const cleanpisodes = episodes?.map((episode: any) => {
      return 'Episode ' + episode.split('/').pop();
    })
    return cleanpisodes;
  }

  const episodesInCommon = (firstChar: any, secondChar: any) => {
    const episodesInCommon = firstChar?.filter((episode: any) => secondChar?.includes(episode));
      return episodesInCommon;
    }
    
    const filteredFirst = filterEpisodes(firstChar.episode);
    const filteredSecond = filterEpisodes(secondChar.episode);
  
    const commonEpisodes = episodesInCommon(filteredFirst, filteredSecond);
  

  return ( 
    <Wrapper>
        <FirstCharEpisodes>
          {firstChar && secondChar ? <EpisodeList characterEpisodes={filteredFirst} commonEpisodes={commonEpisodes} charName={firstChar.name}/> : <h3>First Character</h3>}
        </FirstCharEpisodes>

        <CommonEpisodes>

          {firstChar && secondChar ? <EpisodeList characterEpisodes={commonEpisodes} common /> : <h3>Common Episodes</h3>}
            
        </CommonEpisodes>

        <SecondCharEpisodes>

          {firstChar && secondChar ? <EpisodeList characterEpisodes={filteredSecond} commonEpisodes={commonEpisodes} charName={secondChar.name}/> : <h3>Second Character</h3>}

        </SecondCharEpisodes>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;  
  justify-content: space-around;
  flex-direction: row; 
  gap: 45px;
  width: 100%;
  margin-top: 50px;
  color: #fff;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
`;

const EpisodesWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
`

const FirstCharEpisodes = styled(EpisodesWrapper)`
    background-color: hsl(0, 0%, 3.4%);
    color: #f5f5f5;
`

const CommonEpisodes = styled(EpisodesWrapper)`
    background-color: #000;
    color: #f5f5f5;
`

const SecondCharEpisodes = styled(EpisodesWrapper)`
    background-color: hsl(0, 0%, 3.4%);
    color: #f5f5f5;
`


export default Episodes;