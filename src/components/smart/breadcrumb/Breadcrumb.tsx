import Breadcrumbs from '@mui/material/Breadcrumbs';
import {NavLink, UIMatch} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {useMatches} from "react-router-dom";
import styles from './styles.module.css'


export default function Breadcrumb() {
    let location : UIMatch[] = useMatches();

    return (
        <Stack spacing={2}>
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                {
                    location.map(({id,pathname,handle} : UIMatch)=>(
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
