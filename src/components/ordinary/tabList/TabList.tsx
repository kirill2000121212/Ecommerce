import {useState} from "react";
import Tab from "@components/ui/tab/Tab.tsx";
import styles from './styles.module.css'
const tabsArray: string[] = ['Featured','Latest']

const TabList = () => {
    const [tabActive,setTabActive] = useState<number>(0)

    const tabHandler = (index:number) => {
        setTabActive(index)
    }

    return (
        <div className={styles.tabs}>
            {tabsArray.map((value,index)=>(
                <Tab  isActive={index === tabActive} onClick={() => tabHandler(index)}>{value}</Tab>
            ))}
        </div>
    );
};

export default TabList;