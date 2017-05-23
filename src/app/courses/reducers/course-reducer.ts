export default function CourseReducer(state: any = [], action: any) {
    switch (action.type) {
        case 'CREATE_COURSE':
            return [...state,
            Object.assign({}, action.course)
            ];
        default:
            return state;
    }
}