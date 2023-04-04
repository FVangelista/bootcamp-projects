export const mainReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASKS_LIST':
      return {
        ...state,
        tasksListData: action.payload,
      };
    case 'CREATE_NEW_TASK':
      return {
        ...state,
        tasksListData: [...state.tasksListData, action.payload],
      };
    case 'true':
      return {
        ...state,
        isModalVisible: true,
      };
    case 'false':
      return {
        ...state,
        isModalVisible: false,
      };
  }
};
