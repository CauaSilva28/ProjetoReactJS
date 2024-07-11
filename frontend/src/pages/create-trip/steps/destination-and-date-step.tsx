import { Calendar, MapPin, MoveRight, Settings2 } from "lucide-react"
import { Button } from "../../../components/button"

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
}

export function DestinationAndDateStep({
closeGuestsInput,
isGuestsInputOpen,
openGuestsInput,
}:DestinationAndDateStepProps){
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" /> {/* icone que foi importado */}
                <input disabled={isGuestsInputOpen} className="text-zinc-400 bg-transparent text-lg outline-none flex-1" type="text" placeholder="Para onde você vai?"></input>
            </div>

            <div className="flex items-center gap-2">
                <Calendar className="size-5 text-zinc-400"/>
                <input 
                disabled={isGuestsInputOpen} 
                className="text-zinc-400 bg-transparent text-lg w-40 outline-none" 
                type="text" 
                placeholder="Quando?">
                </input>
            </div>

            <div className="w-px h-6 bg-zinc-800"></div>

            {/* Funções javascript dentro da estrutura HTML é chamada entre {} */}
            {isGuestsInputOpen /* if */ ? (

                /* Botão originial sem a realização de variantes

                <button onClick={closeGuestsInput} className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700">
                    Alterar local/data
                    <Settings2 className="size-5"/>
                </button> 
                
                */

                /* Botão utilizando variantes */
                <Button onClick={closeGuestsInput} variant="secundary">
                    Alterar local/data
                    <Settings2 className="size-5"/>
                </Button> 
            ) /* else */ : (

                /* 
                
                Botão originial sem a realização de variantes
                <button onClick={openGuestsInput} className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                    Continuar
                    <MoveRight className="size-5 text-lime-950"/>
                </button> 
                
                */
                
                /* Botão utilizando variantes */
                <Button onClick={openGuestsInput} variant="primary">
                    Continuar
                    <MoveRight className="size-5 text-lime-950"/>
                </Button> 
            )}
        </div>
    )
}