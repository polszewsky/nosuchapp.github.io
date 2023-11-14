import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import TrainIcon from '@mui/icons-material/Train';
import PedalBikeIcon from '@mui/icons-material/PedalBike';
import AirplanemodeActiveIcon from '@mui/icons-material/AirplanemodeActive';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import traveled from "../../components/img/traveled.jpg";

export default function PastAndFutureTravels({ showPoints = false }) {
  const { pastTravels = [] } = useSelector((state) => state.userTravel);

  return (
    <Grid
      container
      item
      direction="row"
      spacing={0}
      sx={{ marginTop: "-2rem" }}
    >
      <Grid item xs={12}>
        <CardMedia
          component="img"
          height="256"
          width="256"
          image={traveled}
          alt="Paella dish"
          sx={{ objectFit: "contain" }}
        />
      </Grid>

      {/** Tables */}
      <Grid item xs={12}>
        {pastTravels.length > 0 &&
          pastTravels.map((element, index) => (
            <Accordion spacing={3}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {element.type === "train" && <TrainIcon sx={{margin: 1}} color="primary" />}
                {element.type === "bike" && <PedalBikeIcon sx={{margin: 1}} color="primary" />}
                {element.type === "plane" && <AirplanemodeActiveIcon sx={{margin: 1}} color="primary" />}
                <Typography item>
                  {element.from } <ArrowRightAltIcon color="default" sx={{ marginRight: 1, marginLeft: 1}} />{element.to}
                  <CalendarMonthIcon color="default" sx={{ marginLeft: 3}} />  {element.date}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  <b>C02: </b>
                  {element.CO2} kg
                </Typography>
                <Typography>
                  <b>Transportation:</b> {element.type}
                </Typography>
                  <CardMedia
                    component="img"
                    height="1024"
                    width="1024"
                    image={element.image}
                    alt="Paella dish"
                    sx={{ objectFit: "contain" }}
                  />
              </AccordionDetails>
            </Accordion>
          ))}
      </Grid>
    </Grid>
  );
}
