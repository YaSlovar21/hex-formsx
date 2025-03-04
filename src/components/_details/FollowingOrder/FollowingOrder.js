import { Star, StarRate, StarRateOutlined } from "@mui/icons-material";
import React from "react";

import styles from './FollowingOrder.module.css';

function FollowingOrder() {
    const [isFollowing, setIsFollowing] = React.useState(false);

    const handleClick = () =>{
        setIsFollowing(!isFollowing);
    }

    return (
        <button onClick={handleClick} className={styles.followbutton}>{isFollowing ? (<StarRate />) : (< StarRateOutlined />)}</button>
    );    
}

export default FollowingOrder;