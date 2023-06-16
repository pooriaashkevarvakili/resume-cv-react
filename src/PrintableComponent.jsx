import React, { useState } from 'react'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import SectionOne from './sectionOne';
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";
import SectionTwo from './SectionTwo';
function PrintableComponent() {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
    }
    const { t } = useTranslation();
    return (
        <div className='bg-white dark:bg-slate-600'>
            <div className='flex bg-slate-700 items-center w-full h-screen  justify-center 2xl:hidden xl:hidden lg:hidden'>
                <span className='text-white border border-solid rounded-xl w-96 p-10 text-center  border-orange-400'>{t('resumeDesktop')}</span>
            </div>
            <div className='flex  2xl:flex xl:flex lg:flex md:hidden sm:hidden 4xl:hidden 5xl:hidden xs:hidden justify-between mr-10'>
                <div className='mt-4 ml-4 '>
                    <DarkModeSwitch
                        style={{ marginBottom: "2rem" }}
                        checked={darkSide}
                        onChange={toggleDarkMode}
                        size={30}
                    />
                </div>
                <div>
                    <form>
                        <select className=' p-2 mt-5' onChange={(e) => changeLanguage(e.target.value)}>
                            <option value="en">en</option>
                            <option value="fa">fa</option>
                        </select>
                    </form>
                </div>
            </div>
            <div dir='auto' className=''>
                <div dir='rtl' className='2xl:flex xl:flex lg:flex md:hidden sm:hidden 4xl:hidden 5xl:hidden xs:hidden mt-5 mr-10'>
                    <SectionOne />
                    <SectionTwo />
                </div>
            </div>
        </div>
    )
}

export default PrintableComponent