import { WhatsAppIcon } from "../../icons/Icons"
import { useState } from "react"

export default function Wsp() {

    const [isChatOpen, setIsChatOpen] = useState(false)

    const handleClick = () => {
        setIsChatOpen(!isChatOpen)
    };

    return (
        <>
            <div 
                className={`fixed z-10 bottom-6 right-6 bg-green-500 rounded-full p-3 text-white shadow-lg hover:bg-green-600 transition duration-300 cursor-pointer animation-chat`}
                onClick={handleClick}
            >
                <WhatsAppIcon width={32} height={32} />
            </div>
            
            {isChatOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-80 bg-[#ECE5DD] shadow-lg rounded-lg p-4 animation-chatOpen">
                    <label>
                        <h2 className="text-lg font-bold mb-4"><WhatsAppIcon width={16} height={16}/>WhatsApp</h2>
                    </label>
                    
                    <div className="flex flex-col gap-2">
                        <p>Hola! ¿En qué puedo ayudarte?</p>
                    </div>
                </div>
            )}
        </>
    );
}