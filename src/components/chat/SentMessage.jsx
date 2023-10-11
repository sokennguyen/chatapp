import { Grid,ListItemText } from "@mui/material"

const SentMessage = ({message}) => {
    return (
            <Grid container>
                <Grid item xs={7}/>
                <Grid item xs={5} sx={{border:1, background:'orange'}}>
                    <Grid item  xs={12}>
                        <ListItemText align="right" primary={message.content}></ListItemText>
                    </Grid>
                    <Grid item xs={12}>
                        <ListItemText align="right" secondary="10:30"></ListItemText>
                    </Grid>
                </Grid>
            </Grid>
    )
}

export default SentMessage