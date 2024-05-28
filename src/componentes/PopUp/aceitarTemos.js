import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function TermosDeUso() {
 
  const [open, setOpen] = React.useState(localStorage.getItem("nome") === "true");

  console.log(open);

  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("nome", "false");
  };

  return (
    <React.Fragment>
      {open && (
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"MONITORIZAÇÃO DE COOKIES INVISTACG"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Ao selecionar "Aceitar monitorização", você autoriza a INVISTACG a usar cookies e tecnologias semelhantes para coletar informações sobre seu dispositivo e navegador. 
              Isso nos permite monitorar sua atividade para fins funcionais e de marketing.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} autoFocus>
              Concordar
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </React.Fragment>
  );
}
