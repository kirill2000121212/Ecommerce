import Breadcrumbs from '@mui/material/Breadcrumbs';
import {NavLink, UIMatch} from 'react-router-dom';
import Stack from '@mui/material/Stack';
import {useMatches} from "react-router-dom";
import styles from './styles.module.css'
import {Container} from "@/shared/ui/container/Container.tsx";

export default function Breadcrumb() {
    const location : UIMatch[] = useMatches();

    return (
        <Stack spacing={2}>
            <Container>
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
            </Container>
        </Stack>
    );
}
