import React, { useState } from 'react'
import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import { BiCake, BiUserCircle } from "react-icons/bi"
import { CiLocationOn } from 'react-icons/ci'
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkSide from "./useDarkSide";
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
                    <div dir='auto' style={{ height: '1000px' }} className='bg-slate-500 dark:bg-gray-400 2xl:w-3/12 xl:w-3/12 lg:w-3/12 w-full  2xl:h-screen xl:h-screen  '>
                        <div className='flex flex-col items-center mt-6 justify-center'>
                            <img className='w-36 h-36 rounded-full' src="profilepooria.png" alt="" />
                            <div dir='auto' className='flex mt-3'>
                                <div className="text-white text-xl">{t('pooria')}</div>
                                <div className='mr-2 text-blue-400 text-xl'>{t('ashkevarvakili')}</div>

                            </div>
                            <div className='text-white text-lg'>{t('frontenddeveloper')}</div>

                        </div>
                        <div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <AiOutlineMail className='mt-1 text-white text-xl' />
                                    <span className='mr-2 text-white'>pooriavakili09@gmail.com</span>
                                </div>
                            </div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <BiCake className='mt-1 text-white text-xl' />
                                    <span className='mr-2 text-white text-lg'>{t('tavalod')}</span>
                                </div>
                            </div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <CiLocationOn className='mt-1 text-white text-xl' />
                                    <span className='mr-2 text-white text-lg'>{t('location')}</span>
                                </div>
                            </div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <AiOutlineGithub className='mt-1 text-white text-xl' />
                                    <a href='https://github.com/pooriaashkevarvakili/' className='mr-2 text-white text-lg'>
                                        {t('git')}
                                    </a>
                                </div>
                            </div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <BiUserCircle className='mt-1 text-white text-xl' />
                                    <a href='https://pooriavakili.ir' className='mr-2 text-white text-lg'>
                                        {t('portfolio')}
                                    </a>
                                </div>
                            </div>
                            <div dir='rtl'>
                                <div className='flex mr-5 mt-4'>
                                    <AiFillLinkedin className='mt-1 text-white text-xl' />
                                    <a href='www.linkedin.com/in/pooriavakili/' className='mr-2 text-white text-lg'>
                                        {t('linkedin')}
                                    </a>
                                </div>
                            </div>
                            <div className='mt-2 mr-5 ml-5'>
                                <span className='text-white border  border-black border-t-0  border-r-0 border-l-0'>
                                    {t('skills')}
                                </span>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>html,css</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>sass,less</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Nuxt</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>javascript</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Quasar</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Typescript</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>vuejs</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Git</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Bootstrap</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>vuetify</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>vuex</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>Subapase</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>swagger</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>postman</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>antdesign</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>pinia</span>
                                </div>
                                <div className='w-24  rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>react</span>
                                </div>
                                <div className='w-24 ml-2 mr-2 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>nextjs</span>
                                </div>
                            </div>
                            <div className='flex mt-2'>
                                <div className='w-24 ml-5 mr-5 rounded-lg text-center bg-slate-600'>
                                    <span className='text-white '>contextapi</span>
                                </div>

                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                    <div dir='auto' style={{ height: '1000px' }} className='w-8/12 dark:bg-gray-400  mr-3 ml-2 '>
                        <div className='ml-3 mr-3 mt-2'>
                            <span className='border  border-black border-t-0  border-r-0 border-l-0'>
                                {t('aboutMe')}
                            </span>
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('about')}
                        </div>
                        <div dir='auto' className='mr-1 ml-2'>
                            <div className='mt-2 ml-3 mr-3'>
                                <span className='border  border-black border-t-0  border-r-0 border-l-0'>
                                    {t('experience')}
                                </span>
                            </div>
                            <div className='mt-2 ml-3 mr-3'>
                                {t('Frontenddevelopervuejsnuxtjs')}
                            </div>
                            <div className='mt-2 flex ml-3 mr-3'>
                                <div>{t('radar361')}</div>
                                <div className='mr-1 ml-1'>{t('esfahan')}</div>
                            </div>
                            <div className='mt-2 flex ml-3 mr-3'>
                                <div>
                                    {t('workType')}:
                                </div>
                                <div className='mr-1 ml-1'>{t('telecommuting')}</div>
                            </div>
                            <div className='mt-2 ml-3 mr-3'>
                                {t('sixMonth')}
                            </div>
                            <div className='mt-2 ml-3 mr-3'>
                                {t('radar')}
                            </div>
                            <a className='ml-3 mr-3' href='https://radar361.com/'>{t('linkRadar')}</a>
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('Frontenddevelopervuejsnuxtjs')}
                        </div>
                        <div className='flex ml-3 mr-3'>
                            <div>  {t('workType')}:</div>
                            <div className='mr-2 ml-2'>
                                {t('freelancer')}
                            </div>
                        </div>

                        <div className='mt-2 ml-3 mr-3'>
                            {t('nineMonth')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('experienceFreelancer')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('Frontenddevelopervuejs')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('avajang')}
                        </div>
                        <div className='flex ml-3 mr-3'>
                            <div>  {t('workType')}:</div>
                            <div className='mr-2 ml-2'>
                                {t('person')}
                            </div>
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('sevenMonth')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('avajangExperience')}
                        </div>
                        <a className='ml-3 mr-3' href='https://avajang.com/'>{t('linkAvajang')}</a>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('Frontenddevelopervuejs')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('hakupian')}
                        </div>
                        <div className='flex ml-3 mr-3'>
                            <div>  {t('workType')}:</div>
                            <div className='mr-2 ml-2'>
                                {t('person')}
                            </div>
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('fourtheenMonth')}
                        </div>
                        <div className='mt-2 ml-3 mr-3'>
                            {t('hakupianExperience')}
                        </div>
                        <a className='ml-3 mr-3' href='https://hakupian.com/'>{t('linkHakupian')}</a>

                    </div>

                </div>
            </div>

        </div>
    )
}

export default PrintableComponent