import React from 'react';
import { getUser, removeUserSession } from '../utils/Common';

export default function Dashboard(props) {
    const user = getUser();

    // handle click event of logout button
    const handleLogout = () => {
        removeUserSession();
        props.history.push('/signIn');
    }
return ( <div > Welcome {user.name}! < br/> <br/>
        <input type = "button"
        onClick = { handleLogout }
        value = "Logout" /> </div>
    );
}