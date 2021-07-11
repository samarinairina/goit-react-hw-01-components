import React from 'react';
import Style from './staticList.module.scss'

function StaticList({label, percentage}) {
    return (
    <>
        <span className={Style.label}>{label}</span>
        <span className={Style.percentage}>{percentage}</span>
     </>

    )
}

export default StaticList;