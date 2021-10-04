// Fetch
export const FETCH_DAYS_ASYNC = 'FETCH_DAYS_ASYNC';
export type FetchDaysActionAsync = {
    type: typeof FETCH_DAYS_ASYNC
};
export type FetchDaysContract = () => FetchDaysActionAsync
