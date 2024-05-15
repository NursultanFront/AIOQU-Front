import { ProfileBar } from "@/components/ProfileBar/ProfileBar";

import { Box, Stack, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useMemo } from "react";

import styles from "./ModulePage.module.scss";

import "../index.scss";

type Props = {
  img?: string;
  title?: string;
};

const ModulePage = (props: Props) => {
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
      ></div>
    </div>
  );
};

export default ModulePage;
