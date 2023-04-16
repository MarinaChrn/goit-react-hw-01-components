import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics =({title, stats})=> (
    <section className={css.statistics}>
         {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css.statList}>
            {stats.map((item,idx)=>(
                <li className={css.item} key={item.id} id={item.idx} style={{
                    backgroundColor: getColor(),
                }}>
                    <span className={css.label}>{item.label}</span>
                    <span className={css.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    </section>
);

const getColor = () => {
    return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })),

}

