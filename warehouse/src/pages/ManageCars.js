import Manager from "./Manage";
import { Toolbar, Container, Box, Grid, Paper, } from "@mui/material";
import Warehouse from "../components/warehouse";

export default function ManageCars() {
    return(
        <Manager>
            <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Warehouse/>
                </Paper>
              </Grid>
              {/* Recent Deposits */}


              {/* <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Repairs />
                </Paper>
              </Grid> */}
            </Grid>

          </Container>
        </Box>

        </Manager>
    )
}