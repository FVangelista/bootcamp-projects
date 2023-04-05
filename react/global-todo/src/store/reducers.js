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

    case 'SET_MODAL_VISIBILITY':
      return {
        ...state,
        isModalVisible: action.payload,
      };

    case 'SET_TEMP_USERNAME':
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          username: action.payload,
        },
      };

    case 'SET_TEMP_TODO':
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          todo: action.payload,
        },
      };

    case 'SET_TEMP_IMG':
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          image: action.payload,
        },
      };

    case 'SET_TEMP_CHECK':
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          completed: action.payload,
        },
      };

    case 'SET_TEMP_ID':
      return {
        ...state,
        tempTodo: {
          ...state.tempTodo,
          id: action.payload,
        },
      };
  }
};
