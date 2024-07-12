import { Calendar, MapPin, MoveRight, Settings2, X } from "lucide-react"
import { Button } from "../../../components/button"
import { useState } from "react"
import { DateRange, DayPicker } from "react-day-picker"
import { format } from "date-fns"
import "react-day-picker/dist/style.css";

interface DestinationAndDateStepProps{
    isGuestsInputOpen: boolean
    closeGuestsInput: () => void
    openGuestsInput: () => void
    setDestination: (destination: string) => void
    setEventStartAndDates: (dates:DateRange | undefined) => void
    eventStartAndDates: DateRange | undefined
}

export function DestinationAndDateStep({
closeGuestsInput,
isGuestsInputOpen,
openGuestsInput,
setDestination,
setEventStartAndDates,
eventStartAndDates,
}:DestinationAndDateStepProps){
    const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)

    function openDatePicker(){
        return setIsDatePickerOpen(true)
    }
    function closeDatePicker(){
        return setIsDatePickerOpen(false)
    }

    const displayedDate = eventStartAndDates && eventStartAndDates.from && eventStartAndDates.to 
    ? format(eventStartAndDates.from, "d' de ' LLL").concat(' até ').concat(format(eventStartAndDates.to, "d' de 'LLL"))
    : null

    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
                <MapPin className="size-5 text-zinc-400" /> {/* icone que foi importado */}
                <input 
                disabled={isGuestsInputOpen} 
                className="text-zinc-400 bg-transparent text-lg outline-none flex-1" 
                type="text" 
                placeholder="Para onde você vai?"
                onChange={event => setDestination(event.target.value)}></input>
            </div>

            <button onClick={openDatePicker} disabled={isGuestsInputOpen} className="flex items-center gap-2 text-left">
                <Calendar className="size-5 text-zinc-400"/>
                <span className="text-zinc-400 text-lg w-52">
                    {displayedDate || 'Quando?'}
                </span>
            </button>

            {isDatePickerOpen && (
                <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
                <div className="w-[320px] rounded-xl py-5 shadow-shape bg-zinc-900 space-y-4">
                    
                    <div className="space-y-2 px-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold">Selecione a data</h2>
                            <button onClick = {closeDatePicker}>
                                <X className="size-5 text-zinc-400" />
                            </button>
                        </div>
                    </div>

                    <div className="w-full h-px bg-zinc-800"></div>

                    <DayPicker mode="range" selected={eventStartAndDates} onSelect={setEventStartAndDates} />

                </div>
            </div>
            )}
            
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