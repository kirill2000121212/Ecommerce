import {useState} from "react";
import styles from './styles.module.css'
import Tab from "@/shared/ui/tab/Tab.tsx";
const tabsArray: string[] = ['Featured','Latest']

const TabList = () => {
    const [tabActive,setTabActive] = useState<number>(0)

    const tabHandler = (index:number) => {
        setTabActive(index)
    }

    return (
        <div className={styles.tabs}>
            {tabsArray.map((value,index)=>(
                <Tab
                key={value}
                isActive={index === tabActive}
                onClick={() => tabHandler(index)}>{value}</Tab>
            ))}
        </div>
    );
};

export default TabList;