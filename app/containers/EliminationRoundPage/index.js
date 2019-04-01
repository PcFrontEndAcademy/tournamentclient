/**
 *
 * EliminationRoundPage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectEliminationRoundPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import VersusCard from '../../components/VersusCard';
import { getEliminationRoundNumber } from '../../helpers/numberManagement';

/* eslint-disable react/prefer-stateless-function */
export class EliminationRoundPage extends React.Component {
  render() {
    const gridContainer = {
      // backgroundColor: 'white',
      height: '95vh',
      position: 'relative',
    };
    const participants = 8;
    // const groups = [0, 1];
    // const groupLetters = ['A', 'B'];

    const drawBracket = () => {
      let participantsLeft = [...Array(10).keys()];
      const branches = [];
      let counter = 0;
      // const currentGroupIndex = 0;
      for (
        let round = getEliminationRoundNumber(participants);
        round > 0;
        round -= 1
      ) {
        let cardCount = 2 ** round / 2;
        if (cardCount * 2 > participants) {
          cardCount = participants - 2 ** (round - 1);
        }

        const containerHeight = window.innerHeight * 0.95;
        const cardHeight = 98;
        const totalCardHeight = cardCount * cardHeight;
        const spacesCount = cardCount + 1;
        const spaceHeight = (containerHeight - totalCardHeight) / spacesCount;

        // const currentGroup = groups[currentGroupIndex];
        for (let card = 1; card <= cardCount; card += 1) {
          const currentMatch = branches.length + 1;

          let home;
          let away;
          if (participantsLeft.length !== 0) {
            home = `A ${participantsLeft}`;
            away = `B ${participants / 2}`;
            participantsLeft -= 2;
          } else {
            home = `Winner of ${participants / 2}`;
            away = `Winner of ${participants / 2}`;
          }

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
              <VersusCard away={away} home={home} matchNumber={currentMatch} />
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
}

EliminationRoundPage.propTypes = {};

const mapStateToProps = createStructuredSelector({
  eliminationRoundPage: makeSelectEliminationRoundPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'eliminationRoundPage', reducer });
const withSaga = injectSaga({ key: 'eliminationRoundPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(EliminationRoundPage);
