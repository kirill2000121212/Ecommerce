import {Checkbox} from "@mui/material";

const CheckboxSize = ({label, icon, checkedIcon, onChange}) => {
    return (
        <Checkbox
            {...label}
            icon={icon}
            checkedIcon={checkedIcon}
            onChange={onChange}
            sx={{
                padding: '0'
            }}
        />
    );
};

export default CheckboxSize;