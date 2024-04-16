import React, { useState, useEffect } from 'react';
import { IonActionSheet, IonButton, IonCol, IonContent, IonItem, IonList, IonPage, IonRouterLink, IonRow, IonSearchbar } from '@ionic/react';
import Header from '../components/Header';

const Devotional: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedGod, setSelectedGod] = useState<string>('All');
  
  const storedLanguage = localStorage.getItem("lang") || "english";
  const [selectedLanguage, setSelectedLanguage] = useState<string>(storedLanguage); // Default language is English
  const [details, setDetails] = useState([
    { mantra: "Hanuman Chalisa", god: "Hanuman Ji" },
    { mantra: "Gayatri Mantra", god: "" },
    { mantra: "Shri Ganpati Atharvashirsha", god: "Ganesh Ji" },
    { mantra: "Shri Ramrksha stotra", god: "Shri Ram" },
    { mantra: "Maruti stotra", god: "Hanuman Ji" },
    { mantra: "Madhurashtakam", god: "" },
    { mantra: "Shri Ram Stuti", god: "Shri Ram" },
    { mantra: "Bajrang Baan", god: "Hanuman Ji" },
    { mantra: "Hanuman Ji Aarti", god: "Hanuman Ji" },
    { mantra: "Sankat Mochan Hanumanashtak", god: "Hanuman Ji" },
  ]);

  useEffect(() => {
    // Load selected language from localStorage on component mount
    const storedLanguage = localStorage.getItem('lang');
    if (storedLanguage) {
      setSelectedLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    // Listen for changes in selectedLanguage and update localStorage
    localStorage.setItem('lang', selectedLanguage);
  }, [selectedLanguage]);

  const handleSearchTextChange = (e: CustomEvent) => {
    setSearchText(e.detail.value);
  };

  const handleGodSelection = (god: string) => {
    setSelectedGod(god);
    setIsOpen(false);
  };

  const filteredDetails = details.filter(entry => {
    const godMatch = selectedGod === 'All' || entry.god === selectedGod;
    const searchTextMatch = entry.mantra.toLowerCase().includes(searchText.toLowerCase());

    return godMatch && searchTextMatch;
  }).sort((a, b) => a.mantra.localeCompare(b.mantra));

  const handleLanguageChange = (e: any) => {
    const selectedLang = e.detail.value;
    setSelectedLanguage(e.detail.value);
    localStorage.setItem("lang",e.detail.value);
    window.location.reload();  
  };

const languageStrings: { [key: string]: any } = {
  english: {
    ContentName: "Refer and Earn",
    termsAndConditions: "Terms & Conditions",
    receiveNotifications: "Receive Notifications",
    language: "Language",
    logout: "Logout"
  },
  // Add strings for other supported languages here
  hindi: {
    ContentName: "रेफर और कमाएं",
    termsAndConditions: "नियम और शर्तें",
    receiveNotifications: "सूचनाएँ प्राप्त करें",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  bengali: {
    referAndEarn: "রেফার করুন এবং আয় করুন",
    termsAndConditions: "শর্ত এবং পরিষেবার শর্তাবলী",
    receiveNotifications: "বিজ্ঞপ্তি পেতে অনুমতি দিন",
    language: "ভাষা",
    logout: "প্রস্থান"
  },
  marathi: {
    referAndEarn: "संदर्भ द्या आणि कमावा",
    termsAndConditions: "अटी आणि अटी",
    receiveNotifications: "सूचना मिळवा",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  telugu: {
    referAndEarn: "మర్చిపోయించుకోండి మరియు సంపాదించండి",
    termsAndConditions: "షరతులు మరియు షరతులు",
    receiveNotifications: "నోటిఫికేషన్లను స్వీకరించండి",
    language: "భాష",
    logout: "లాగ్ అవుట్"
  },
  tamil: {
    referAndEarn: "பரிந்துரை செய்யுங்கள் மற்றும் சம்பாதிக்கவும்",
    termsAndConditions: "விதிமுறைகள் மற்றும் நிபந்தனைகள்",
    receiveNotifications: "அறிவிப்புகளைப் பெறுங்கள்",
    language: "மொழி",
    logout: "வெளியேறு"
  },
  gujarati: {
    referAndEarn: "સૂચવો અને કમાવો",
    termsAndConditions: "શરતો અને નિયમો",
    receiveNotifications: "સૂચનાઓ મેળવો",
    language: "ભાષા",
    logout: "લૉગ આઉટ"
  },
  urdu: {
    referAndEarn: "حوالہ دیں اور کمائیں",
    termsAndConditions: "شرائط و ضوابط",
    receiveNotifications: "اطلاعات حاصل کریں",
    language: "زبان",
    logout: "لاگ آؤٹ"
  },
  kannad: {
    referAndEarn: "ಸೂಚಿಸಿ ಮತ್ತು ಗಳಿಸಿ",
    termsAndConditions: "ಷರತ್ತುಗಳು ಮತ್ತು ನಿಯಮಗಳು",
    receiveNotifications: "ಅಧಿಸೂಚನೆಗಳನ್ನು ಸ್ವೀಕರಿಸಿ",
    language: "ಭಾಷೆ",
    logout: "ಲಾಗ್ ಔಟ್"
  },
  odia: {
    referAndEarn: "ସୂଚନା ଦିଅନ୍ତୁ ଏବଂ ପାଇଁ ଗନ୍ତୁ",
    termsAndConditions: "ଶର୍ତ ଓ ଶ୍ରେଣୀବନ୍ଧ",
    receiveNotifications: "ବିଜ୍ଞପ୍ତି ପାଇଁ ମନ୍ତବ୍ୟ",
    language: "ଭାଷା",
    logout: "ଲଗ୍ ଆଉଟ୍"
  },
  malayalam: {
    referAndEarn: "റഫറുചെയ്യുക മറ്റുള്ളവരുകൾക്കും വരുമാനം ലഭിക്കാൻ",
    termsAndConditions: "നിബന്ധനകൾ മറ്റുള്ളവരുകൾക്കും നിയമങ്ങൾ",
    receiveNotifications: "അറിയിപ്പ് ലഭിക്കുക",
    language: "ഭാഷ",
    logout: "ലോഗൗട്ട്"
  },
  punjabi: {
    referAndEarn: "ਰੈਫਰ ਕਰੋ ਅਤੇ ਕਮਾਓ",
    termsAndConditions: "ਸ਼ਰਤਾਂ ਅਤੇ ਹੋਰਾਂ",
    receiveNotifications: "ਸੂਚਨਾਵਾਂ ਪ੍ਰਾਪਤ ਕਰੋ",
    language: "ਭਾਸ਼ਾ",
    logout: "ਲ੉ਗਆਊਟ"
  },
  assamese: {
    referAndEarn: "ইয়াৰে আৰু উপার্জন কৰক",
    termsAndConditions: "শৰ্ত আৰু শ্ৰেণীবদ্ধ",
    receiveNotifications: "বাণীসমূহ পাওক",
    language: "ভাষা",
    logout: "লগ আউট"
  },
  maithili: {
    referAndEarn: "रेफर करें और कमाएं",
    termsAndConditions: "नियम और शर्तें",
    receiveNotifications: "सूचनाएँ प्राप्त करें",
    language: "भाषा",
    logout: "लॉग आउट"
  },
  meitei: {
    referAndEarn: "রেফার কৰি আৰু লাভ কৰক",
    termsAndConditions: "শর্তা আৰু নিয়মাবলি",
    receiveNotifications: "বাণী পাওক",
    language: "ভাষা",
    logout: "লগ আউট"
  },
  sanskrit: {
    referAndEarn: "संदर्भ दीयताम् अर्थं लभेत",
    termsAndConditions: "नियमा च शर्ता च",
    receiveNotifications: "सुचनानि प्राप्तव्यानि",
    language: "भाषा",
    logout: "निसृग्धिर्मार्गः"
  },
};

function capitalizeFirstLetter(str:any) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const strings = languageStrings[selectedLanguage] || languageStrings['english'];

  return (
    <IonPage>
      <Header title={"Devotional"} />
      <IonContent>
        <IonRow className="ion-align-items-center">
          <IonCol size="8">
            <IonSearchbar value={searchText} onIonInput={handleSearchTextChange} />
          </IonCol>
          <IonCol size="4">
            <IonButton expand="block" onClick={() => setIsOpen(true)}>
              {selectedGod !== 'All' ? `${selectedGod}` : 'All'}
            </IonButton>
          </IonCol>
        </IonRow>
        <IonActionSheet
          isOpen={isOpen}
          buttons={[
            {
              text: 'All',
              handler: () => handleGodSelection('All')
            },
            {
              text: 'Hanuman Ji',
              handler: () => handleGodSelection('Hanuman Ji')
            },
            {
              text: 'Ganesh Ji',
              handler: () => handleGodSelection('Ganesh Ji')
            },
            {
              text: 'Shri Ram',
              handler: () => handleGodSelection('Shri Ram')
            },
          ]}
          onDidDismiss={() => setIsOpen(false)}
        ></IonActionSheet>
        <IonList>
          {filteredDetails.map((entry: any, index: any) => (
            <IonRouterLink key={index} href={`/details/${entry.mantra}`}>
              <IonList lines="full">
                <IonItem>
                  {/* Display mantra according to selected language */}
                  <span slot="start">{entry.mantra}</span>
                </IonItem>
              </IonList>
            </IonRouterLink>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Devotional;
