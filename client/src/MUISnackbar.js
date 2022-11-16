import { Snackbar, Alert } from '@mui/material'

export const MUISnackbar = ({emailSuccess, emailError, setEmailSuccess, setEmailError}) => {
    return (
        <>
         <Snackbar 
        open={emailSuccess} 
        autoHideDuration={8000} 
        sx={{width: '90%',
        margin: '0 auto'}}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        onClose={()=>{setEmailSuccess(false)}}>
            <Alert severity="success"
            autoHideDuration={2000} 
            sx={{width: '100%'}}
            >Email Sent</Alert>
        </Snackbar>
        <Snackbar 
        open={emailError} 
        autoHideDuration={4000} 
        sx={{width: '90%',
        margin: '0 auto'}}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center'
        }}
        onClose={()=>{setEmailError(false)}}>
            <Alert severity="error"
            autoHideDuration={6000} 
            sx={{width: '100%'}}
            >Error sending email - please try again or email me directly at ssbpbarath@gmail.com</Alert>
        </Snackbar>
        </>
    )
}