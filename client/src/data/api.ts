const BASE_URL = import.meta.env.VITE_BASE_URL;

export const API_ = {
  ACTIVITY: {
    GET_ALL_ACTIVITY: `${BASE_URL}/activity`,
  },
  SESSION: {
    GET_ALL_SESSION: `${BASE_URL}/session`,
  },
  DOUBT: {
    GET_DOUBTS_BY_SESSION: (sessionId: string) =>
      `${BASE_URL}/doubt/${sessionId}`,
  },
};
