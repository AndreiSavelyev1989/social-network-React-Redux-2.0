import { usersAPI } from "./../api/api";

const FOLLOW = "FOLLOW";
const UN_FOLLOW = "UN_FOLLOW";
const SET_USERS = "SET_USERS";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const FOLLOWING_IN_PROGRESS = "FOLLOWING_IN_PROGRESS";

const initialState = {
  users: [],
  pageSize: 5,
  totalItemsCount: 0,
  currentPage: 1,
  portionSize: 15,
  isFetching: false,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        })
      };

    case UN_FOLLOW:
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        })
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

    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching
      };

    case FOLLOWING_IN_PROGRESS:
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId)
      };

    default:
      return state;
  }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unFollowSuccess = (userId) => ({ type: UN_FOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setTotalUsersCount = (count) => ({
  type: SET_TOTAL_USERS_COUNT,
  count,
});
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: FOLLOWING_IN_PROGRESS,
  isFetching,
  userId,
});

export const getUsers = (pageSize, currentPage) => (dispatch) => {
  dispatch(toggleIsFetching(true));
  usersAPI.getUsers(pageSize, currentPage).then((data) => {
    dispatch(toggleIsFetching(false));
    dispatch(setUsers(data.items));
    dispatch(setTotalUsersCount(data.totalCount));
    dispatch(setCurrentPage(currentPage));
  });
};

export const follow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.follow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(followSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  })
};

export const unFollow = (userId) => (dispatch) => {
  dispatch(toggleFollowingInProgress(true, userId));
  usersAPI.unFollow(userId).then(data => {
    if (data.resultCode === 0) {
      dispatch(unFollowSuccess(userId));
    }
    dispatch(toggleFollowingInProgress(false, userId));
  })
};


export default usersReducer;
