import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
// import Image from 'next/Image'
// import { useRouter } from 'next/router'
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { useChannels } from '../hooks/apps/useChannels'
// import CheckIcon from '@mui/icons-material/Check'

const Page = ({ children }) => {
  return (
    <>
      <Stack direction="row" justifyContent={"space-between"} spacing={10}>
        <Box display={"flex"} flexDirection={"row"}>
          <img
            src="https://greenentertainment.s3.amazonaws.com/thumbnail/800cd36c84d1a17fff205d5549528048thumb.0000000.jpg"
            width={"100px"}
            height={"100px"}
            alt=""
          />
          {/* <Image
            src={store?.entity?.thumnail_url || '/images/avatars/avatar.png'}
            width='100px'
            height='100px'
            alt='Remy sharp'
            style={{ borderRadius: 50 }}
          /> */}
          <Stack direction="column" spacing={0} marginLeft={5}>
            <Typography variant="h4" margin={0}>
              {"John Doe"}
            </Typography>
            <Typography variant="h5" margin={0} mt="0" color={"#707070"}>
              @{"Not Availble"}
            </Typography>
            <Typography variant="h6" margin={0} mt="0">
              {0} Followers
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Button
            sx={{
              display: "flex",
              margin: "auto",
              width: "200px",
            }}
            variant="contained"
            type="submit"
          >
            {"Subscribed"}
          </Button>
        </Box>
      </Stack>
      <Link to={`/home`} style={{ textDecoration: "none" }}>
        <Button>Home</Button>
      </Link>
      <Link to={`/about`} style={{ textDecoration: "none" }}>
        <Button>About</Button>
      </Link>
      {/* <Link to={`/channels/${store?.entity.id}/playlist`}> */}
      <Button>Playlist</Button>
      {/* </Link> */}
      {/* <Link to={`/channels/${store?.entity.id}/channels`}> */}
      <Button>Channels</Button>
      {/* </Link> */}
      <Box sx={{ paddingY: 10 }}>{children}</Box>
    </>
  );
};

export default Page;
