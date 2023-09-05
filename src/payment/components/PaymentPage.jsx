import React from "react";
import { Box, Typography, Divider } from "@mui/material";

export default function PaymentPage() {
  return (
    <>
      <Typography
        variant="h1"
        color="primary"
        fontWeight={600}
        fontFamily={"roboto"}
        sx={{ textAlign: "center", fontSize: "50px" }}
      >
        Concept Payment Page
      </Typography>
      <br />
      <Divider variant="middle" />
      <Typography
        variant="p"
        color="primary"
        sx={{ textAlign: "left", ml: 4, mt: 4 }}
        display={"flex"}
        fontSize={"35px"}
      >
        This is a Concept Payment Page. <br />
        <br />
        The payment IFRAME is totally
        <br /> functional <br />
        <br />
        and uses actual test parameters. <br />
        <br />
        for a successful transaction use:
        <br />
        <br />
        5326105300985606 <br />
        <br />
        for error use card: <br />
        <br />
        4580458045804580
      </Typography>
      <Box
        pt={"4vw"}
        pb={"4vw"}
        display={"flex"}
        justifyContent={"center"}
        marginTop={-90}
      >
        <iframe
          src="https://gateway20.pelecard.biz/PaymentEnquiry/Index?peGUID=924be078-7f8d-4a5c-b191-11bc2860cf36"
          height="662"
          width="650"
          title="Iframe Example"
          frameBorder={1}
        ></iframe>
      </Box>
    </>
  );
}
// 5326105300985606;
