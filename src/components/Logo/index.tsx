import React from 'react';
// import { useSiteConfiguration } from '../../../../../gatsby-theme-portfolio-minimal/src/hooks/useSiteConfiguration';
import * as classes from './style.module.css';
import {useSiteConfiguration} from "../../hooks/useSiteConfiguration";

interface LogoProps {
    fontSize?: string;
    color?: string;
}

export function Logo(props: LogoProps): React.ReactElement {
    const siteConfiguration = useSiteConfiguration();
    const fontSize = props.fontSize || '2rem';
    const color = props.color || 'var(--primary-color)';

    return (
        <div className={classes.Logo} aria-roledescription="logo" style={{ fontSize, color }}>
            {siteConfiguration.logo.text}
        </div>
    );
}
