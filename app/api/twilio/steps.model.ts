import { getLastSession, starSessionFlux, pushSession, updateSession } from "./services/session";
import { sendTwilioMessage } from "./services/twilio"
import { UserModel } from "../models/user.model";
import { HomeAction } from "../commands/services/home";
import { NextStep } from "./services/step";

export interface StepsModel {
    body: string,
    action_controller: string,
    action: (number: string, message: any, req?: any) => void,
}

export interface FluxModel {
    steps: StepsModel[],
    body: string
}

export const ChatSteps: FluxModel[] = [
    {
        body: 'Gracias por comunicarse con el Consultorio de la Dra. María Elena Zamora - Cirujana Mastóloga. Elija una de las siguientes opciones según la inquietud que tenga:',
        steps: [
            {
                body: '1. Ubicación del consultorio',
                action_controller: '1',
                action: (number) => {
                    sendTwilioMessage(number, 'Estamos ubicados en el Omni Hospital Torre Médica 2, piso 7, Consultorio 719. Dra.  María Elena Zamora V. 098 414 0739  https://maps.app.goo.gl/9reqQ1Bi2HdoUatK7?g_st=ic');
                },
            },
            {
                body: '2. Que incluye la consulta',
                action_controller: '2',
                action: (number)=>{
                    sendTwilioMessage(number, 'La consulta incluye valoración por parte de la Mastóloga, revisión de antecedentes y un rastreo ecográfico (no incluye ecografía, ni mamografía). De ser necesarios exámenes de imágenes, la doctora derivará a los especialistas adecuados.');
                },
            },
            {
                body: '3. Precio de la consulta',
                action_controller: '3',
                action: (number)=>{
                    sendTwilioMessage(number, 'El precio de la consulta es de $80.\nLos medios de pago son en efectivo, cheque o transferencia\nEscriba “inicio” si desea volver al menú principal.');
                },
            },
            {
                body: '4. Deseo agendar una consulta.',
                action_controller: '4',
                action: (number)=>{
                    sendTwilioMessage(number, 'Para agendar una cita acceda al siguiente enlace y elija el día y el horario disponibles.\n http://citafacil.ec/doctor/356 \n Escriba “inicio” si desea volver al menú principal.');
                },
            },
            {
                body: '5. Ya soy paciente',
                action_controller: '5',
                action: (number, message, req)=> NextStep(number, message, req),
            },
            {
                body: '6. Horarios de atención',
                action_controller: '6',
                action: (number)=>{
                    sendTwilioMessage(number, 'Martes, miércoles y jueves \nDe 08:00 a 10:00 y de 16:30 a 18:00.\nSujeto a cambios por disponibilidad de la doctora.\nEscriba “inicio” si desea volver al menú principal.');
                },
            },
            {
                body: '7. Acerca de',
                action_controller: '7',
                action: (number)=>{
                    sendTwilioMessage(number, 'Soy la Dra María Elena Zamora, Cirujana y Mastóloga y acá te cuento un poco de mi formación:\n• Me gradúe de médica en la Universidad Católica Santiago de Guayaquil (UCSG)\n• Realice mi formación como Cirujana General en SOLCA - Guayaquil y la UEES Obtuve el título de Especialista en Mastología en la Universidad de Montevideo UM (Uruguay E)\n• Me acredité como Cirujana Oncoplástica en el Instituto Alexander Fleming IAF (Argentina)\n• Me certifiqué en el área de Intervencionismo Mamario y diagnóstico por imágenes en CIP (Uruguay E)\n• Trabajo como Cirujana Mastóloga en Omni Hospital, Torre medica Il, piso 7, consultorio 719\n• Pertenezco a la Unidad de Mama de CENONI\n• Soy Cirujana Mastóloga en la Unidad de Mastologia de SOLCA/Guayaquil\n• Miembro de FLAM, AECIMA y SEPAM\nMi frase favorita: "La detección precoz es la mejor arma" \n Escriba “inicio” si desea volver al menú principal.');
                },
            }
        ]
    },
    {
        body: 'Desea comunicarse con la doctora directamente:',
        steps: [ 
            {
                body: '1. Si',
                action_controller: '1',
                action: (number) => {
                    sendTwilioMessage(number, 'Dra. María Elena Zamora respondera tu mensaje lo antes posible \n Escriba “inicio” si desea volver al menú principal.');
                },
            },
            {
                body: '2. No',
                action_controller: '2',
                action: (number, message, req)=> HomeAction(number, message, req),
            }
        ]
    }
];

