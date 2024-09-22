import { HomeAction } from "./services/home"

interface CommandsModel  {
    action_controller: string[],
    action: (number: string, message: any, req: any) => void
}

export const CommandsAvailable: CommandsModel[] = [
    {
        action_controller: ['Inicio', 'inicio', 'home', 'volver', 'Volver', 'Home'],
        action:(number, message, req) =>  HomeAction(number, message, req)
    }
]