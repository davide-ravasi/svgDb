import { Action } from '@ngrx/store';
import { Box } from '../shared/box.model';
import { Tag } from '../shared/tag.model';

export const ADD_BOX = 'ADD_BOX';


export class AddBox implements Action {
    readonly type = ADD_BOX;

    constructor(public payload: Box) {}
}

export type BoxListActions = AddBox;