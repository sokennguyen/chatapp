import { Grid,ListItemText } from "@mui/material"

const IncommingMessage = ({message}) => {
    return (
        <Grid container>
            <Grid item xs={5} sx={{border:1, background:'grey'}}>
                <Grid item  xs={12}>
                        <ListItemText align="left" primary={message.content}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align="left" secondary="10:30"></ListItemText>
                    </Grid>
            </Grid>
        </Grid>
    )
}

export default IncommingMessage