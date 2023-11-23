import styles from './Filter.module.css'
// Компонент фільтрації контактів
export const Filter = ({ filter, handleFilterChange }) => (
    <div className={ styles.box}>
    <p>Find contacts by name</p>
    <input className={styles.input} type="text" name="filter" value={filter} onChange={handleFilterChange} placeholder="Search" />
    </div>
);