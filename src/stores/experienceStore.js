

const initialState = {
    experiences : [],
    products: [],
    features: []
}

function reducer( state = initialState, action) {

    switch(action.type) {
        case 'ADD_EXP' :
            const exp = action.payload.exp;
            const exp_timestamp = action.payload.timestamp;
            const newExp = [];
            newExp.push({ 'type': 'Experience', 'value': exp, 'timestamp': exp_timestamp});
            newExp.push(...state.experiences);
            return {
                ...state,
                experiences: newExp
            };

        case 'ADD_PROD' :
            const prod = action.payload.prod;
            const prod_timestamp = action.payload.timestamp;
            const newProd = [];
            newProd.push({ 'type': 'Product', 'value': prod, 'timestamp': prod_timestamp});
            newProd.push(...state.products);
            return {
                ...state,
                products: newProd
            };

        case 'ADD_FEAT' :
            const feat = action.payload.feat;
            const feat_timestamp = action.payload.timestamp;
            const newFeat = [];
            newFeat.push({ 'type': 'Feature', 'value': feat, 'timestamp': feat_timestamp});
            newFeat.push(...state.features);
            return {
                ...state,
                features: newFeat
            };

        default:
            return state;
    }
}

export default reducer;