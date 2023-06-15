import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { AiOutlineMail, AiOutlineGithub, AiFillLinkedin } from "react-icons/ai"
import { BiCake, BiUserCircle } from "react-icons/bi"
import enTranslation from './locoles/en.json';
import faTranslation from './locoles/fa.json';
import { CiLocationOn } from 'react-icons/ci'
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslation },
      fa: { translation: faTranslation }
    },
    lng: navigator.language,
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

function App() {
  const { t } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }
  return (
    <>
      <div className='flex bg-slate-700 items-center w-full h-screen  justify-center 2xl:hidden xl:hidden lg:hidden'>
        <span className='text-white border border-solid rounded-xl w-96 p-10 text-center  border-orange-400'>{t('resumeDesktop')}</span>
      </div>
      <form  >
        <div className='flex 2xl:flex xl:flex lg:flex md:hidden sm:hidden 4xl:hidden 5xl:hidden xs:hidden justify-end mr-10'>
          <select className=' p-2 mt-5' onChange={(e) => changeLanguage(e.target.value)}>
            <option value="en">en</option>
            <option value="fa">fa</option>
          </select>
        </div>
      </form>
      <div dir='auto'>
        <div dir='rtl' className='2xl:flex xl:flex lg:flex md:hidden sm:hidden 4xl:hidden 5xl:hidden xs:hidden mt-5 mr-10 '>
          <div dir='auto' style={{ height: '1000px' }} className='bg-slate-500  2xl:w-3/12 xl:w-3/12 lg:w-3/12 w-full  2xl:h-screen xl:h-screen  '>
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
          <div dir='auto' className='w-8/12 h-screen mr-3 ml-2 '>
            <div >
              <span className='border  border-black border-t-0  border-r-0 border-l-0'>
                {t('aboutMe')}
              </span>
            </div>
            <div className='mt-2'>
              {t('about')}
            </div>
            <div dir='auto' className='mr-1 ml-2'>
              <div >
                <span className='border  border-black border-t-0  border-r-0 border-l-0'>
                  {t('experience')}
                </span>
              </div>
              <div className='mt-2'>
                {t('Frontenddevelopervuejsnuxtjs')}
              </div>
              <div className='mt-2 flex'>
                <div>{t('radar361')}</div>
                <div className='mr-1 ml-1'>{t('esfahan')}</div>
              </div>
              <div className='mt-2 flex'>
                <div>
                  {t('workType')}:
                </div>
                <div className='mr-1 ml-1'>{t('telecommuting')}</div>
              </div>
              <div className='mt-2'>
                {t('sixMonth')}
              </div>
              <div className='mt-2'>
                {t('radar')}
              </div>
              <a href='https://radar361.com/'>{t('linkRadar')}</a>
            </div>
            <div className='mt-2'>
              {t('Frontenddevelopervuejsnuxtjs')}
            </div>
            <div className='flex'>
              <div>  {t('workType')}:</div>
              <div className='mr-2 ml-2'>
                {t('freelancer')}
              </div>
            </div>

            <div className='mt-2'>
              {t('nineMonth')}
            </div>
            <div className='mt-2'>
              {t('experienceFreelancer')}
            </div>
            <div className='mt-2'>
              {t('Frontenddevelopervuejs')}
            </div>
            <div className='mt-2'>
              {t('avajang')}
            </div>
            <div className='flex'>
              <div>  {t('workType')}:</div>
              <div className='mr-2 ml-2'>
                {t('person')}
              </div>
            </div>
            <div className='mt-2'>
              {t('sevenMonth')}
            </div>
            <div className='mt-2'>
              {t('avajangExperience')}
            </div>
            <a href='https://avajang.com/'>{t('linkAvajang')}</a>
            <div className='mt-2'>
              {t('Frontenddevelopervuejs')}
            </div>
            <div className='mt-2'>
              {t('hakupian')}
            </div>
            <div className='flex'>
              <div>  {t('workType')}:</div>
              <div className='mr-2 ml-2'>
                {t('person')}
              </div>
            </div>
            <div className='mt-2'>
              {t('fourtheenMonth')}
            </div>
            <div className='mt-2'>
              {t('hakupianExperience')}
            </div>
            <a href='https://hakupian.com/'>{t('linkHakupian')}</a>

          </div>

        </div>
      </div>



    </ >
  )
}
export default App