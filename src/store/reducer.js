const SET_VALUE = 'SET-VALUE';
const START_GAME = 'START-GAME';

export const setValueActionCreator = (value, idxArr) => {
    return {
        type: SET_VALUE,
        value,
        idxArr
    }
}
export const startGameActionCreator = () => ({ type: START_GAME });

const data = {
    chooseMatrix() {
        return Math.floor(Math.random() * this.dataMatrix.length)
    },
    dataMatrix: [
        [
            [
                [9, 1, 6, 3, 5, 4, 8, 7, 2],
                [8, 7, 3, 6, 2, 9, 1, 5, 4],
                [5, 2, 4, 7, 1, 8, 9, 3, 6],
                [7, 6, 8, 9, 3, 5, 2, 4, 1],
                [1, 4, 9, 2, 8, 7, 3, 6, 5],
                [2, 3, 5, 4, 6, 1, 7, 9, 8],
                [6, 9, 7, 8, 4, 2, 5, 1, 3],
                [3, 8, 1, 5, 7, 6, 4, 2, 9],
                [4, 5, 2, 1, 9, 3, 6, 8, 7],
            ],
            [
                [9, 1, 6, 0, 0, 4, 0, 7, 2],
                [8, 0, 0, 6, 2, 0, 0, 5, 0],
                [5, 0, 0, 0, 0, 8, 9, 3, 0],
                [0, 6, 0, 0, 0, 0, 2, 0, 0],
                [0, 0, 0, 2, 0, 7, 0, 0, 0],
                [0, 0, 5, 0, 0, 0, 0, 9, 0],
                [0, 9, 7, 8, 0, 0, 0, 0, 3],
                [0, 8, 0, 0, 7, 6, 0, 0, 9],
                [4, 5, 0, 1, 0, 0, 6, 8, 7],
            ],
        ],
        [
            [
                [9, 4, 5, 2, 7, 1, 8, 3, 6],
                [8, 1, 6, 3, 9, 5, 4, 2, 7],
                [7, 3, 2, 6, 8, 4, 5, 1, 9],
                [2, 5, 8, 4, 6, 7, 3, 9, 1],
                [6, 9, 4, 1, 3, 8, 7, 5, 2],
                [3, 7, 1, 5, 2, 9, 6, 4, 8],
                [4, 6, 7, 9, 5, 2, 1, 8, 3],
                [1, 2, 3, 8, 4, 6, 9, 7, 5],
                [5, 8, 9, 7, 1, 3, 2, 6, 4],
            ],
            [
                [0, 0, 5, 0, 0, 0, 8, 0, 0],
                [8, 1, 6, 0, 0, 5, 4, 2, 7],
                [7, 0, 2, 6, 0, 0, 0, 1, 9],
                [2, 0, 0, 0, 0, 7, 3, 0, 1],
                [6, 9, 0, 1, 0, 8, 7, 0, 0],
                [3, 7, 1, 5, 0, 0, 0, 4, 0],
                [0, 6, 0, 9, 0, 2, 0, 0, 0],
                [1, 0, 3, 0, 4, 0, 9, 7, 0],
                [5, 8, 0, 7, 0, 0, 2, 6, 4],
            ],
        ],
        [
            [
                [4, 1, 5, 3, 7, 8, 2, 9, 6],
                [2, 3, 7, 1, 6, 9, 4, 8, 5],
                [6, 8, 9, 4, 2, 5, 7, 3, 1],
                [8, 9, 3, 7, 5, 1, 6, 2, 4],
                [5, 7, 4, 2, 3, 6, 9, 1, 8],
                [1, 6, 2, 9, 8, 4, 3, 5, 7],
                [9, 2, 8, 6, 1, 7, 5, 4, 3],
                [7, 4, 1, 5, 9, 3, 8, 6, 2],
                [3, 5, 6, 8, 4, 2, 1, 7, 9],
            ],
            [
                [4, 0, 0, 3, 0, 8, 0, 0, 6],
                [2, 3, 0, 0, 6, 0, 4, 0, 0],
                [0, 0, 9, 4, 0, 0, 7, 0, 0],
                [8, 9, 0, 7, 0, 0, 0, 0, 0],
                [5, 0, 0, 0, 0, 0, 9, 1, 0],
                [0, 6, 0, 0, 0, 0, 0, 0, 7],
                [0, 0, 8, 0, 1, 0, 0, 4, 3],
                [0, 4, 1, 0, 0, 0, 0, 6, 0],
                [0, 0, 0, 8, 0, 2, 0, 7, 0],
            ],
        ],
        [
            [
                [7, 9, 2, 1, 5, 4, 3, 8, 6],
                [6, 4, 3, 8, 2, 7, 1, 5, 9],
                [8, 5, 1, 3, 9, 6, 7, 2, 4],
                [2, 6, 5, 9, 7, 3, 8, 4, 1],
                [4, 8, 9, 5, 6, 1, 2, 7, 3],
                [3, 1, 7, 4, 8, 2, 9, 6, 5],
                [0, 0, 0, 7, 4, 0, 5, 0, 0],
                [9, 0, 0, 2, 0, 5, 6, 0, 0],
                [5, 2, 0, 0, 3, 0, 0, 0, 7],
            ],
            [
                [0, 9, 2, 0, 5, 0, 3, 0, 0],
                [0, 4, 3, 0, 2, 0, 1, 0, 0],
                [0, 5, 0, 3, 9, 0, 0, 2, 4],
                [2, 6, 5, 0, 0, 3, 8, 0, 0],
                [4, 0, 0, 0, 0, 1, 0, 0, 3],
                [0, 0, 7, 4, 0, 2, 0, 0, 0],
                [0, 0, 0, 7, 4, 0, 5, 0, 0],
                [9, 0, 0, 2, 0, 5, 6, 0, 0],
                [5, 2, 0, 0, 3, 0, 0, 0, 7],
            ],
        ],
    ]
}

const getInitialState = (data) => {
    const randomData = data.chooseMatrix();
    return {
        matrix: {
            start: JSON.parse(JSON.stringify(data.dataMatrix[randomData][1])),
            end: data.dataMatrix[randomData][0],
        },
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        errors: 0,
    }
}

const reducer = (state = getInitialState(data), action = { type: "START-GAME" }) => {
    switch (action.type) {
        case "SET-VALUE":
            const newState = {
                ...state,
                matrix: {
                    ...state.matrix,
                    start: [...state.matrix.start],
                }
            }
            let value = +action.value;
            if (state.matrix.start[action.idxArr[0]][action.idxArr[1]] === 0) {
                if (state.matrix.end[action.idxArr[0]][action.idxArr[1]] === value) {
                    newState.matrix.start[action.idxArr[0]][action.idxArr[1]] = value;
                } else {
                    newState.errors++;
                }
            }
            return newState
        case "START-GAME":
            return getInitialState(data);
    }
    return state;
}

export default reducer