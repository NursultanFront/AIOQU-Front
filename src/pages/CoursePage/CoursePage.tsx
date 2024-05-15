import { useCallback, useMemo, useState } from "react";

import { ProfileBar } from "@/components/ProfileBar/ProfileBar";

import styles from "./CoursePage.module.scss";

import "../index.scss";
import {
  Box,
  Stack,
  CardMedia,
  CardContent,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StyledTreeExample from "@/components/course-page/tree-module/TreeModule";

type Props = {
  img?: string;
  title: string;
};

const CoursePage = (props: Props) => {
  const { img, title } = props;

  const image = useMemo(() => {
    return img
      ? img
      : "https://img.freepik.com/premium-vector/stem-education-logo-banner-on-white-background_1308-62258.jpg?w=2000";
  }, [img]);

  return (
    <div className="universal-layout">
      <div className="unversal-header">
        <div className="unversal-header__left-block">
          <div>
            <h2 className={styles["title-h2"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <Box
              sx={{
                p: 3,
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <Stack direction="row">
                <CardMedia
                  component="img"
                  alt="course"
                  height="118"
                  image={image}
                  sx={{ width: 174, objectFit: "contain" }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ color: "#8F92B5" }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </Typography>
                  <div className={styles.card__text}>
                    You’ve completed course for 60%
                  </div>
                </CardContent>
              </Stack>
            </Box>
          </div>
        </div>
        <div className="unversal-header__right-block">
          <ProfileBar />
        </div>
      </div>
      <div
        style={{ padding: "24px" }}
        className={`universal-content ${styles.content}`}
      >
        <div className={styles.content__left}>
          <div className={styles.content__item}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Introduction
              </AccordionSummary>
              <AccordionDetails>
                Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                vulputate libero et velit interdum, ac aliquet odio mattis.
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos.
              </AccordionDetails>
            </Accordion>
          </div>

          <div className={styles.content__item}>
            <Accordion defaultExpanded>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                Worem ipsum
              </AccordionSummary>
              <AccordionDetails>
                <StyledTreeExample />
              </AccordionDetails>
            </Accordion>
          </div>
        </div>
        <div className={styles.content__right}></div>
      </div>
    </div>
  );
};

export default CoursePage;
