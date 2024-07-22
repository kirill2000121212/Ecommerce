import {useDispatch, useSelector} from "react-redux";
import {checkCheckbox} from "@/features/filterColor/model/slices/checkboxColorSlice.ts";
import CheckboxColor from "@/shared/ui/checkboxColor/ui/CheckboxColor.tsx";
import {I_CHECKBOX_COLOR} from "@/features/filterColor/model/slices/types.ts";
import DullBlueIcon from "@/shared/ui/checkboxColor/ui/colorUi/dullBlueIcon/DullBlueIcon.tsx";
import DullBlueCheckedIcon from "@/shared/ui/checkboxColor/ui/colorUi/dullBlueCheckedIcon/DullBlueCheckedIcon.tsx";
import YellowIcon from "@/shared/ui/checkboxColor/ui/colorUi/yellowIcon/YellowIcon.tsx";
import YellowCheckedIcon from "@/shared/ui/checkboxColor/ui/colorUi/yellowCheckedIcon/YellowCheckedIcon.tsx";
import GreenIcon from "@/shared/ui/checkboxColor/ui/colorUi/greenIcon/GreenIcon.tsx";
import GreenCheckedIcon from "@/shared/ui/checkboxColor/ui/colorUi/greenCheckedIcon/GreenCheckedIcon.tsx";
import BlueIcon from "@/shared/ui/checkboxColor/ui/colorUi/blueIcon/BlueIcon.tsx";
import BlueCheckedIcon from "@/shared/ui/checkboxColor/ui/colorUi/blueCheckedIcon/BlueCheckedIcon.tsx";
import {useMemo} from "react";
import styles from './styles.module.css'

const initialState: Omit<I_CHECKBOX_COLOR, 'label' | 'isChecked'>[] =
    [{
        icon: <DullBlueIcon/>,
        checkedIcon: <DullBlueCheckedIcon/>
    }, {
        icon: <YellowIcon/>,
        checkedIcon: <YellowCheckedIcon/>
    }, {
        icon: <GreenIcon/>,
        checkedIcon: <GreenCheckedIcon/>
    }, {
        icon: <BlueIcon/>,
        checkedIcon: <BlueCheckedIcon/>
    }]

const FilterColor = () => {
    const selector = useSelector(({checkboxColorSlice}) => checkboxColorSlice)
    const dispatch = useDispatch()

    const onChecked = (label) => {
        dispatch(checkCheckbox(label))
    }

    const newSelector = useMemo(() => initialState.reduce((acc, value, index) => {
        return [
            ...acc,
            {
                ...value,
                label: selector[index].label,
                isChecked: selector[index].isChecked
            }]
    }, []), [])

    return (
        <div className={styles.filterColor}>
            <p className={styles.filterColorText}>Color</p>
            <ul className={styles.filterColorList}>
                {
                    newSelector?.map(({label, icon, checkedIcon}) => (
                        <li key={label}>
                            <CheckboxColor
                                icon={icon}
                                checkedIcon={checkedIcon}
                                onChange={() => onChecked(label)}
                            />
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default FilterColor;