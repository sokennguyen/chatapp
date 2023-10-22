import { Box, Button, Grid, Input } from "@mui/material"

const InputField = () => (
    <Box display={"flex"} className="input-field">
        <Box width={1} m={1}>
            <Input fullWidth placeholder="Type a message" />
        </Box>
        <Box m={1}>
            <Button sx={{width:'10px'}} variant="outlined">
                go
            </Button>
        </Box>
    </Box>
)

export default InputField