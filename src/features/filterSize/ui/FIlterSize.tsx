import styles from './styles.module.css'
import CheckboxSize from "@/shared/ui/checkboxSize/CheckboxSize.tsx";
import {useDispatch, useSelector} from "react-redux";
import {checkCheckbox} from "@/features/filterSize/model/slices/checkboxSizeSlice.ts";
import {useMemo} from "react";
import SIcon from "@/shared/ui/checkboxSize/sizeUi/s_Icon/SIcon.tsx";
import SCheckedIcon from "@/shared/ui/checkboxSize/sizeUi/s_CheckedIcon/SCheckedIcon.tsx";
import MIcon from "@/shared/ui/checkboxSize/sizeUi/m_Icon/MIcon.tsx";
import LIcon from "@/shared/ui/checkboxSize/sizeUi/l_Icon/lIcon.tsx";
import XlIcon from "@/shared/ui/checkboxSize/sizeUi/xl_Icon/XlIcon.tsx";
import XxlIcon from "@/shared/ui/checkboxSize/sizeUi/xxl_Icon/XxlIcon.tsx";
import MCheckedIcon from "@/shared/ui/checkboxSize/sizeUi/m_CheckedIcon/MCheckedIcon.tsx";
import LCheckedIcon from "@/shared/ui/checkboxSize/sizeUi/l_CheckedIcon/lCheckedIcon.tsx";
import XlCheckedIcon from "@/shared/ui/checkboxSize/sizeUi/xl_CheckedIcon/XlCheckedIcon.tsx";
import XxlCheckedIcon from "@/shared/ui/checkboxSize/sizeUi/xxl_CheckedIcon/XxlCheckedIcon.tsx";
import {I_CHECKBOX_SIZE} from "@/features/filterSize/model/slices/types.ts";

const initialState: Omit<I_CHECKBOX_SIZE, 'label' | 'isChecked'>[] =
    [{
        icon: <SIcon/>,
        checkedIcon: <SCheckedIcon/>
    }, {
        icon: <MIcon/>,
        checkedIcon: <MCheckedIcon/>
    }, {
        icon: <LIcon/>,
        checkedIcon: <LCheckedIcon/>
    }, {
        icon: <XlIcon/>,
        checkedIcon: <XlCheckedIcon/>
    }, {
        icon: <XxlIcon/>,
        checkedIcon: <XxlCheckedIcon/>
    }]

const FIlterSize = () => {
    const selector = useSelector(({checkboxSizeSlice}) => checkboxSizeSlice)
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
        <div>
            <p className={styles.fIlterSizeText}>Size</p>
            <ul className={styles.fIlterSizeList}>
                {
                    newSelector?.map(({label, icon, checkedIcon}) => (
                        <li key={label}>
                            <CheckboxSize
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

export default FIlterSize;