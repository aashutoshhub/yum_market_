import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,

    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL,

    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,

    UPDATE_PROFILE_REQUEST,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_PROFILE_RESET,
    UPDATE_PROFILE_FAIL,

    UPDATE_PASSWORD_REQUEST,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_RESET,
    UPDATE_PASSWORD_FAIL,


    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAIL,

    RESET_PASSWORD_REQUEST,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_FAIL,

    GET_USERS_REQUEST,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_RESET,

    DELETE_USER_REQUEST,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAIL,
    DELETE_USER_RESET,

    USER_DETAILS_REQUEST,
    USER_DETAILS_SUCCESS,
    USER_DETAILS_FAIL,


    LOGOUT_SUCCESS,
    LOGOUT_FAIL,

    CLEAR_ERRORS
} from '../constants/UserConstant';

export const userReducer=(state={user:{}} ,action)=>{

    switch (action.type){
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case LOAD_USER_REQUEST:
            return {
                loading:true,
                isAuthenticated:false,
            };
        
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
        case LOAD_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                isAuthenticated:true,
                user:action.payload,
            };
        
        case LOGOUT_SUCCESS:
            return {
                loading:false,
                isAuthenticated:false
            }


        case REGISTER_FAIL:
        case LOGIN_FAIL:
            return{
                ...state,
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload,
            }
        //loading fail 
        case LOAD_USER_FAIL:
            return{
                loading:false,
                isAuthenticated:false,
                user:null,
                error:action.payload,
            }
        
        case LOGOUT_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }
        


        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}


export const profileReducer=(state={user:{}} ,action)=>{

    switch (action.type){
       
        case UPDATE_PROFILE_REQUEST:
        case UPDATE_PASSWORD_REQUEST:
            return {
                ...state,
                loading:true,
            };
        
        case UPDATE_PROFILE_SUCCESS:
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading:false,
                isUpdated:action.payload,
            };
        
        case UPDATE_PROFILE_RESET:
        case UPDATE_PASSWORD_RESET:
            return {
                ...state,
                isUpdated:false,
            }

        case UPDATE_PROFILE_FAIL:
        case UPDATE_PASSWORD_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}




export const forgotPasswordReducer=(state={user:{}} ,action)=>{

    switch (action.type){
       
        
        case FORGOT_PASSWORD_REQUEST:
        case RESET_PASSWORD_REQUEST:
            return {
                ...state,
                loading:true,
                error:null,
            };
     
        case FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                loading:false,
                message:action.payload,
            };
        
        case RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                loading:false,
                success:action.payload,
            };
        
        case FORGOT_PASSWORD_FAIL:
        case RESET_PASSWORD_FAIL:
            return{
                ...state,
                loading:false,
                error:action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}

//get all users reducer //admin
export const getAllUsersReducer=(state={users:{}} ,action)=>{

    switch (action.type){
        case GET_USERS_REQUEST:
            return {
                loading:true,
                ...state,
            };
        
        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading:false,
                users:action.payload,
            };

        case GET_USERS_FAIL:
            return {
                loading:false,
                ...state,
                users:null,
                error:action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}


//update and delete user //admin
export const updateUserReducer=(state={} ,action)=>{
    switch (action.type){
        case UPDATE_USER_REQUEST:
        case DELETE_USER_REQUEST:
            return {
                loading:true,
                ...state,
            };
        
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                loading:false,
                isUpdated:action.payload.success,
            }

        case DELETE_USER_SUCCESS:
            return {
                    ...state,
                    loading:false,
                    isDeleted:action.payload.success,
                    message:action.payload.message,
            }
        
        case DELETE_USER_RESET:
            return {
                ...state,
                loading:false,
                isDeleted:false
            }

        case UPDATE_USER_RESET:
            return {
                ...state,
                loading:false,
                isUpdated:false,
            }

        case UPDATE_USER_FAIL:
            return {
                ...state,
                loading:false,
                isUpdated:false,
            }

        case DELETE_USER_FAIL:
            return {
                ...state,
                loading:false,
                isDeleted:false,
            }
        
        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}

// get user details reducer //admin
export const getUserDetailsReducer=(state={user:{}} ,action)=>{

    switch (action.type){
        case USER_DETAILS_REQUEST:
            return {
                loading:true,
                ...state,
            };
        
        case USER_DETAILS_SUCCESS:
            return {
                ...state,
                loading:false,
                user:action.payload,
            };

        case USER_DETAILS_FAIL:
            return{
                ...state,
                loading:false,
                user:null,
                error:action.payload,
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error:null,
            }

        default:
           return state;
            
    }
}

