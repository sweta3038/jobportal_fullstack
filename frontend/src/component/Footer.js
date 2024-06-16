import { Box, IconButton } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    const { palette } = useTheme();
    return (
        <>
            <Box sx={{
                //height: '70px',
                bgcolor: palette.secondary.midNightBlue,
                display: 'flex',
                flexDirection: 'column',
                //justifyContent: 'center',
                alignItems: 'center',
                padding: '10px 0'
            }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                    <IconButton
                        aria-label="LinkedIn"
                        sx={{ color: "#ffffff" }}
                        href="http://linkedin.com/in/sweta-sinha-415461234"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Email"
                        sx={{ color: "#ffffff" }}
                        href="mailto:btech10430.21@bitmesra.ac.in"
                    >
                        <EmailIcon />
                    </IconButton>
                    <IconButton
                        aria-label="GitHub"
                        sx={{ color: "#ffffff" }}
                        href="https://github.com/sweta3038"
                        target="_blank"
                    >
                        <GitHubIcon />
                    </IconButton>
                    <IconButton
                        aria-label="Instagram"
                        sx={{ color: "#ffffff" }}
                        href="https://www.instagram.com"
                        target="_blank"
                    >
                        <InstagramIcon />
                    </IconButton>
                </Box>
                <Box component='span' sx={{ color:"#ffffff" }}>All rights reserved! Sweta@2023.</Box>

            </Box>
        </>
    )
}

export default Footer