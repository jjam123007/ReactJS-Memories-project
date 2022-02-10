//accept state and action, action affects and change a new state 
export default (posts = [], action) =>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'FETCH_ALL':
            return posts;
        case 'FETCH_ALL':
            return posts;
        case 'FETCH_ALL':
            return posts;
        case 'FETCH_ALL':
            return posts;
        default:
            break;

    }
}