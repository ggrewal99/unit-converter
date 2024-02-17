'use client';
import { useState } from 'react';
import { TbSunMoon } from 'react-icons/tb';

const themes = require('../config/themes').default;

const ThemeSwitcher = () => {
    const [selectedThemeIndex, setSelectedThemeIndex] = useState(0);

    const handleCycleThemes = () => {
        const newThemeIndex = (selectedThemeIndex + 1) % themes.length;
        setSelectedThemeIndex(newThemeIndex);
        document.documentElement.setAttribute(
            'data-theme',
            themes[newThemeIndex]
        );
    };

    return (
        <div className='flex justify-center items-center space-x-2'>
            <button className='btn btn-primary' onClick={handleCycleThemes}>
                <TbSunMoon className='text-2xl' />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
