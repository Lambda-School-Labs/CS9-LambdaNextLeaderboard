import {
    LOGIN_ACTION,
    CREATE_USER,
    UPDATE_USER,
    ADD_CLASS,
    ADD_STUDENT,
    GET_CLASS_STUDENTS,
    ERRORS
} from "../actions/";

const initialStater = {
    // students: null,
    error: null,
    // expiration: null,
    updateCheck: false,
    // class: null,
    registered_user: null,
    user_logged_in: null,
    created_class: null,
    added_student: null,
    classlist_students: null
};

const studentReducer = (state = initialStater, action) => {
    switch (action.type) {
        case CREATE_USER:
            return Object.assign({}, state, {
                registered_user: {
                    username: action.username,
                    ID: action.user_id
                },
                updateCheck: true
            });
        case LOGIN_ACTION:
            return Object.assign({}, state, {
                user_logged_in: {
                    ...state.user,
                    token: action.payload,
                    username: action.username
                },
                // expiration: action.expiration
                error: {}
            });
        case ERRORS:
            return Object.assign({}, state, {
                error: action.payload
            });
        // case ADD_CLASS:
        //     return Object.assign({}, state, {
        //         students: {...state.user, username: action.user},
        //         class: action.class_name
        //     });
        //When we fetch data, we need to set updateCheck to False
        //It should be set on the first get request, after the login.
        case ADD_CLASS:
            return Object.assign({}, state, {
                created_class: {
                    classname: action.payload,
                    students: action.students
                }
            })
        case ADD_STUDENT:
            return Object.assign({}, state, {
                added_student: {
                    user: action.user,
                    className: action.class_name,
                    students: action.payload
                }
            })
        case GET_CLASS_STUDENTS:
            return Object.assign({}, state, {
                classlist_students: {
                    className: action.class_name,
                    students: action.payload
                },
                updateCheck: false
            })
        default:
            return state;
    }
};

export default studentReducer;
