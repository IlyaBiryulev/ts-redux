import React, {useEffect} from 'react';
import './Users.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { fetchUsers } from '../../store/reducers/ActionCreators';

function Users() {
    const dispatch = useAppDispatch();
    const {users, isLoading, error} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(fetchUsers())
    }, [ ])

    return (
        <div>
            {isLoading && <h1>Данные загружются...</h1>}
            {error && <h1>{error}</h1>}
            {JSON.stringify(users, null, 2)}
        </div>
    );
}

export default Users;