import {ConfigProvider, Slider} from "antd";
import styles from './styles.module.css'

const FilterPrice = () => {
    return (
        <div className={styles.filterPrice}>
            <p>Price</p>
                <ConfigProvider
                    theme={{
                        components: {
                            Slider: {
                                colorBgElevated: "#000"
                            },
                        },
                    }}
                >
                    <Slider
                        range
                        min={0}
                        max={1780}
                        defaultValue={[200, 890]}
                        tooltip={{
                            placement: 'bottom'
                        }}
                        trackStyle={{background: '#878a92'}}
                        railStyle={{background: '#e6e7e8'}}
                    />
                </ConfigProvider>
        </div>
    );
};

export default FilterPrice;