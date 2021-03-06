import { useState } from "react"
import { ChatTeardropDots } from "phosphor-react"

export function Widget(){
    const [isWidgetOpen, setIsWidgetOpen] = useState(false)

    const toggleWidgetVisibility = () => {
        setIsWidgetOpen(!isWidgetOpen)
    }
    return (
        <div className="absolute bottom-5 right-5">
            {isWidgetOpen && <p>Hello World</p>}
            <button onClick={} className="bg-brand-500 rounded-full px-3 h-12 text-white flex items-center group">
                <ChatTeardropDots className="w-6 h-6"/>
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-linear">
                    <span className="pl-2">
                        Feedback
                    </span>
                </span>
            </button>
        </div>
    )
}