'use client';

import React, { useState } from 'react';
import { Container, Box, Typography, AppBar, Toolbar} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { SignIn } from '@clerk/nextjs';
import Link from 'next/link';
import Image from 'next/image';
import flashCard from '../../assets/flash-card.png';

export default function SignUpPage() {

    return (
        <>
            {/* AppBar start */}
            <AppBar elevation={0} sx={{ backgroundColor: 'white', color: 'black' }} position="static">
                <Toolbar >
                <Typography 
                    variant="h6" 
                    sx={{
                    mr: 2,
                    display: 'flex',
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.2rem',
                    color: 'black',
                    textDecoration: 'none',
                    gap: '10px'
                    }} 
                    style={{ flexGrow: 1 }} 
                    display={'flex'} 
                    alignItems={'center'}
                >
                    <Box 
                        component="a" 
                        href="/" 
                        sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            textDecoration: 'none', 
                            color: 'black',
                            gap: '10px',
                            width: 400 // Set your desired width here
                        }}
                        >
                            <Image src={flashCard} width={38} height={38} alt="Logo"/>
                            <Typography variant="h6">Flashcard AI</Typography>

                    </Box>
                </Typography>
                </Toolbar>
            </AppBar>
            {/* End AppBar */}

            <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: 'center', my: 4 }}
            >
                <Typography variant="h4" component="h1" gutterBottom>
                    Sign In
                </Typography>
                <SignIn />
            </Box>
        </>
    );
}
