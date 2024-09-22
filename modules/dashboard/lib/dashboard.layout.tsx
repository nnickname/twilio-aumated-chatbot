'use client';
import  Grid  from "@mui/material/Grid2"
import { CardAddInspection, CardInspection } from "../components/card.inspection";


const DashboardAppLayout = () => {
    return <div >
        <Grid alignContent='center' width='100%' container rowSpacing={2} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
            <CardAddInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>
            <CardInspection/>       
        </Grid>
    </div>
}
export default DashboardAppLayout;