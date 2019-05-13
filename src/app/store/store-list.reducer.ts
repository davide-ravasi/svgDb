import * as BoxListActions from './box-list.actions';
import { Box } from '../shared/box.model';
import { Tag } from '../shared/tag.model';

export const ADD_BOX = 'ADD_BOX';

export interface AppState {
    boxList: State;
}

export interface State {
    boxes: Box[];
}

const initialState = {
    boxes : [
        new Box(
            'Home',
            'http://simpleicon.com/wp-content/uploads/rocket.png',
            [
                new Tag('school'),
                new Tag('student')
            ]
        ),
        new Box(
            'graduate',
            'https://cdn.onlinewebfonts.com/svg/img_93271.png',
            [
                new Tag('works'),
                new Tag('university')
            ]
        )
    ];
    editedIngredient: null,
    editedIngredientIndex: -1
};

export function boxListReducer( state = initialState, action: ShoppingListActions.ShoppingListActions) {
    switch(action.type) {
        case boxListActions.ADD_BOX: 
            return {
                ...state
            };
        default:
            return state;
    }
}