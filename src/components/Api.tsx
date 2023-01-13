import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { ApiType } from "../app/api";
import { getData } from "../app/api";
import { stringify } from "querystring";
import { fetchData } from "../services/fetchData";
import {
  Box,
  Button,
  Card,
  Chip,
  CircularProgress,
  Typography,
} from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

export default function Api() {
  // async function getData() {
  //   try {
  //     const { data } = await axios.get("http://localhost:3005/useritems");
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  // let data: any = getData();
  // console.log(data, "ini data dari server");
  const dispatch = useDispatch();
  const dataSnack = useSelector((state: any) => state.api);

  const [dataApi, setDataApi] = useState<any>([]);

  useEffect(() => {
    const ambilData = async function () {
      const data = await fetchData();
      console.log(data?.data, "dari komponent");
      setTimeout(() => {
        setDataApi(data?.data);
      }, 7000);
      // dispatch(getData(dataApi));
    };
    let data2: any = ambilData();
  }, []);

  console.log(dataApi, "data state 2");

  if (dataApi == dataApi.length) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "350px" }}
      >
        <CircularProgress />
      </Box>
    );
  }
  // console.log(dataSnack, "stateee dari reducer");

  return (
    <div>
      {dataApi.map((data: any) => {
        return (
          <div style={{ width: "100%", height: "auto" }}>
            <Stack
              spacing={2}
              direction="row"
              flexWrap="wrap"
              justifyContent="center"
            >
              <Card sx={{ marginBottom: 4, maxWidth: 345 }}>
                {data.imgUrl ? (
                  <CardMedia
                    sx={{ height: 190 }}
                    image={data.imgUrl}
                    title="green iguana"
                  />
                ) : (
                  <Skeleton
                    animation="wave"
                    sx={{ height: 190 }}
                    width="100%"
                  />
                )}
                <CardContent>
                  {data.name ? (
                    <Typography gutterBottom variant="h5" component="div">
                      <Chip label={data.name} />
                    </Typography>
                  ) : (
                    <Skeleton
                      animation="wave"
                      width="300px"
                      sx={{ height: 10 }}
                    />
                  )}
                  {data.description ? (
                    <Typography gutterBottom variant="h5" component="div">
                      {data.description}
                    </Typography>
                  ) : (
                    <Skeleton
                      animation="wave"
                      width="300px"
                      sx={{ height: 10 }}
                    />
                  )}
                  {data.description ? (
                    <Typography gutterBottom variant="h5" component="div">
                      Lizards are a widespread group of squamate reptiles, with
                      over 6,000 species, ranging across all continents except
                      Antarctica
                    </Typography>
                  ) : (
                    <Skeleton animation="wave" height={10} width="100%" />
                  )}

                  {/* <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography> */}

                  {data.price ? (
                    <Typography gutterBottom variant="h5" component="div">
                      Rp{data.price.toLocaleString("id-ID")}
                    </Typography>
                  ) : (
                    <Skeleton animation="wave" height={10} width="100%" />
                  )}
                  {/* <Typography variant="body2" color="text.secondary">
                    Rp{data.price.toLocaleString("id-ID")}
                  </Typography> */}
                </CardContent>
                {data.price ? (
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                ) : (
                  <Skeleton animation="wave" height={10} width="100%" />
                )}
                {/* <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions> */}
              </Card>
            </Stack>
          </div>
        );
      })}
    </div>
  );
}
