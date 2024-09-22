import IonIcon from "@reacticons/ionicons"
import { ReactElement } from "react"

export interface TopSideBarProps {
    sideBarChildren: React.ReactElement
}
export interface TopSideBarListProps{
    name: string,
    icon: ReactElement,
}

export const TopSideBarListHeader = [
    {
        name: 'Dashboard',
        icon: <IonIcon style={{color: '#2b2d42', fontSize: '1.2rem'}}  name="home-outline"/>,
    },
    {
        name: 'Ver en lista',
        icon: <IonIcon style={{color: '#2b2d42', fontSize: '1.2rem'}}  name="list-outline"/>,
    }
    
]
export const TopSideBarListUser = [
    {
        name: 'Recargar',
        icon: <IonIcon style={{color: '#2b2d42', fontSize: '1.2rem'}}  name="cash-outline"/>,
    },
    {
        name: "Salir",
        icon: <IonIcon style={{color: '#ef233c', fontSize: '1.2rem'}}  name="log-out-outline"/>,
    }
]