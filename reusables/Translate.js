import { I18n } from 'i18n-js';

const Translate = (words, lang) => {

    const i18n = new I18n({
        en: {
            register: 'Open an account',
            login: 'Sign in',
            "sign up": 'Sign up',
            "remember me": 'Remember me',
            "slidertextone": 'Organized store allows you to attend to your customer faster',
            "slidertexttwo": 'ShopRecords allows you to keep an eye on your store everywhere you go',
            "slidertextthree": 'No heavy training needed to use ShopRecords app',
            "slidertextfour": 'Multiple store, no problem, MTS handles multiple shop painlessly even when they have different kinds of product',
            "first name": 'First name',
            "last name": 'Last name',
            "other name": 'Other name',
            "phone number": 'Phone number',
            "e-mail": 'E-mail',
            "secret pin": 'Secret pin',
            "store or business name": 'Store or Business name',
            "store type": 'Store type',
            "country": 'Country',
            "state": 'State',
            "city": 'City',
            "area": 'Area',
            "currency": 'Currency',
            "password": 'Password',
            "forgot password": 'Forgot password',
            "get new password": 'Samo sabon kalmar sirri',
            "i have read the": 'I have read the',
            "terms and conditions": 'terms and conditions',
            "already have an account?": 'Already have an account?',
            "optional": 'Optional',
            "please": 'please',
            "wait": 'wait',
        },
        fa: {
            "register": "enregistrer",
            "login": "connexion",
            "sign up": "s'inscrire",
            "remember me": "souviens-toi de moi",
            "slidertextone": "Un magasin organisé vous permet de vous occuper plus rapidement de votre client",
            "slidertexttwo": "ShopRecords vous permet de garder un œil sur votre magasin partout où vous allez",
            "slidertextthree": "Aucune formation intensive nécessaire pour utiliser l'application ShopRecords",
            "slidertextfour": "Plusieurs magasins, pas de problème, MTS gère plusieurs magasins sans douleur, même lorsqu'ils ont différents types de produits",
            "first name": "prénom",
            "last name": "nom de famille",
            "other name": "autre nom",
            "phone number": "numéro de téléphone",
            "e-mail": "e-mail",
            "secret pin": "broche secrète",
            "store or business name": "nom du magasin ou de l'entreprise",
            "store type": "type de magasin",
            "country": "pays",
            "state": "État",
            "city": "ville",
            "area": "zone",
            "currency": "monnaie",
            "password": "mot de passe",
            "forgot password": "Mot de passe oublié",
            "get new password": "Obtenir un nouveau mot de passe",
            "i have read the": "j'ai lu le",
            "terms and conditions": "termes et conditions",
            "already have an account?": "Vous avez déjà un compte?",
            "optional": 'Pas obligatoire',
            "please": 's\'il te plaît',
            "wait": 'attendez',
        },
        ar: {
            "register": "يسجل",
            "login": "تسجيل الدخول",
            "sign up": "اشتراك",
            "remember me": "تذكرنى",
            "slidertextone": "يسمح لك المتجر المنظم بالحضور إلى عميلك بشكل أسرع",
            "slidertexttwo": "تسمح لك سجلات المتاجر بمراقبة متجرك في كل مكان تذهب إليه ",
            "slidertextthree": "لا حاجة إلى تدريب مكثف لاستخدام تطبيق سجلات المتجر",
            "slidertextfour": "متجر متعدد ، لا توجد مشكلة ، يتعامل تطبيق سجل المتجر مع العديد من المتاجر دون ألم حتى عندما يكون لديهم أنواع مختلفة من المنتجات ",
            "first name": "الاسم الأول",
            "last name": "اسم العائلة",
            "other name": "اسم آخر",
            "phone number": "رقم التليفون",
            "e-mail": "بريد إلكتروني",
            "secret pin": "دبوس سري",
            "store or business name": "اسم المتجر أو العمل",
            "store type": "نوع المتجر",
            "country": "دولة",
            "state": "ولاية",
            "city": "مدينة",
            "area": "منطقة",
            "currency": "عملة",
            "password": "كلمة المرور",
            "forgot password": "هل نسيت كلمة السر",
            "get new password": "احصل على كلمة سر جديدة",
            "i have read the": "لقد قرأت ال",
            "terms and conditions": "الأحكام والشروط",
            "already have an account?": "هل لديك حساب؟",
            "optional": 'ليس إلزاميا',
            "please": 'لو سمحت',
            "wait": 'انتظر'
        },
        ha: {
            register: 'Rajista',
            login: 'Shiga',
            "remember me": 'tuna ni',
            "sign up": 'Yi rajista',
            "slidertextone": 'Shagon da aka tsara yana ba ku damar halartar abokin cinikin ku da sauri',
            "slidertexttwo": 'ShopRecords yana ba ku damar sanya ido kan kantin sayar da ku a duk inda kuka je',
            "slidertextthree": 'Babu horo mai nauyi da ake buƙata don amfani da app na ShopRecords',
            "slidertextfour": 'Shagon da yawa, babu matsala, MTS yana sarrafa shaguna da yawa ba tare da ɓacin rai ba ko da suna da nau\'ikan samfura daban-daban',
            "first name": 'Sunan rana',
            "last name": 'sunan mahaifa',
            "other name": 'Sunan tsakiya',
            "phone number": 'Lambar tarho',
            "e-mail": 'Imel',
            "secret pin": 'Sirrin fil',
            "store or business name": 'Sunan Kasuwanci',
            "store type": 'Nau\'in kantin',
            "country": 'Ƙasa, ƙasa',
            "state": 'Jihar, bayyana, furta',
            "city": 'Birni, gari',
            "area": 'Yanki, wuri',
            "password": 'Kalmar sirri',
            "forgot password": 'Manta kalmar sirri',
            "get new password": 'Samo sabon kalmar sirri',
            "currency": 'Kudin waje, kuɗi',
            "i have read the": 'Na karanta',
            "terms and conditions": 'sharuɗɗan da sharuddan',
            "already have an account?": 'Kuna da asusu?',
            "optional": 'ba dole ba',
            "please": 'Don Allah',
            "wait": 'jira',
        },
        yo: {
            register: 'Forukọsilẹ',
            login: 'Wole',
            "remember me": 'Ranti mi',
            "sign up": 'Forukọsilẹ',
            "slidertextone": 'Ile itaja ti a ṣeto fun ọ laaye lati wa si alabara rẹ ni iyara',
            "slidertexttwo": 'ShopRecords gba ọ laaye lati tọju oju ile itaja rẹ nibikibi ti o lọ',
            "slidertextthree": 'Ko si ikẹkọ iwuwo nilo lati lo ohun elo ShopRecords',
            "slidertextfour": 'Ile itaja lọpọlọpọ, ko si iṣoro, MTS n kapa awọn ile itaja lọpọlọpọ laisi irora paapaa nigba ti wọn ni iru ọja',
            "first name": 'Orukọ akọkọ',
            "last name": 'Oruko idile',
            "other name": 'Orukọ aarin',
            "phone number": 'Nomba fonu',
            "e-mail": 'Imeeli',
            "secret pin": 'PIN asiri',
            "store or business name": 'Orukọ iṣowo',
            "store type": 'Itaja iru',
            "country": 'Orilẹ-ede',
            "state": 'Ìpínlẹ̀',
            "city": 'Ilu',
            "area": 'Agbegbe',
            "currency": 'Owo',
            "password": 'ọrọigbaniwọle',
            "forgot password": 'Gbagbe ọrọ aṣina bi',
            "get new password": 'Gba ọrọ igbaniwọle tuntun',
            "i have read the": 'Mo ti ka awọn',
            "terms and conditions": 'ofin ati ipo',
            "already have an account?": 'Ti ni iroyin tẹlẹ?',
            "optional": 'kii ṣe dandan',
            "please": 'Jowo',
            "wait": 'duro',
        },
        ig: {

            register: 'Debanye aha',
            login: 'Banye',
            "remember me": 'cheta m',
            "sign up": 'Debanye aha',
            "slidertextone": 'Ụlọ ahịa ahaziri ahazi na-enye gị ohere ịgakwuru onye ahịa gị ngwa ngwa',
            "slidertexttwo": 'ShopRecords na-enye gị ohere ileba anya na ụlọ ahịa gị ebe ọ bụla ị na-aga',
            "slidertextthree": 'Enweghị ọzụzụ siri ike achọrọ iji ngwa ShopRecords',
            "slidertextfour": 'Storelọ ahịa ọtụtụ, enweghị nsogbu, MTS na-ejikwa ọtụtụ ụlọ ahịa na-enweghị mgbu ọbụlagodi mgbe ha nwere ụdị ngwaahịa dị iche iche',
            "first name": 'Aha mbụ',
            "last name": 'Aha ikpeazụ',
            "other name": 'Aha etiti',
            "phone number": 'Nọmba ekwentị',
            "e-mail": 'Email',
            "secret pin": 'PIN nzuzo',
            "store or business name": 'Aha azụmahịa',
            "store type": 'Ụdị ụlọ ahịa',
            "country": 'Obodo, ala',
            "state": 'Steeti',
            "city": 'Obodo',
            "password": 'okwuntughe',
            "forgot password": 'Chefuru okwuntughe',
            "get new password": 'Nweta paswọọdụ ọhụrụ',
            "area": 'Mpaghara, uzo',
            "currency": 'Ego',
            "i have read the": 'Agụọla m',
            "terms and conditions": 'usoro na ọnọdụ',
            "already have an account?": 'Ị nwere akaụntụ?',
            "optional": 'ọ bụghị iwu',
            "please": 'biko',
            "wait": 'chere',
        },
    });
    i18n.locale = lang == null ? 'en' : lang;

    const translation = i18n.t(words.toLowerCase())
    return translation
}

export default Translate