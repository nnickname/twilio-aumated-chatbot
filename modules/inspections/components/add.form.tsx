'use client';
import { Accordion, AccordionDetails, AccordionSummary, Button, Card, CardActionArea, CardContent, CardMedia, List, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface ItemInspectionSource{
    image: string,
    description: string
}
interface AddInspectionSource {
    name: string,
    items: ItemInspectionSource[]
}
const AddInspectionForm = () => {
    const [InspectionList, setInspectionList] = useState<AddInspectionSource[]>([{
        name: 'Ejemplo: Habitación',
        items: []
    }]);
    const formatNameInspection = () => {
        var newList = [...InspectionList];

        newList.push({
            name: '',
            items: []
        });        
        setInspectionList(newList);
    };
    const onChangeNameInspection = (index: number, value: string) => {
        var newList = [...InspectionList];
        if(index !== -1){
            newList[index].name = value;
            setInspectionList(newList);
        }
    }
    return <div>
        <Button style={{marginLeft: 'auto'}} type='button' onClick={formatNameInspection} color='primary' variant='contained'> Nueva categoria</Button>
        <List dense sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {InspectionList.map((value, index: number) => {
                const labelId = `inputname-list-secondary-input-${index}`;
                return (
                    <Accordion style={{width: '100%'}} >
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                        <TextField color='secondary' fullWidth placeholder={value.name} name={labelId} onChange={(e) => onChangeNameInspection(index, e.target.value)} id="standard-basic" label="Nombre de categoria" variant="standard" />
                        </AccordionSummary>
                        <AccordionDetails>
                        <Stack style={{overflowX: 'scroll'}} direction="row" spacing={2}>
                            
                        </Stack>
                        </AccordionDetails>
                    </Accordion>

                
                );
            })}
        </List>
    </div>
}
export default AddInspectionForm;