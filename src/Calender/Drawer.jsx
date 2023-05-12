import * as React from "react";

// ** MUI Imports
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { IconButton, TextField } from "@mui/material";

// ** Types Imports
import { Grid, MenuItem } from "@mui/material";
import { useForm } from "react-hook-form";

const Header = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const Footer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(3, 4),
  justifyContent: "space-between",
  backgroundColor: theme.palette.background.default,
}));

const EventDrawer = (props) => {
  // ** Props
  const { open, toggle, field, setField, setValue, getValues } = props;

  const defaultValues = {
    title: field.title,
    start: field.start,
    end: field.end,
  };

  const onSubmit = async (data) => {
    // if ("dsfd") {
    //   await updateStudent(data)
    // } else {
    //   await addStudent(data)
    // }
  };

  const handleClose = () => {
    // reset();
    toggle();
  };

  React.useEffect(() => {
    setValue("title", getValues("title"));
  }, []);

  return (
    <Drawer
      open={open}
      anchor="right"
      variant="temporary"
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ "& .MuiDrawer-paper": { width: 700 } }}
    >
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      <Header>
        <Typography variant="h6">{"Add"}</Typography>
        <IconButton
          fontSize="small"
          onClick={handleClose}
          sx={{ cursor: "pointer" }}
        />
      </Header>
      <Box sx={{ p: 5 }}>
        <Grid container spacing={12}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              // name="title"
              // label="Title"
              // placeholder="Enter Title"
              type="text"
              defaultValue={defaultValues?.title}
            />
          </Grid>
          {/* <Grid item xs={12} sm={6}>
            <InputField
              name="last_name"
              label="Last Name"
              placeholder="Last Name"
              type="text"
              //  @ts-ignore
              control={control}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <InputField
              name="email"
              label="email"
              placeholder="Enter Time"
              type="email"
              //  @ts-ignore
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <InputField
              name="phone"
              label="Enter Phone"
              placeholder="Enter Phone"
              type="number"
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Select
              name="gender"
              label="Gender"
              placeholder="Gender"
              control={control}
            >
              <MenuItem value="MALE">Male</MenuItem>
              <MenuItem value="FEMALE">Female</MenuItem>
            </Select>
          </Grid> */}
        </Grid>
      </Box>
      <Footer sx={{ position: "absolute", bottom: "0", width: "100%" }}>
        <Button
          size="large"
          variant="outlined"
          color="secondary"
          onClick={handleClose}
        >
          Cancel
        </Button>
        {/* <LoadingButton
          sx={{ mr: 3 }}
          loading={store.status === "pending"}
          disabled={store.status === "pending"}
          loadingPosition="end"
          size="large"
          variant="contained"
          type="submit"
        >
          Submit
        </LoadingButton> */}
      </Footer>
      {/* </form> */}
    </Drawer>
  );
};

export default EventDrawer;
