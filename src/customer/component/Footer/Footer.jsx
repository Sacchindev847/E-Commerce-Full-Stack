import { Button, Grid, Typography } from "@mui/material";
import react from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="bg-black text-white mt-10"
        container
        sx={{ bgcolor: "black", color: "white", py: 3 }}
      >
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              About
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Blog
            </Button>
          </div>

          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Press
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Jobs
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Partners
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solution
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Markiting
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Analytics
            </Button>
          </div>

          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Commerce
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Insights
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Support
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Guides
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              API Status
            </Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6">
              Claim
            </Button>
          </div>

          <div>
            <Button className="pb-5" variant="h6">
              Privicy
            </Button>
          </div>

          <div>
            {" "}
            <Button className="pb-5" variant="h6">
              Terms
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
