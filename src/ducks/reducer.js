const initialState = {
    user: {
        username: '',
        password: '',
        profile_pic:'',
        id: 0
    }
}


const GET_USER = 'GET_USER'
// id,profile_pic,username
export function getUser(obj){
    // console.log('getuser:',obj)
    return {
        type: GET_USER,
        payload: obj
    }
}

export default function reducer(state = initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_USER:
            return {...state, user: payload}        
        default: 
            return state;
    }
}