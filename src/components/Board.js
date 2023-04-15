import React from 'react';
import Square from './Square';

const Board = (props) => {
    const { game, move } = props;
    return (
        <div className = 'board'>
            { game.map((el, i) => <Square value = { el } move = { move } index={i}/>) }
        </div>
    );
};

export default Board;