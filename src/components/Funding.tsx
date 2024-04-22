import { useTranslations, useLocale } from "next-intl"
import Link from "next/link";

function Funding() {
  const t = useTranslations('Funding');
  const currentLocale = useLocale();

  return (
    <section className='w-full bg-secondary text-center rounded-lg py-10 px-8 max-w-screen-xl mb-10'>
        <h2 className="text-primary text-xl lg:text-2xl font-bold mb-8">{t('title')}</h2>
        <ul className="flex flex-col items-center gap-8">
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[8em] h-[8em] md:w-[6em] md:h-[6em]" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 3c-.624 0-1.248.213-1.78.594L12.56 4.75L10.656 5h-.03l-.032.03a3.39 3.39 0 0 0-2.563 2.564l-.03.03v.032l-.25 1.938l-1.156 1.5l-.032.03v.032c-.698 1.118-.73 2.56.032 3.625L7.78 16.44l.314 1.718l-3.22 4.907l-1.03 1.53h4.781l1.156 2.688l.72 1.72l1.03-1.563l3.158-4.75c.846.35 1.806.38 2.624 0l3.157 4.75L21.5 29l.72-1.72l1.155-2.686h4.781l-1.03-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.03v-.03c.698-1.12.73-2.528-.032-3.595L24.25 9.47l-.375-1.876h.03c0-.025-.027-.04-.03-.063c-.18-1.307-1.217-2.37-2.53-2.53h-.032l-1.875-.25l-1.657-1.156A3.078 3.078 0 0 0 16 3m0 2.03c.23 0 .458.07.625.19l1.78 1.28l.22.156l.25.032L21.063 7h.03c.448.05.764.365.813.813v.062l.407 2.22l.03.217l.157.188l1.28 1.78c.24.335.27.894-.03 1.376l-1.25 1.75l-.156.22l-.032.25L22 18.062v.03a.966.966 0 0 1-.156.438l-.063.032v.032a.883.883 0 0 1-.593.312h-.062l-2.28.407l-.25.03l-.19.157l-1.78 1.28c-.333.24-.924.27-1.406-.03l-1.626-1.25l-.188-.156l-.28-.032L10.937 19h-.032a.872.872 0 0 1-.687-.438a.98.98 0 0 1-.126-.375v-.062l-.406-2.28l-.032-.25l-.156-.19l-1.28-1.78c-.24-.333-.27-.924.03-1.406l1.25-1.626l.156-.188l.03-.28l.283-2.095c.002-.014.026-.015.03-.03a1.398 1.398 0 0 1 1-1c.015-.004.016-.028.03-.03l2.095-.282l.25-.032l.22-.156l1.78-1.28c.167-.12.396-.19.625-.19zm6.906 15.22l1.532 2.344H22.03l-.25.625l-.686 1.593l-2.125-3.25l.468-.344l1.968-.345v.03c.025 0 .04-.027.063-.03a2.973 2.973 0 0 0 1.436-.625zm-13.812.03c.427.382.967.648 1.562.72h.03l1.908.25l.437.344l-2.124 3.218l-.687-1.593l-.25-.626H7.56l1.532-2.313z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg justify-self-start text-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-1')}</h3>
          <p className="text-neutral text-sm md:text-[1rem] justify-self-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-1')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[7.7em] h-[7.7em] md:w-[5.8em] md:h-[5.8em]"  viewBox="0 0 16 16">
            <path fill="currentColor" d="M12.61 8.41a5.46 5.46 0 0 1-1.454-.424A60.006 60.006 0 0 1 15.61 4.43l.1-.07l.06-.11a2.924 2.924 0 0 0-.765-3.496a2.916 2.916 0 0 0-3.459-.376l-.126.133A54.96 54.96 0 0 1 6.512 6.41a50.219 50.219 0 0 1-6.018 4.592L.1 11.25v.23a4.53 4.53 0 0 0 .7 3.655A2.83 2.83 0 0 0 3.007 16a1.997 1.997 0 0 0 1.778-.902C5.03 14.79 6.85 12.49 8.79 10.39c.268.464.476 1.003.594 1.575a6.29 6.29 0 0 1-.399 3.078L10.67 13L12 14a12.122 12.122 0 0 0-.584-3.336a5.341 5.341 0 0 0-.915-1.214c.406.346.871.643 1.372.874c.94.338 1.989.572 3.076.672L14 9.73L16 8a8.982 8.982 0 0 1-2.777.431c-.216 0-.43-.007-.642-.022zm-.45-7.23a1.89 1.89 0 0 1 .842-.194c.506 0 .966.196 1.309.516a1.926 1.926 0 0 1 .595 2.192c-.486.307-2.346 1.717-4.146 3.307a2.003 2.003 0 0 0-.668-1.298a1.596 1.596 0 0 0-1.24-.372A58.169 58.169 0 0 0 12.16 1.18M2.7 11.81a.458.458 0 0 1 .262-.082l.04.002h.068c.179.052.334.142.461.261l-.871.719a1.28 1.28 0 0 1-.119-.716a.334.334 0 0 1 .158-.183zM4 14.5a1 1 0 0 1-1.005.499a1.852 1.852 0 0 1-1.485-.54a3.432 3.432 0 0 1-.583-1.922c0-.251.027-.495.077-.73l.706-.457c-.094.14-.164.304-.199.481a2.985 2.985 0 0 0 .535 1.958l.354.44l1.7-1.4a2.396 2.396 0 0 1-.106 1.685zm.86-2.45a2.825 2.825 0 0 0-1.54-1.274c-.071-.012-.13-.016-.19-.016s-.119.004-.177.01a1.56 1.56 0 0 0-.35 0a44.978 44.978 0 0 0 3.988-3.052c.398.071.812.25 1.131.533c.297.313.48.739.48 1.209l-.002.094a54.377 54.377 0 0 0-3 3.506a2.75 2.75 0 0 0-.357-1.023z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-2')}</h3>
          <p className="text-neutral text-sm md:text-[1rem]  text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-2')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[7.7em] h-[7.7em] md:w-[5.8em] md:h-[5.8em]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5zM4 5h5v2H4zm0 4h3v2H4zm0 4h5v2H4z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-3')}</h3>
          <p className="text-neutral text-sm md:text-[1rem]  text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-3')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[7.7em] h-[7.7em] md:w-[5.8em] md:h-[5.8em]"  viewBox="0 0 20 20">
            <path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/>
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-4')}</h3>
          <p className="text-neutral text-sm md:text-[1rem]  text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-4')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[7.7em] h-[7.7em] md:w-[5.8em] md:h-[5.8em]"  viewBox="0 0 16 16">
            <path fill="currentColor" d="M12.61 8.41a5.46 5.46 0 0 1-1.454-.424A60.006 60.006 0 0 1 15.61 4.43l.1-.07l.06-.11a2.924 2.924 0 0 0-.765-3.496a2.916 2.916 0 0 0-3.459-.376l-.126.133A54.96 54.96 0 0 1 6.512 6.41a50.219 50.219 0 0 1-6.018 4.592L.1 11.25v.23a4.53 4.53 0 0 0 .7 3.655A2.83 2.83 0 0 0 3.007 16a1.997 1.997 0 0 0 1.778-.902C5.03 14.79 6.85 12.49 8.79 10.39c.268.464.476 1.003.594 1.575a6.29 6.29 0 0 1-.399 3.078L10.67 13L12 14a12.122 12.122 0 0 0-.584-3.336a5.341 5.341 0 0 0-.915-1.214c.406.346.871.643 1.372.874c.94.338 1.989.572 3.076.672L14 9.73L16 8a8.982 8.982 0 0 1-2.777.431c-.216 0-.43-.007-.642-.022zm-.45-7.23a1.89 1.89 0 0 1 .842-.194c.506 0 .966.196 1.309.516a1.926 1.926 0 0 1 .595 2.192c-.486.307-2.346 1.717-4.146 3.307a2.003 2.003 0 0 0-.668-1.298a1.596 1.596 0 0 0-1.24-.372A58.169 58.169 0 0 0 12.16 1.18M2.7 11.81a.458.458 0 0 1 .262-.082l.04.002h.068c.179.052.334.142.461.261l-.871.719a1.28 1.28 0 0 1-.119-.716a.334.334 0 0 1 .158-.183zM4 14.5a1 1 0 0 1-1.005.499a1.852 1.852 0 0 1-1.485-.54a3.432 3.432 0 0 1-.583-1.922c0-.251.027-.495.077-.73l.706-.457c-.094.14-.164.304-.199.481a2.985 2.985 0 0 0 .535 1.958l.354.44l1.7-1.4a2.396 2.396 0 0 1-.106 1.685zm.86-2.45a2.825 2.825 0 0 0-1.54-1.274c-.071-.012-.13-.016-.19-.016s-.119.004-.177.01a1.56 1.56 0 0 0-.35 0a44.978 44.978 0 0 0 3.988-3.052c.398.071.812.25 1.131.533c.297.313.48.739.48 1.209l-.002.094a54.377 54.377 0 0 0-3 3.506a2.75 2.75 0 0 0-.357-1.023z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-5')}</h3>
          <p className="text-neutral text-sm md:text-[1rem]  text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-5')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[7.7em] h-[7.7em] md:w-[5.8em] md:h-[5.8em]" viewBox="0 0 24 24">
            <path fill="currentColor" d="M4 3c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2h8v5l3-3l3 3v-5h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm8 2l3 2l3-2v3.5l3 1.5l-3 1.5V15l-3-2l-3 2v-3.5L9 10l3-1.5zM4 5h5v2H4zm0 4h3v2H4zm0 4h5v2H4z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-6')}</h3>
          <p className="text-neutral text-sm md:text-[1rem]  text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-6')}</p>
          </li>
          <li className="funding-item-grid">
          <svg xmlns="http://www.w3.org/2000/svg" className="text-primary col-start-1 col-end-3 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-3 w-[8em] h-[8em] md:w-[6em] md:h-[6em]" viewBox="0 0 32 32">
            <path fill="currentColor" d="M16 3c-.624 0-1.248.213-1.78.594L12.56 4.75L10.656 5h-.03l-.032.03a3.39 3.39 0 0 0-2.563 2.564l-.03.03v.032l-.25 1.938l-1.156 1.5l-.032.03v.032c-.698 1.118-.73 2.56.032 3.625L7.78 16.44l.314 1.718l-3.22 4.907l-1.03 1.53h4.781l1.156 2.688l.72 1.72l1.03-1.563l3.158-4.75c.846.35 1.806.38 2.624 0l3.157 4.75L21.5 29l.72-1.72l1.155-2.686h4.781l-1.03-1.532L24 18.313l.25-1.875l1.156-1.656l.032-.03v-.03c.698-1.12.73-2.528-.032-3.595L24.25 9.47l-.375-1.876h.03c0-.025-.027-.04-.03-.063c-.18-1.307-1.217-2.37-2.53-2.53h-.032l-1.875-.25l-1.657-1.156A3.078 3.078 0 0 0 16 3m0 2.03c.23 0 .458.07.625.19l1.78 1.28l.22.156l.25.032L21.063 7h.03c.448.05.764.365.813.813v.062l.407 2.22l.03.217l.157.188l1.28 1.78c.24.335.27.894-.03 1.376l-1.25 1.75l-.156.22l-.032.25L22 18.062v.03a.966.966 0 0 1-.156.438l-.063.032v.032a.883.883 0 0 1-.593.312h-.062l-2.28.407l-.25.03l-.19.157l-1.78 1.28c-.333.24-.924.27-1.406-.03l-1.626-1.25l-.188-.156l-.28-.032L10.937 19h-.032a.872.872 0 0 1-.687-.438a.98.98 0 0 1-.126-.375v-.062l-.406-2.28l-.032-.25l-.156-.19l-1.28-1.78c-.24-.333-.27-.924.03-1.406l1.25-1.626l.156-.188l.03-.28l.283-2.095c.002-.014.026-.015.03-.03a1.398 1.398 0 0 1 1-1c.015-.004.016-.028.03-.03l2.095-.282l.25-.032l.22-.156l1.78-1.28c.167-.12.396-.19.625-.19zm6.906 15.22l1.532 2.344H22.03l-.25.625l-.686 1.593l-2.125-3.25l.468-.344l1.968-.345v.03c.025 0 .04-.027.063-.03a2.973 2.973 0 0 0 1.436-.625zm-13.812.03c.427.382.967.648 1.562.72h.03l1.908.25l.437.344l-2.124 3.218l-.687-1.593l-.25-.626H7.56l1.532-2.313z" />
          </svg>
          <h3 className="text-neutral text-md md:text-lg text-start justify-self-start font-semibold col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2">{t('heading-7')}</h3>
          <p className="text-neutral text-sm md:text-[1rem] text-start col-start-1 col-end-3 md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3">{t('content-7')}</p>
          </li>
        </ul>
        <p className="text-md lg:text-lg text-neutral font-semibold mt-10 mb-8">{t('cta-text')}</p>
        <Link href={`/${currentLocale}/contact`} className="w-full mt-8">
          <button className="btn btn-primary  hover:btn-secondary w-full max-w-[300px]  shadow-black rounded-full  text-neutral text-md items-center ">Súmate <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20"><path fill="currentColor" d="M4 14.5v-3.336l4.008 2.302a4 4 0 0 0 3.984 0L16 11.164V14.5a.5.5 0 0 1-.146.354l-.002.001l-.002.003l-.007.006l-.023.022l-.08.074c-.07.062-.17.147-.301.248a8.104 8.104 0 0 1-1.141.733A9.092 9.092 0 0 1 10 17a9.092 9.092 0 0 1-4.298-1.06a8.1 8.1 0 0 1-1.14-.733a5.772 5.772 0 0 1-.382-.322l-.023-.022A.513.513 0 0 1 4 14.5m14.749-6.067l-7.255 4.165a3 3 0 0 1-2.988 0L2 8.863v4.636a.5.5 0 0 1-1 0V8a.5.5 0 0 1 .262-.44L8.506 3.4a2.997 2.997 0 0 1 2.988 0l7.255 4.166a.5.5 0 0 1 0 .867"/></svg></button>
        </Link>
    </section>
  )
}

export default Funding