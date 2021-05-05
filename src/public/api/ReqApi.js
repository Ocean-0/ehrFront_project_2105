import send from './Send'

const URL_JOBLIST = 'http://localhost:8081/';

const PATH_LOGIN_01 = 'login';
const PATH_JOBLIST_01 = 'getJobListPart';

export const reqLogin = (data, method) => send(URL_JOBLIST, PATH_LOGIN_01, data, method)
export const reqJobList = (data, method) => send(URL_JOBLIST, PATH_JOBLIST_01, data, method)
