import styles from './styles.module.css'
import { Select } from "antd";

const Sort = () => {
    return (
        <Select
            className={styles.sort}
            showSearch
            placeholder="Sort by"
            filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
            }
            options={[
                { value: '1', label: 'by Price' },
                { value: '2', label: 'by Stock' },
            ]}
        />
    );
};

export default Sort;