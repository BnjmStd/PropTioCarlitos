import { WhatsAppIcon, WhatsAppIconTitle } from "../../icons/Icons"
import { useState } from "react"
import "./wsp.css"
import { Link } from "react-router-dom";

export default function Wsp() {

    const [isChatOpen, setIsChatOpen] = useState(false)

    const handleClick = () => {
        setIsChatOpen(!isChatOpen)
    };

    // , SendIcon <SendIcon />
    return (
        <>
            <div
                className={`${isChatOpen ? 'click_class' : 'wsp-button '}`}
                onClick={isChatOpen ? () => {} : handleClick}
            >
                {isChatOpen ? (
                    <Link to={'/'}>
                        Abrir chat 
                    </Link>
                ) : (
                    <WhatsAppIcon width={32} height={32} title={''} />
                )}
            </div>

            {isChatOpen && (
                <div className="chat-box">
                    <label className="chat-label">
                        <span className="chat-header">
                            <WhatsAppIconTitle width={120} height={28} title={'WhatsApp'}/>
                            <button className="button-close" onClick={handleClick}>✖️</button>
                        </span>
                    </label>

                    <div className="chat-content">
                        <button 
                            class="whatsapp-button">
                                Somos Carlitos props 🏠,
                        ¿Cómo podemos ayudarte?</button>
                    </div>
                </div>
            )}
        </>
    );
}