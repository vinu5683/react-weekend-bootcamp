import React from "react";
import ListCardItem from "./ListCardItem";

const RobotCardList = ({ robots }) => {
    const robos = robots.map((r) => {
        return <ListCardItem key={r.id} id={r.id} name={r.username} email={r.email} />
    })
    return (
        <div>
            {robos}
        </div>
    )
}

export default RobotCardList;