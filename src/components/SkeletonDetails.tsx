import { Container, SkeletonText } from "@chakra-ui/react";

function SkeletonDetails() {
  return (
    <Container>
      <SkeletonText
        spacing={4}
        noOfLines={1}
        mt="4"
        mb="5"
        skeletonHeight={4}
      />
      <SkeletonText
        noOfLines={1}
        spacing={4}
        borderRadius={200}
        skeletonHeight={280}
      />
      <SkeletonText noOfLines={5} mt={4} spacing={4} />
    </Container>
  );
}

export default SkeletonDetails;
