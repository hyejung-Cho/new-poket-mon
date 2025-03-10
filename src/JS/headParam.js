const initialState = {
    poketMonItem: '',
    searchValue: '',
    typeName: 'normal'
}

export const HEAD_PARAM = "HEADPARAM";
export const MON_PARAM = "MONPARAM";

export function headParam(state=initialState, action) {

    switch(action.type) {
        case HEAD_PARAM :
            return { ...state, typeName : state.typeName };
        case MON_PARAM:
            return { ...state, poketMonItem: state.poketMonItem, searchValue: state.searchValue };
        default : return state;
    }
}

export default headParam;