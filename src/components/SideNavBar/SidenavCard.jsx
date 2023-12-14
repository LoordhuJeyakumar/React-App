// @mui material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Icon from "@mui/material/Icon";
import Link from "@mui/material/Link";

// React components
import UIButton from "../UIButton";
import BoxComponent from "../BoxComponent/BoxComponent";
import UITypography from "../UITypography/UITypography";

// Custom styles for the SidenavCard
import {
  card,
  cardContent,
  cardIconBox,
  cardIcon,
} from "examples/Sidenav/styles/sidenavCard";

// Soft UI Dashboard React context
import { useSoftUIController } from "context";

function SidenavCard() {
  const [controller] = useSoftUIController();
  const { miniSidenav, sidenavColor } = controller;

  return (
    <Card sx={(theme) => card(theme, { miniSidenav })}>
      <CardContent sx={(theme) => cardContent(theme, { sidenavColor })}>
        <BoxComponent
          bgColor="white"
          width="2rem"
          height="2rem"
          borderRadius="md"
          shadow="md"
          mb={2}
          sx={cardIconBox}
        >
          <Icon
            fontSize="medium"
            sx={(theme) => cardIcon(theme, { sidenavColor })}
          >
            star
          </Icon>
        </BoxComponent>
        <BoxComponent lineHeight={1}>
          <UITypography variant="h6" color="white">
            Need help?
          </UITypography>
          <BoxComponent mb={1.825} mt={-1}>
            <UITypography variant="caption" color="white" fontWeight="medium">
              Please check our docs
            </UITypography>
          </BoxComponent>

          <UIButton
            component={Link}
            href="https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/"
            target="_blank"
            rel="noreferrer"
            size="small"
            color="white"
            fullWidth
          >
            documentation
          </UIButton>
        </BoxComponent>
      </CardContent>
    </Card>
  );
}

export default SidenavCard;
