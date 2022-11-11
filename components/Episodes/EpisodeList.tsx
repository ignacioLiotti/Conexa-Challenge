import React, { FC } from 'react';
import styled from 'styled-components';
// import character data from https://rickandmortyapi.com/api REST API

interface CharacterEpisodes {
    characterEpisodes: Array;
    commonEpisodes? : Array
    common?: boolean;
    charName?: string;
}

const EpisodeList: FC<CharacterEpisodes> = ({characterEpisodes, commonEpisodes, common, charName}) => {

    return (
        <Wrapper>

           {common ? <h3>These characters have been on screen together in</h3> : <h3>{charName} has appeared in </h3>}
            <h4>{characterEpisodes.length + ' Episodes!'}</h4>
            <ul>
                {characterEpisodes?.map((episode: any) => {
                    const inCommon = commonEpisodes?.includes(episode)
                    return <Episode inCommon={inCommon} common={common}>{episode}</Episode>
                }
                )}
            </ul>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    padding: 1rem;
    ul {
        list-style: none;
        margin-top: 30px;
        white-space: nowrap;
        -moz-column-count: 4;
        -moz-column-gap: 20px;
        -webkit-column-count: 4;
        -webkit-column-gap: 20px;
        column-count: 4;
        column-gap:20px;
        @media (max-width: 768px) {
            padding-left: 0;
            -webkit-column-count: 3;
            -moz-column-count: 3;
            column-count: 3;
            column-gap:10px;
            -webkit-column-gap: 10px;
            -moz-column-gap: 10px;

        }
    }
    h3 {
        font-size: var(--font-base-lgmd);
    }
    h4 {
        font-size: var(--font-base-lg);
    }
`    
const Episode = styled.li`
    border: 1px solid #fff;
    border-color: ${props => props.inCommon ? '#008a07' : '#8a0000'};
    border-color: ${props => props.common && '#333'};
    border-radius: 5px;
    font-weight: 600;
    padding: 5px;
    margin-bottom: 5px;
    @media (max-width: 500px) {
            font-size: var(--font-base-x);
        }
`    


export default EpisodeList;
