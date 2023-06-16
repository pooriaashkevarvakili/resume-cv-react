import React from 'react'
import { useTranslation } from 'react-i18next';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import { BiCake, BiUserCircle } from "react-icons/bi"
import { CiLocationOn } from 'react-icons/ci'
function sectionOne() {
    const { t } = useTranslation();
    return (
        <div dir='auto' style={{ height: '1050px' }} className='bg-slate-500 dark:bg-gray-400 2xl:w-3/12 xl:w-3/12 lg:w-3/12 w-full  2xl:h-screen xl:h-screen  '>
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
    )
}

export default sectionOne