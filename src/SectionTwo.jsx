import React from 'react'
import { useTranslation } from 'react-i18next';

function SectionTwo() {
    const { t } = useTranslation();
    return (
        <div dir='auto' style={{ height: '1050px' }} className='w-8/12 dark:bg-gray-400  mr-3 ml-2 '>
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
    )
}

export default SectionTwo