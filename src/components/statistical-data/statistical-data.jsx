import React from 'react';
import StaticList from './staticList';
import PropTypes from 'prop-types';
import Style from './StatisticalData.module.scss'

function StatisticalList({ stats }) {
    return (
        <section className={Style.statistics}>
            <h2 className={Style.title}>Upload stats</h2>

            <ul className={Style.statList}>
    {stats.map(({ id, label, percentage }) => (
        <li key={id} className={Style.item}>
            < StaticList
                label={label}
                percentage={percentage}

                />
     </li>
    
    ))}
    </ul>
</section>
    ) 
}


StatisticalList.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
}
export default StatisticalList;