export default function CourseReducer(state: any = [], action: any) {
    switch (action.type) {
        case 'CREATE_COURSE':
            console.log("STATE: ", state)
            let courses = [...state,
            Object.assign({}, state.course)
            ];
            console.log("COURSES ARRAY: ", courses)
            return courses
        default:
            return state;
    }
}