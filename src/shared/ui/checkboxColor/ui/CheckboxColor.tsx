import {Checkbox} from "@mui/material";

const CheckboxColor = ({label, icon, checkedIcon, onChange}) => {
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

export default CheckboxColor;