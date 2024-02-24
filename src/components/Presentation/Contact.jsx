import s from './contact.module.css'
import emailjs from '@emailjs/browser'
import { useRef, useState, useEffect } from "react"
import ReCAPTCHA from 'react-google-recaptcha'
import { useDarkMode } from '/src/contexts/DarkModeContext'


export default function Contact(){
    
    const { darkMode } = useDarkMode()

    const formRef = useRef(null)
    const mailSentRef = useRef(null)

    const [mailSent, setMailSent] = useState(null)
    const [mailDivDesapear, setMailDivDesapear] = useState(false)

    const [nameIstLongEnough, setNameIstLongEnough] = useState(null)
    const [nameLongEnough, setNameLongEnough] = useState(null)

    const [emailIsValid, setEmailIsValid] = useState(null)
    const [emailValid, setEmailValid] = useState(null)

    const [messageLengthOk, setMessageLengthOk] = useState(null)
    const [messageLongEnough, setMessageLongEnough] = useState(null)

    const [inputsFormOk, setInputFormOk] = useState(false)
    const [sendingMail, setSendingMail] = useState(false)
    const [errorSendingMail, setErrorSendingMail] = useState(false)

    const [firstLoad, setFirstLoad] = useState(true)
    const [isBlue, setIsBlue] = useState(true)
    const [recaptchaOk, setRecaptchaOk] = useState(false)
    const captchaRef = useRef(null)
    const handleCaptchaVerification = () => {
        setRecaptchaOk(!recaptchaOk)
        setIsBlue(!isBlue)
    }
    
    useEffect(()=>{
        const aroundLine = document.querySelector('#aroundLine')
        if(firstLoad){
            setTimeout(()=>{
                aroundLine.background = 'var(--blue)'
                setFirstLoad(false)
            }, 1000)
            return
        }
        aroundLine.style.background = isBlue ? 'var(--blue)' : 'var(--green)'
    }, [isBlue, firstLoad])    


    useEffect(() =>{
        if(nameIstLongEnough && emailIsValid && messageLengthOk && recaptchaOk){
            setInputFormOk(true)
        }else{setInputFormOk(false)}
    }, [nameIstLongEnough, emailIsValid, messageLengthOk, recaptchaOk])
    
    const sendMail = e =>{
        e.preventDefault()

        if(!inputsFormOk){return}

        setSendingMail(true)

        setMailSent(null); setMailDivDesapear(null); setNameIstLongEnough(null); setNameLongEnough(null); setEmailIsValid(null); 
        setEmailValid(null); setMessageLengthOk(null); setMessageLongEnough(null); setInputFormOk(false); setRecaptchaOk(false);
        
        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
        .then(response => {
            setMailSent(true)
            // console.log('Email envoyé avec succès !', response)
            setTimeout(()=>{
                formRef.current.reset()
                captchaRef.current.reset()
                setSendingMail(false)
                setIsBlue(true)
            }, 400)
        }).catch(error => {setMailSent(false); setErrorSendingMail(true); console.error('Erreur lors de l\'envoi de l\'email :', error)})
        setTimeout(()=>{setMailDivDesapear(true)}, 3000)

        document.querySelector('#sendBtn').blur()
    }


    const [buttonText, setButtonText] = useState('COMPLÉTEZ SVP');
    const handleMouseEnter = () => { if(!inputsFormOk){setButtonText('FORMULAIRE INVALIDE')}}
    const handleMouseLeave = () => { if(!inputsFormOk){setButtonText('COMPLÉTEZ SVP')}}


    const checkUsername = username =>{
        if(username.length > 1){setNameIstLongEnough(true); setNameLongEnough(true)}
        else{setNameIstLongEnough(false)}
    }

    const checkEmail = email =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(email)){setEmailIsValid(true); setEmailValid(true)}
        else{setEmailIsValid(false)}
    }

    const checkMessage = message =>{
        if(message.length >= 15){setMessageLengthOk(true); setMessageLongEnough(true)}
        else{setMessageLengthOk(null)}
    }

    // this 3 next are on onBlur (loss focus on input), the others are onChange
    const checkUsernameOut = username =>{
        if(username.length > 1){setNameLongEnough(true)}
        else{setNameLongEnough(false)}
    }

    const checkEmailOut = email =>{
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(emailRegex.test(email)){setEmailValid(true)}
        else{setEmailValid(false)}
    }

    const checkMessageOut = username =>{
        if(username.length >= 15){setMessageLongEnough(true)}
        else{setMessageLongEnough(false)}
    }

    return(<div className={`${darkMode} ${s.formContact}`}>
                {mailSent && <div ref={mailSentRef} className={`${s.mailSent} ${mailDivDesapear ? s.hide : ""}`}>Votre demande a étée envoyée</div>}
                {mailSent === false && <div ref={mailSentRef} className={`${s.mailNotSend} ${mailDivDesapear ? s.hide : ""}`}>Votre demande n'a pas pu aboutir !<br />Si l'erreur persiste,veuillez nous contacter par téléphone.</div>}
                
                <form onSubmit={ e =>sendMail(e)} className={s.form} ref={formRef} noValidate>
                    <label htmlFor="username">Nom</label>
                    <input name="username" id='name' type="text" minLength="2" maxLength="50" placeholder='Paul Martin' className={`mb-2 ${s.username} ${nameIstLongEnough && s.inputOkay} ${nameLongEnough === false && s.inputNotOkay} ${darkMode ? '' : s.light}`} onChange={ e => checkUsername(e.target.value)} onBlur={ e => checkUsernameOut(e.target.value)} />
                    {!nameLongEnough && nameLongEnough !== null && <p className={s.errorP}>Entre 2 et 50 caractères requis</p>}
                    
                    <label htmlFor="email">Email</label>
                    <input name="email" type="text" id='email' className={`mb-2 ${emailIsValid && s.inputOkay} ${emailValid === false && s.inputNotOkay} ${darkMode ? '' : s.light}`} onChange={ e => checkEmail(e.target.value)} onBlur={ e => checkEmailOut(e.target.value)} placeholder='paul.martin@gmail.com'/>
                    {!emailValid && emailValid !== null && <p className={s.errorP}>Format attendu : 'exemple@gmail.com'</p>}

                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="2" minLength="15" maxLength="500" id={messageLengthOk && 'message'} className={`${messageLengthOk && s.inputOkay} ${messageLongEnough === false && s.inputNotOkay} ${darkMode ? '' : s.light}`} onChange={ e => checkMessage(e.target.value)} onBlur={ e => checkMessageOut(e.target.value)} title='Veuillez décrire votre demande : entre 15 et 500 caractères' style={{outline:'none'}} placeholder="Bonjour,
Êtes vous disponible... (Oui !)" />
                    {!messageLongEnough && messageLongEnough !== null && <p className={`${s.errorP} ${s.errorMessage}`}>Décrivez votre demande: min 15 caractères</p>}
                    

                    {/* <label htmlFor="file">Image <span>optionnel, 500kb max.</span></label>
                    <input type="file" name='file' /> */}
                    <div style={{position: 'relative', height:'78.3px'}}>
                        <ReCAPTCHA ref={ el => captchaRef.current = el} sitekey="6Ld6ZJAnAAAAAIriI7n7-n1H2P-juUxP17QAyV8n" onChange={handleCaptchaVerification} style={{transform: 'scale(0.74) translate(-38.5px, 0.5px)'}} />
                        <div id='aroundLine' className={s.aroundLine}></div>
                    </div>
                    <button type='submit' className={`${s.btn} ${sendingMail ? `` : inputsFormOk ? `` : `${s.deactivatedBtn}`} ${darkMode ? '' : s.light}`} style={{fontFamily: 'initial'}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} id='sendBtn' >
                        {sendingMail ? 'Envoie en cours' : errorSendingMail ? 'Echec de l\'envoie' : inputsFormOk ? 'ENVOYER VOTRE DEMANDE' : buttonText}
                    </button>
                </form>
            </div>
    )
}
