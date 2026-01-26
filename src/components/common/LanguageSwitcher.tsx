import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'en' || i18n.language.startsWith('en')
                        ? 'bg-blue-600 text-white'
                        : 'bg-transparent text-gray-300 hover:text-white'
                    }`}
            >
                EN
            </button>
            <span className="text-gray-500">|</span>
            <button
                onClick={() => changeLanguage('fr')}
                className={`px-2 py-1 text-sm rounded transition-colors ${i18n.language === 'fr' || i18n.language.startsWith('fr')
                        ? 'bg-blue-600 text-white'
                        : 'bg-transparent text-gray-300 hover:text-white'
                    }`}
            >
                FR
            </button>
        </div>
    );
};

export default LanguageSwitcher;
