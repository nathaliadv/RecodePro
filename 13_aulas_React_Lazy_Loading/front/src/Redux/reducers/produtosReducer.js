import produtos from '../../produtos';

const initialState = [...produtos];

export default (state = initialState, action) => {
    return state;
}