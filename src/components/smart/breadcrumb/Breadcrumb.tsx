import Breadcrumbs from '@mui/material/Breadcrumbs';
import {NavLink} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {useMatches} from "react-router-dom";
import styles from './styles.module.css'

export default function Breadcrumb() {
    let location = useMatches();

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {
                    location.map(({id,pathname,handle})=>(

                        <NavLink
                            to={pathname}
                            key={id}
                            className={({ isActive }) =>
                                isActive  ? styles.activeLink : styles.link}
                        >
                            {handle.crumb()}</NavLink>
                    ))
                }
            </Breadcrumbs>
        </Stack>
    );
}
