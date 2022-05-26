import {
  Dialog,
  DialogContent,
  Typography
} from "@mui/material";
import GridLoader from "react-spinners/GridLoader";
export const ModalLoading = (props) => {
  return (
    <>
      <Dialog
        open={props.open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent align="center" style={{ opacity: .8 }}>
          <Typography component="p" variant="subtitle1" align="center" sx={{ pt: 1 }}>
            {props.message}
          </Typography>
          <GridLoader size={15} align="center" color="#f26122" />
        </DialogContent>
      </Dialog>
    </>
  );
}