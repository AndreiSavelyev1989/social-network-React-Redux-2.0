const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";

const initialState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  portionSize: 15

};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u; 
        })
        
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u; 
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users
      };

    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalItemsCount: action.count
      };

    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.currentPage
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unFollowAC = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCountAC = (count) => ({ type: SET_TOTAL_USERS_COUNT, count });
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });

export default usersReducer;
