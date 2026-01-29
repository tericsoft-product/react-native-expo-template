import { Subject } from 'rxjs';

const logoutSubject = new Subject<boolean>();
const updateLoginUserTokenSubject = new Subject<string>();

export default {
    logoutSubject,
    updateLoginUserTokenSubject,
};
