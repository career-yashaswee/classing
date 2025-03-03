interface APItype {
  ACTIVITY: {
    GET_ALL_ACTIVITY: string;
  };
  SESSION: {
    GET_ALL_SESSION: string;
  };
  DOUBT: {
    GET_DOUBTS_BY_SESSION: (sessionId: string) => string;
  };
}
export default APItype;
