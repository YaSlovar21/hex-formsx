import React from "react";

import styles from './FollowingOrder.module.css';

function FollowingOrder() {
    const [isFollowing, setIsFollowing] = React.useState(false);

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }

    return (
        <button onClick={handleClick} className={styles.followbutton}>{isFollowing ? 'В избранном' : 'В избранное'}</button>
    );    
}

export default FollowingOrder;