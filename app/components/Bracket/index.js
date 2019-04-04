/**
 *
 * Bracket
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import VersusCard from '../VersusCard';
import { getEliminationRoundNumber } from '../../helpers/numberManagement';

function Bracket(props) {
  const gridContainer = {
    // backgroundColor: 'white',
    height: `${props.height}vh`,
    position: 'relative',
  };

  const { participantsNumber, games, gameNumberModifier } = props;
  // const groups = [0, 1];
  // const groupLetters = ['A', 'B'];

  const drawBracket = () => {
    // const participantsLeft = [...Array(participantsNumber).keys()];
    const branches = [];
    let counter = 0;
    // const currentGroupIndex = 0;
    for (
      let round = getEliminationRoundNumber(participantsNumber);
      round > 0;
      round -= 1
    ) {
      let cardCount = 2 ** round / 2;
      if (cardCount * 2 > participantsNumber) {
        cardCount = participantsNumber - 2 ** (round - 1);
      }

      const containerHeight = (window.innerHeight * props.height) / 100;
      const cardHeight = 98;
      const totalCardHeight = cardCount * cardHeight;
      const spacesCount = cardCount + 1;
      const spaceHeight = (containerHeight - totalCardHeight) / spacesCount;

      // const currentGroup = groups[currentGroupIndex];
      for (let card = 1; card <= cardCount; card += 1) {
        const currentMatch = branches.length + 1;

        const { home } = games[currentMatch - 1];
        const { away } = games[currentMatch - 1];
        // if (participantsLeft.length !== 0) {
        //   home = `A ${participantsLeft}`;
        //   away = `B ${participantsNumber / 2}`;
        //   participantsLeft -= 2;
        // } else {
        //   home = `Winner of ${participantsNumber / 2}`;
        //   away = `Winner of ${participantsNumber / 2}`;
        // }

        branches.push(
          <div
            key={`${round} ${card}`}
            style={{
              position: 'absolute',
              top: spaceHeight * card + cardHeight * (card - 1),
              left: 250 * counter,
              height: '66px',
            }}
          >
            <VersusCard
              away={away}
              home={home}
              matchNumber={currentMatch + gameNumberModifier}
            />
          </div>,
        );
      }
      counter += 1;
    }
    return branches;
  };

  return (
    <div>
      {/* <h1>Elimination Round</h1> */}
      <div style={gridContainer}>{drawBracket()}</div>
    </div>
  );
}

Bracket.defaultProps = {
  height: 95,
  gameNumberModifier: 0,
};

Bracket.propTypes = {
  participantsNumber: PropTypes.number.isRequired,
  games: PropTypes.array,
  height: PropTypes.number,
  gameNumberModifier: PropTypes.number,
};

export default Bracket;
