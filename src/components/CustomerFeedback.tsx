import {
  Avatar,
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import StarIcon from "@mui/icons-material/Star";

const CustomerFeedback: React.FC = () => {
  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  return (
    <Grid item xs={12} md={4}>
      <Item>
        <Typography variant="h6" textAlign={"start"}>
          Customer's Feedback
        </Typography>
        <List sx={{ height: "80vh", overflow: "auto" }}>
          {["Jenny Wilson", "Dianne Russell", "Devon Lane"].map(
            (name, index) => (
              <Box key={index}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>{name[0]}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={name}
                    secondary={
                      <>
                        <Box display="flex" alignItems="center">
                          {Array.from({ length: 3 }).map((_, starIndex) => (
                            <StarIcon key={starIndex} color="warning" />
                          ))}
                          {Array.from({ length: 2 }).map((_, starIndex) => (
                            <StarIcon key={starIndex} color="primary" />
                          ))}
                        </Box>
                        <Typography sx={{ fontSize: "13.1px" }}>
                          {index === 0
                            ? "The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome. I had a burger with greens (gluten-free) which was also very good. They were very conscientious about gluten allergies."
                            : index === 1
                            ? "We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service"
                            : "Normally wings are wings, but theirs are lean meaty and tender, and the sauces are top-notch."}
                        </Typography>
                      </>
                    }
                  />
                </ListItem>
                {index < 2 && <Divider />}
              </Box>
            )
          )}
        </List>
      </Item>
    </Grid>
  );
};

export default CustomerFeedback;
