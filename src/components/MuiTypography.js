import { Typography } from "@mui/material";

const MuiTypography = () => {
  //gutterBottom provides extra space below the heading.
  return (
    <>
      <Typography variant="h1">h1 heading</Typography>
      <Typography variant="h2">h2 heading</Typography>
      <Typography variant="h3">h3 heading</Typography>
      <Typography variant="h4">h4 heading</Typography>
      <Typography variant="h5">h5 heading</Typography>
      <Typography variant="h6">h6 heading</Typography>

      <Typography variant="body1" gutterBottom>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
        unde iusto exercitationem beatae odit animi eveniet quos, modi debitis
        laudantium laborum iste molestias provident consequatur voluptate
        officiis fugit. Nesciunt, nobis.
      </Typography>
      <Typography variant="body2">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex architecto
        ut ducimus voluptas incidunt delectus reprehenderit quibusdam!
        Voluptatem hic facere id tempora aliquid quibusdam, porro tenetur
        maiores repellat ab numquam?
      </Typography>
    </>
  );
};
export default MuiTypography;
