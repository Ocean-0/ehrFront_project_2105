import send from './Send'

const URL_JOBLIST = 'http://localhost:8081/';

const PATH_LOGIN_01 = 'login';
const PATH_JOBLIST_01 = 'getJobListPart';
const PATH_PERSONALDATA_01 ='getPersonalData';
const PATH_BASICDATA_01 = 'getBasicData';
const PATH_ANSEX_01 = 'getAnSex';
const PATH_ANAILITY_01 = 'getAnAbiliy';

export const reqLogin = (data, method) => send(URL_JOBLIST, PATH_LOGIN_01, data, method)
export const reqJobList = (data, method) => send(URL_JOBLIST, PATH_JOBLIST_01, data, method)
export const reqPersonal = (data, method) => send(URL_JOBLIST, PATH_PERSONALDATA_01, data, method)
export const reqBasic = (data, method) => send(URL_JOBLIST, PATH_BASICDATA_01, data, method)
export const reqAnSex = (data, method) => send(URL_JOBLIST, PATH_ANSEX_01, data, method)
export const reqAnAbility = (data, method) => send(URL_JOBLIST, PATH_ANAILITY_01, data, method)
