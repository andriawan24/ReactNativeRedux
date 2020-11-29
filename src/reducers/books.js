import showToast from '../components/Toast';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'add_books': {
            let itemIndex = state.findIndex((item) => action.payload.url === item.url);
            if (itemIndex > -1) {
                showToast("This book is already in your library");
                let stateClone = [...state];
                let removedItems = stateClone.splice(itemIndex, 1);
                stateClone.unshift(...removedItems);
                return stateClone;
            }

            return [action.payload, ...state];
        }
        case 'add_metadata': {
            let {data, index} = action.payload;
            let stateCopy = [...state];
            stateCopy[index] = {...stateCopy[index], ...date};
            return;
        }
    }
}