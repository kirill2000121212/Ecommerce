import {Checkbox, FormControlLabel} from "@mui/material";
import {FC} from "react";
import {TYPE_CHECKBOX_ITEM} from "@/shared/ui/checkBoxItem/types.ts";

const CheckBoxItem: FC<TYPE_CHECKBOX_ITEM> = ({label,checked,onChange}) => {
    return (
    <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} color="default" />} label={label} />
    );
};

export default CheckBoxItem;